let name = "John";
let surname = "Doe";
let age = 18;
console.log("age was: "+age);
// let can be updated and is block scoped
age = 19;
console.table([name, surname, age]);

// pehle string tha fir seedha number ban gaya
let country = "India";
country = 1;
console.log(country);
// Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.

// const keyword cannot be updated but is block scopes
const pi = 3.14;
// pi = 3.142;
console.log(pi);


// multiple instructions are given using let
let a = 10;
console.log("The value of a is: " + a);
a = 25;
console.log("The update value of a is: " + a);
let b = 7 * a;
console.log("Thus, The value of b is: " + b);

// multiple instructions are given using const
const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);


// NOTE: var is also a keyword but it is not used mostly as it cannot be updated and is globally scoped...