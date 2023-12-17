const fs = require("fs");
const path = require("path");

let filename = path.join(__dirname , "a.txt");

function readMyFile(){
    return new Promise(function(resolve,reject){
        fs.readFile(filename, 'utf-8', function(error,data){
            resolve(data);
        })
    })
}

async function main(){
    let promise = await readMyFile();
    console.log(promise);
}

main();