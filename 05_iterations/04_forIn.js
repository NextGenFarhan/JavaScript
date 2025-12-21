const str = "Hello guys"
for (const string in str) {
    // console.log(string)                 // return karega key (here index)
}


// ARRAY
const myArr = [2, 3, 4, 5, 6, 7, 8]
for (const key in myArr) {
    // console.log(key)                     // return index karega kyuki yaha key index hi hai 
}


// OBJECT
const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObj) {                        // not possible in forof loop as object is not iterable there 
    // console.log(key)                          // key return krta h
    console.log(`${key} ;- ${myObj[key]}`)
}


