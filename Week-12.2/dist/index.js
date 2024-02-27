"use strict";
;
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: 'Deependra', age: 20 }, { name: 'Sushil', age: 22 });
console.log("Answer in age is: ", age);
