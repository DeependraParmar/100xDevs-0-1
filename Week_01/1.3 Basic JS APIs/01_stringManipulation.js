let str = "Hello World";

// for getting the overall length of the string 
function getLength(str){
    console.log("Original String: " + str);
    console.log("Length of the string: " + str.length);
}
getLength(str);
console.log();


// for finding the index of the substring in the main string 
function findIndexOf(str,target){
    console.log("Original String: " + str);
    console.log("Index is: " + str.indexOf(target));
}
findIndexOf(str,"World");
console.log();


// for finding the last index of the substring in the main string 
function findIndexOf(str,target){
    console.log("Original String: " + str);
    console.log("Index is: " + str.lastIndexOf(target));
}
findIndexOf("Hello World World World","World");


// for getting the slice from a string 
function getSlice(str,start,end){
    console.log("Original String: " + str);
    console.log("After Slicing: " + str.slice(start,end));
}
getSlice(str,2,10);
console.log();

// for replacing a string with another one
let rep = "Hello World";
console.log(rep.replace("World","JavaScript"));
console.log();

// for splitting different words of a string and get array of it.
let sentence = "hey I am feeling fine now";
console.log(sentence.split(" "));
console.log();

// for trimming the extra whitespace along side of the string 
let value = "                    deependra parmar         ";
console.log(value.trim());
console.log();

// for converting the whole string into uppercase 
console.log(str.toUpperCase());

// for converting the whole string into lowercase 
console.log(str.toLowerCase());