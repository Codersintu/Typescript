// second class 14.2
// Interface implementation
interface Address {
    city: string;
    state?: string; // Optional property '?' it means state may or may not be present
    pincode: number;
}
interface Person {
    name: string;
    age: number;
    address: Address;
}

interface user{
    name: string;
    age: number;
    address:Address
}

function displayDetails(person: Person):boolean {
if(person.age > 18){
    return true;   
}else{
    return false;

}
}
console.log(displayDetails({name: "John", age: 20, address:{city: "New York", state: "NY", pincode: 10001}}));
console.log(displayDetails({name: "Doe", age: 16, address:{city: "Los Angeles", state: "CA", pincode: 90001}}));

interface People{
    name:string;
    age:number;
    greet:()=>string;
}
let employee:People={
    name:"Alice",
    age:30, 
    greet:():string=>{
        return "Hello, "+employee.name;
    }
}
console.log(employee.greet());

// define class that implements the interface
interface users{
    name:string;
    age:number;
    isLegal():boolean; // Optional property
}
class Student implements users{
    name:string;
    age:number;
    salary?:number; // Optional property
    constructor(name:string, age:number,salary?:number){
        this.name=name;
        this.age=age;
        this.salary=23000;
    }
    isLegal(){
        return this.age>18;
    }
}
// define extends class which inherits the properties of Student class
class God extends Student{ //extends means inheritance
    constructor(name:string, age:number,salary?:number){
        super(name,age);
        this.salary=23000;
    }
}
const student1=new Student("Bob",22);
console.log(student1);

// Qna:Understanding extends in TypeScript/JavaScript with examples
class Vehicle {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    start(): void {
        console.log(`${this.brand} vehicle starts.`);
    }
}

class Car extends Vehicle {
    start(): void {
        console.log(`${this.brand} car starts.`);
    }
}

const myCar = new Car('Toyota');
myCar.start(); // Toyota car starts.


// Qna:Understanding implements in TypeScript with examples
interface Appliance {
    brand: string;
    turnOn(): void;
}

class WashingMachine implements Appliance {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    turnOn(): void {
        console.log(`${this.brand} washing machine is now on.`);
    }
}

const myWasher = new WashingMachine('LG');
myWasher.turnOn(); // LG washing machine is now on.


// Array in TS
interface Cat{
    name:string;
    age:number;
}
function getCatNames(cats:Cat[]){
    const isAnyCatLegal = cats.find(cat => cat.age > 18);
    if (isAnyCatLegal) {
        console.log("legal");
    } else {
        console.log("not legal");
    }
}
let cats:Cat[]=[
    {name:"Tom", age:5},
    {name:"Jerry", age:3},
    {name:"Kitty", age:20}
];
getCatNames(cats);