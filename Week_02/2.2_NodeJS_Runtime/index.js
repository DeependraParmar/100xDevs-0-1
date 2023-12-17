const express = require("express");
const port = 3000;
const app = express();

app.get('/', (req,res,next) => {
    res.send("Hello, I am live guys");
})


app.listen(port, ()=> {
    console.log(`Server running at port http://localhost:${port}`);
})