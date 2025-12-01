const balance = new Number(100);         // new object me define kro jo ki number type ka hai 
console.log(balance);
console.log(balance.toString().length)

const number = 123.85943
console.log(number.toPrecision(4))      // pehle ke 3 number ko precise krke dega
console.log(number.toFixed(2))          // percision value upto 2 after the decimal

const nums = 100000;
console.log(nums.toLocaleString('en-IN'))


// ************************************** MATHS ************************************************

console.log(Math)
console.log(Math.abs(-5))               // negative sign remove hogi
console.log(Math.round(4.7))            // roundoff value dega
console.log(Math.ceil(4.1))             // badha ke dega
console.log(Math.floor(4.9))            // ghatake dega

console.log(Math.random());                    // value between 0 to 1 
console.log((Math.random()*10)+1);             // value between 1 to 10
console.log(Math.floor((Math.random()*10)+1)); // 1 to 10 and neeche wali

// value between 10 and 20
const min = 10, max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min)