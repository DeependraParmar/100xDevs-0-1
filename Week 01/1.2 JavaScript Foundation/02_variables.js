// Variables are used to store data or values.
// 1. var: global scope
// 2. const: constant value
// 3. let: local scope


var a = 1;
console.log(a);
a = 10;

const b = 2;
// b = 10; const cannot be changed
console.log(b);

let c = 3;
c = 30;
console.log(c);

{
    console.log("var in scope: " + a);
    console.log("let in scope: " + c);
}


// Datatypes: NNSSBBU 
let firstName = "Deependra Parmar";
let age = 20;
let isMarried = false;

console.log(`Name of the person is ${firstName}, his age is ${age} and his married status is ${isMarried}`);
console.log();



