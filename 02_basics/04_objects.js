// 2.
let user = new Object()       // 1st way singleton object
// let user = {}                 // 2nd way non singleton object
console.log(user)
user.id = "273hsb";
user.name = "dolly";
user.isLoggedIn = true;
console.log(user)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

const User1 = {
    email: "djksa@microsoft.com",
    fullName: {
        firstName: "djksa",
        lastName: "sjha",
    },
    isTrue: true
}
// console.log(User1.fullName.firstName)
// optional chaining 
// console.log(User1.fullName?.firstName)
// console.log(User1.fulldetail?.firstName)


// combining
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2)              // read mdn 
const obj3 = {...obj1, ...obj2}
// console.log(obj3)


// array ke andar objects 
const users = [
    {
        id: 1,
        gmail: "a@gmail.com"
    },
    {
        id: 2,
        gmail: "a@gmail.com"
    },
    {
        id: 4,
        gmail: "a@gmail.com"
    }
]
console.log(users[1].id)