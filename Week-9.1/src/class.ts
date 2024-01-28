interface Person{
    name: string,
    age: number,
    greet: (phrase: string) => void,
}


class Employee implements Person{
    name: string;
    age: number;

    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }

    greet = (phrase: string): void => {
        console.log(`Hello, ${this.name}, ${phrase}`);        
    };
}

const e1 = new Employee("Deependra", 20);
e1.greet("Good Morning");