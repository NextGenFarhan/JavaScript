let myHeroes = ["hero1", "hero2", "hero3"]
let heroPower = {
    hero1: "hammer",
    hero2: "sword",
    getHero3Power: function() {
        console.log(`Hero3 has the power of both hero1 &hero2 that is ${this.hero1}, ${this.hero2}`)
    }
}
Object.prototype.farhan = function(){
    console.log(`farhan is present in all objects `);
}
heroPower.farhan();

Array.prototype.farhan2 = function() {
    console.log(`farhan is present here also`)
}
myHeroes.farhan()
myHeroes.farhan2()




let myName = "farhan        ";
let mySurname = "   Khan     ";
// console.log(myName.trim().length)

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}
myName.trueLength();