const fs = require("fs");
const path = require("path");

const filename = path.join(__dirname , "a.txt");

function readMyFile(callback){
    fs.readFile(filename, "utf-8", function(error,data){
        callback(data);
    });
}

function onDone(data){
    console.log(data);
}

readMyFile(onDone);