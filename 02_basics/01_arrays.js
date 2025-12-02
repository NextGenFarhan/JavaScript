// DECLARATION
// 1. let/const arrayName = [2, 4, 5, 7];
// 2. let/const arrayName = new Array(3, 4, 6, 5);

let arr =  [1, 3, 7, 9];
// console.log(arr);
// console.log(arr[2]);
// arr[0] = 786;
// console.log(arr[0]);
// console.log(delete arr[3]);                 // delete keyword makes empty hole on that index and the space is remained empty in that index
// console.log(arr)

// const kyaSeen = [1, 2, 4, "Farhan", true]

// SOME METHODS 
// console.log(arr.length);
// console.log(typeof(arr))
// console.log(arr.sort())
// console.log(arr.toString());
// console.log(arr.join(" and "))                                           // beech me and aajayenge aur string me convert kr dega 
/* shift, pop, unshift and push */
    // console.log(arr.shift())                                                     // pehla element nikalke usko return karega
    // console.log(arr.pop())                                                       // last element remove krke wohi return krdega
    // console.log(arr.push(100))                                                   // end me element add krega return updated length
    // console.log(arr.unshift("unshift"))                                          // start me element add krke nayi length return krega
/* slice and splice */
    // console.log(arr.slice(0, 2));                           // array ka part copy krke naya array return karega and original array me change nhi hoga
    // console.log(arr);
    // console.log(arr.splice(0, 1, 20, 30));                  // ye elements ko add, remove kr sakta hai but in the original array
    // console.log(arr)                                        // 0 and 1 se delete hoga aur 20, 30 woh positoin pe add hoga


// ARRAY properties
// Array is mutable (value can be changed) but string are not 
// these are resizable
// has mix data types
// Make Shallow Copy rather than deep copy: it is the copy whose properties share the same references point