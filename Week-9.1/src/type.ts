type UserType = {
    firstName: string,
    lastName: string,
    age: number,
}

type IdType = string | number;

const printId = (id: IdType): void => {
    console.log(id);
}

printId(20);
printId('hello');

type EmployeeType = {
    name: string,
    startDate: string,
}

type Manager = {
    name: string,
    department: string,
}

type Lead = EmployeeType & Manager;
const deependra:Lead = {
    name: "Deependra Parmar",
    department: "Development",
    startDate: String(Date.now()),
}

console.log(deependra);