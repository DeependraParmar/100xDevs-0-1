interface User{
    readonly id: string,
    name: string,
    age: number,
    email: string,
    password: string,
};

type UpdateProps = Pick<User, 'age' | 'name'>
type PartialProps = Partial<UpdateProps>
 
function sumOfAge(user1: UpdateProps, user2: UpdateProps){
    return user1.age + user2.age;
}

const age = sumOfAge({ name: 'Deependra', age: 20}, { name: 'Sushil', age: 22});
console.log("Answer in age is: " ,age);
