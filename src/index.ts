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
interface UserType{
    name:string;
    age:number;
    isAdmin?:boolean; //optional property

}
function printUser(user:UserType):void{
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    if(user.isAdmin){
        console.log(`Is Admin: ${user.isAdmin}`);
    }

}
const user1=printUser({
    name:"John Doe",    
    age:30,
    isAdmin:true
});
console.log(user1);

// Learn about type
// in type we can use union type 
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