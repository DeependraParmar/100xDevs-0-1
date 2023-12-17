class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("animal"); // static functions are associated with the class, not object.
    }
    speak() {
        console.log("Hi there, I speaks " + this.speaks);
    }

}

let dog = new Animal("doggie",4,"bhow bhow"); // creating an object of the class
dog.speak(); // calling the function from the object
Animal.myType(); // calling the static function from the class