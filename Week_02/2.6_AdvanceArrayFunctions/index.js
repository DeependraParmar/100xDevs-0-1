// Arrow functions in JS 

const sum = (a,b) => {
    return a+b;
}

let ans = sum(19,49);
console.log("Sum is: " + ans);



// given an Array, give me back a new array in which every element is multiplied by 4.
const input = [1,2,3,4];

const output = input.map((value) => { // here, value is the individual element of the array
    return value * 4;
});
console.log(output);


// what is I tell u, given an input array, give back the even values from it
const numbers = [1,2,3,4,5,6,7,8,9];

const even = numbers.filter((n)=> { // here, n is the individual element of the array
    if(n%2 == 0){
        return true;
    }
    else{
        return false;
    }
});

console.log(even);