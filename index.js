"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1; //type inferencing
console.log(x);
function add(a, b) {
    return `hello ${a} ${b}`;
}
console.log(add("John", "Doe"));
function add2(a, b) {
    return a + b;
}
console.log(add2(10, 20));
function isLegalAge(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegalAge(20));
console.log(isLegalAge(10));
//# sourceMappingURL=index.js.map