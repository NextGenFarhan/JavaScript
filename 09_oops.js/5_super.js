// The super-keyword
// it is used to call the constructor of its parent class to access the parent's properties and methods

class Person {
    constructor() {
        console.log("Enter parent constructor ");
        // this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }
}
class Engineer extends Person {
    constructor(branch) {
        console.log("Enter child constructor ");
        super();             // used to invoke parent class constructor
        this.branch = branch;
        console.log(branch);
        
        console.log("Exit parent constructor ");
    }
    work() {
        console.log("solve problems, build something")
    }
}
let engObj = new Engineer("chemical eng");