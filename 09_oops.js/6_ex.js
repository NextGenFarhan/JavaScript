let Data = "secret information";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Here is your data");
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        Data = "some new secret value";
    }
}

let student1 = new User("Farhan", "farhan770@gmail.com");
let student2 = new User("rehan", "rehanbalbali@gmail.com");
let student3 = new User("hasad", "hasadjalali@gmail.com");

let admin1 = new Admin("admin", "admin@clg.com");