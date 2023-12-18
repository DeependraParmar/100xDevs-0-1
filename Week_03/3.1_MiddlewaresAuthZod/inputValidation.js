const express = require("express");

const app = express();

app.use(express.json());  

app.get("/", (req,res,next) => {
    res.send("<h1>Health+ Hospital</h1>")
})
app.post("/health-checkup", (req,res,next) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    if(!kidneys){
        res.json({
            message: "No Input found!"
        });
        return;
    }


    res.send("You have " + kidneyLength + " kidneys");
})


// global catches: defined at the end of all the api's or all the routes and whenever there is any exception or any error in the above api's or the routes, the control will reach here at the end. Its main task is to hide the big exception error from the user and give him more sweet error despite that horror exception of the backend application. Its also done for the security purposes in order to hide the underlying complexity of the backend application. 
// They are special type of error handling middlewares and they basically have four arguments despite three. They helps to give the user a better error message.

app.use((err,req,res,next) => {
    res.status(500).json({
        message: "Internal Server Error",
    })
})

app.listen(3000, () => {
    console.log(`Server is up at http://localhost:3000`);
})