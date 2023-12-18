// Now, let's see how to use app.use(): app.use() helps us our express application to use the middlewares

const express = require("express");
const app = express();

const isAuthenticated = (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "deependra" || password != "password"){
        res.status(403).json({
            message: "Invalid Username or Password",
        });
        return;
    }
    next();
}
const isValidKidney = (req,res,next) => {
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            message: "Invalid Kidney ID"
        });
        return;
    }

    next();
}


app.get('/', (req,res,next) => {
    res.send("Welcome to Health+ Hospital");
});

// if I put isAuthenticated in the app.use() so, every api after first satisfies or verifies isAuthenticated

app.use(isAuthenticated);

app.get("/heart-checkup", (req,res,next) => {
    res.status(200).json({
        message: "Your heart is healthy...."
    });
});

app.get("/kidney-checkup", isValidKidney, (req,res,next) => {
    res.status(200).json({
        message: "Your kidney is healthy...."
    })
})


app.listen(3000, () => {
    console.log(`Server is up at http://localhost:3000`);
})