// map() method creates a new array by transforming each element in the original array.

const myNumbers = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10];
// console.log(myNumbers.map( (num) => num+10) );
// console.log(myNumbers.map( (num) => { return num+10}) );


// Chaining 
const newNums = myNumbers
                .map(num => num*10)
                .map(num => num+1)
                .filter(num => num > 10 )
console.log(newNums)