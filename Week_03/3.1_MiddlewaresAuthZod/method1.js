// There are two ways to ensure the user's authenticity: Authentication and Input Validation using Middlewares.

const express = require("express");
const app = express();

app.get("/", (req,res,next) => {
    res.send("Welcome to Health+ Hospital");
})

app.get("/health-checkup", (req,res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId; 

    if(username != "deependra" || password != "password"){
        res.status(400).json({
            message: "Invalid Username or Password"
        });
        return;
    }
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            message: "Invalid Inputs !",
        });
        return;
    }

    res.status(200).json({
        message: "Your Kidneys are totally fine.."
    })
})




app.listen(3000, () => {
    console.log(`Server live at http://localhost:3000`);
})