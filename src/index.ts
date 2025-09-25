// class 14.1
// let x:number =1; //type inferencing
// console.log(x);

// function add(a:string,b:string):string{
//     return `hello ${a} ${b}`;
// }
// console.log(add("John","Doe"))

// function add2(a:number,b:number):number{
//     return a+b;
// }           
// console.log(add2(10,20));

// function isLegalAge(age:number):boolean{
//     if(age>=18){
//         return true;
//     }else{
//         return false;
//     }   
// }
// console.log(isLegalAge(20));
// console.log(isLegalAge(10));

// function printName(fn:()=>void){
//     setTimeout(fn,5000);
// }
// printName(()=>console.log("John Doe"));

// learn about interfaces
// interface UserType{
//     name:string;
//     age:number;
//     isAdmin?:boolean; //optional property

// }
// function printUser(user:UserType):void{
//     console.log(`Name: ${user.name}`);
//     console.log(`Age: ${user.age}`);
//     if(user.isAdmin){
//         console.log(`Is Admin: ${user.isAdmin}`);
//     }

// }
// const user1=printUser({
//     name:"John Doe",    
//     age:30,
//     isAdmin:true
// });
// console.log(user1);

// Learn about type
// in type we can use intersection type 
type Manager={
    name:string | number;
    age:number | string;
    isAdmin?:boolean; //optional property
    role:string;
}
type Employee={
    name:string | number;
    age:number | string;
    isAdmin?:boolean; //optional property
    salary:number;
}
type teamleade=Manager & Employee; //intersection type

let m:Manager={
    name:"Alice",
    age:28,
    isAdmin:true,
    role:"Project Manager",
}

let e:Employee={
    name:"Bob",
    age:25,
    isAdmin:false,
    salary:50000,
}
let t:teamleade={
    name:"Charlie",
    age:30,
    isAdmin:true,
    role:"Team Lead",
    salary:70000,
}

// Union type
// Union can have either one or all
type Cat={
    name:string;
    age:number;
    meow:()=>string;
}
interface Dog{
    name:string;
    age:number;
    bark:()=>string;
}
type pet=Cat | Dog; //union type
let c:pet={
    name:"Tom",
    age:2,
    bark:():string=>{
        return "Bark Bark";
    }
}
console.log(c.bark());

function greet(user:pet){
    console.log(`Hello ${user.name}`);
    if("meow" in user){
        console.log(user.meow());
    }
    if("bark" in user){
        console.log(user.bark());
    }
    console.log(user.age);
}
greet(c);