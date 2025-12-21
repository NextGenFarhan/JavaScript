// The reduce() method reduces an array to a single value by accumulating results from each element.

const myNums = [1, 2, 3, 4]
const myTotal = myNums.reduce( function(acc, currVal) {
    // console.log(` Accumulator has: ${acc} and current Value has ${currVal}`)
    return acc+currVal;
}, 0)                               // 0 is the initia value
// console.log(myNums.reduce((acc,curr)=>acc+curr), 0)
// console.log(myTotal)



const shoppingCart = [
    {
        itemName: "js course",
        price: 3999
    },
    {
        itemName: "py course",
        price: 5999
    },
    {
        itemName: "java course",
        price: 19999
    }
]
console.log(shoppingCart.reduce((acc, item)=> acc+item.price, 0 ))