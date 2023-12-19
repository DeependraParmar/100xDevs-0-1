const mongo_uri = `mongodb+srv://100xdevs:BQ8eKZvriLMq03to@cluster0.sxwb9sq.mongodb.net/Users?retryWrites=true&w=majority`

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const connectDB = () => {
    mongoose.connect(mongo_uri,{});
    console.log(`MongoDB Connected`);
}

const schema = mongoose.Schema({
    name: String,
    username: String,
    password: String
});

const User = new mongoose.model("Users", schema);

connectDB();


app.get("/", (req,res,next) => {
    res.send("Welcome to our website");
});
app.post("/signin", async(req,res,next) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const isUser = await User.findOne({username: username});
    if(isUser){
        return res.status(400).json({
            success: false,
            message: "User already exists.."
        });
    }

    let user = await User.create({
        name,username,password
    });

    res.status(200).json({
        success: true,
        message: "User created successfully",
        user: user
    })
})


app.listen(3000, () => {
    console.log(`Server live at http://localhost:3000`);
})