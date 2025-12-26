// it is a pasing down properties and methods from parents class to child class
// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }
// class Child extends Parent {}
// let obj = new Child();

class Person {
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("do nothing")
    }
    // cons
    Person() {
        this.species = "Homo sapiens"
    }
}
class Engineer extends Person {
    work() {
        console.log("solve problem, build something");
    }
}
class Doctor extends Person {
    work() {
        console.log("treat patients");
    }
}
let farhanObj1 = new Engineer();
let farhanObj2 = new Doctor();