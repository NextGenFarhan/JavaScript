let a1 = [1, 5, 3, 8]
let a2 = [2, 4, 6]
// 1. push 
// a1.push(a2);                     // a2 ko single element ki tarah push karega 
// console.log(a1);
// 2. concat
// a = a1.concat(a2);                  // yeh sirf naya array banata hai, store nahi kiya
// console.log(a1);                    // isme bus a1 ki value aayegi
// console.log(a);
// 3. spread operator [best way]
// const a = [...a1, ...a2]
// console.log(a)

const arr = [1,2,3,[3,4,5],24,65,34,[35,[43,32]]]
const arrangedArr = arr.flat(Infinity);                 // infinity depth tak arrange kr
// console.log(arrangedArr)

// SOME MORE ARRAY. METHODS 
console.log(Array.isArray("Farhan"));       // type of object return krta hai isiliye ye method use krro
console.log(Array.isArray([]));
// Kisi iterable ya array-like object ko array me convert karna
console.log(Array.from("Farhan"));              // array banadega
console.log(Array.from({name: "Farhan"}))       // isko bolna padega ki keys ka arrow banau ya value ka ***

let score1 = 100;
let score2 = 200;
let score3 = 300;
// Jo arguments aap pass karte ho, exactly unko ek array me daal deta hai
console.log(Array.of(score1, score2, score3))   // new array create krega