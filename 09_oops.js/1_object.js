// It is an entity having state and behavior
// It has special property called prototype(ye khudme ek object hai jisme pehle se kuch kuch properties hote hai)

const student = {
    fullName: "Khan Farhan Ahmed",
    marks: 90.40,
    printMarks: function() {
        console.log("marks = ",this.marks);
    },
};
console.log(student);


const employee = {
    calcTax1() {
        console.log("Tax rate is 10%");
    },
    calcTax2: function() {
        console.loglog("Tax rate is 10%");
    },
}
const karan = {
    salary: 500000,
};
karan.__proto__= employee;     // making prototye so that employee ke functions hum karan wale object me use kar sake

