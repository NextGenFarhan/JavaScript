// let score = "33";
let score = "33abc";
console.log(typeof score);
let valueInNumber = Number(score);      // converting string to number
console.log(typeof valueInNumber);      // this is giving that the variable has number
console.log(valueInNumber);             // but when we print this number it gives NAN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

let Numbers = 33;
let stringNumber = String(Numbers)
console.log(typeof stringNumber);