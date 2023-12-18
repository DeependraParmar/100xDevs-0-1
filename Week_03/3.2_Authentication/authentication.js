// Authentication is the process to authenticate a user to access some routes. In order to prevent anyone to access certain resources of the application, we authenticate them before they access them.

// Dumb way: ask them to send their username and password in all the request in the headers.
// Pro way: Give user a token on signin/signup and ask them to send it whenever they send another requests in the future. Token will be deleted once they logout. Token is used to ensure the privacy in place of username and the password.


// project: let people signup in the website and after getting authenticated, show them the list of random people.
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const jwtPassword = "ry5483hdmkvnskru4839erj";

const users = [{
    username: "deependra1@gmail.com",
    password: "1234",
    name: "Deependra Parmar"
},
{
    username: "sushmit@gmail.com",
    password: "s1234",
    name: "Sushmit Sen"
},
{
    username: "praveen@gmail.com",
    password: "p1234",
    name: "Praveen Jadhav"
}]

const isUser = (username, password) => {

}

app.post("/signin", (req,res,next) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!isUser(username,password)){
        req.status(403).json({
            success: false,
            message: "User Not Exists!"
        });
        return;
    }

    let token = jwt.sign({username: username}, jwtPassword);
    res.status(200).json({
        success: true,
        token: token
    });
});


app.get("/users", (req,res,next) => {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
    }catch(error){
        return res.status(403).json({
            success: false,
            message: "Invalid Token!"
        })
    }
})