const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'a.txt');
function readMyFile(){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,'utf-8',function(error,data){
            resolve(data);
        })
    })
}

function onRead(data){
    console.log(data);
}
readMyFile().then(onRead); // whatever the resolve passes as data, reaches the ondone via readMyFile as readMyFile is itself returning a Promise.
// readMyFile() immediately returns the promise but the data after resolution is returned in async manner.
console.log("Hello, Print me first");