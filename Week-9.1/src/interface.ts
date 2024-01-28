interface User{
    firstName: string,
    lastName: string,
    email: string,
    age: number,
}

const user:User = {
    firstName: "Deependra",
    lastName: "Parmar",
    email: "me@mail.com",
    age: 20,
}

const isLegalUser = (user: User):boolean => {
    return (user.age>=18) ? true : false;
}

console.log("Can I drive? ", isLegalUser(user));
