// Provide or pass a function as an argument 
function sum(num1, num2, functionToCall){
    let result = num1 + num2;
    functionToCall(result); // calling back a function called as callback
}
function displayResult(result){
    console.log("Sum is: " + result);
}

sum(1,2,displayResult);


// for eg. we have
// 1. settimtout(function, duration); also a callback function
// 2. setinterval(function, duration); also a callback function which basically takes a function as input and proceeds.