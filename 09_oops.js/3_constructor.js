class Car {
    start() {
        console.log("Start");
    }
    stop() {
        console.log("stop");
    }
    // constructor
    constructor(brand) {
        console.log("creating new object");
        this.brand = brand;
    }
}
let fortuner = new Car("fortuner");
let lexus = new Car("lexus");