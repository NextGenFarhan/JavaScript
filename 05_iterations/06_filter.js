// filter() method creates a new array with only the elements that pass a condition.

const Name = ["farhan", "rehan", "ayaan", "sufiyan", "sulaiman"]
const value = Name.forEach( (elem) => {
    // console.log(elem)
    return elem;
});
console.log(value)                  // *** FOR-EACH loop kuch return nhi krta


const myNums = [1, 2 ,3, 4, 5, 6, 7, 8, 9,10];

// let newNums = myNums.filter( num => num > 5);
// let newNums = myNums.filter( num => { return num > 5});         // console.log(newNums);

let newNumber = []
myNums.forEach(num => {
    if(num>4) {newNumber.push(num)}
});                                                                 // console.log(newNumber)
