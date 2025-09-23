let x:number =1; //type inferencing
console.log(x);

function add(a:string,b:string):string{
    return `hello ${a} ${b}`;
}
console.log(add("John","Doe"))

function add2(a:number,b:number):number{
    return a+b;
}           
console.log(add2(10,20));

function isLegalAge(age:number):boolean{
    if(age>=18){
        return true;
    }else{
        return false;
    }   
}
console.log(isLegalAge(20));
console.log(isLegalAge(10));