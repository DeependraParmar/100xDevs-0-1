const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9];
// we have push, pop, shift and unshift for insertion and deletion from the start and end points 


const arr3 = arr1.concat(arr2);
console.log(arr3);

// for each loop
function logSomething(thing){
    console.log(thing);
}
arr2.forEach(logSomething); // for printing the elements of the array 


// map, filter, find, sort: later 