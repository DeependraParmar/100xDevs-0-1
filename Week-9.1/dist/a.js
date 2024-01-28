"use strict";
let x = 1;
// console.log(x);
const greets = (firstname, lastname) => {
    console.log("Hello, ", firstname, lastname);
};
greets("Deependra", "Parmar");
const returnSum = (a, b) => {
    return a + b;
};
console.log(returnSum(10, 20));
// create the isLegal function 
const isLegal = (age) => {
    return age > 18 ? true : false;
};
console.log("Can I drive?", isLegal(22));
// create a function which takes another function as input(argument) and run it after 1 second.
const runAfterOneSecond = (func) => {
    setTimeout(() => {
        func();
    }, 1000);
};
runAfterOneSecond(() => console.log("I was run after 1 second"));
