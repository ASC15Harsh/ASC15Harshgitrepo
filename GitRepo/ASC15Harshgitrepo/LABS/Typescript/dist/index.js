console.log("Hello");
let lunch = "Briyani";
console.log(lunch);
let number = 5;
console.log(number);
//function
function add(a, b) {
    return a + b;
}
const result = add(3, 4);
console.log(result);
const userme = {
    name: "HARSH",
    age: 22,
    email: "harsh.mishra@ascendion.com"
};
console.log(userme);
//classes and inheritance
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    makeSound1() {
        console.log(`${this.name} makes a sound`);
    }
}
class Dog1 extends Animal1 {
    makeSound2() {
        console.log(`${this.name} Barks`);
    }
}
const Animaldemo = new Animal1("CAT");
Animaldemo.makeSound1();
const Dogdemo = new Dog1("Buddy !!");
Dogdemo.makeSound1();
Dogdemo.makeSound2();
//generics
function identity(arg) {
    return arg;
}
const num = identity(42);
const str = identity("Hello Bhaiii");
console.log(num);
console.log(str);
//enums
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["down"] = 1] = "down";
    Directions[Directions["left"] = 2] = "left";
    Directions[Directions["right"] = 3] = "right";
})(Directions || (Directions = {}));
const move = Directions.Up;
console.log(move);
console.log(Directions[move]);
console.log(Directions[1]);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 50] = "left";
    Direction1[Direction1["right"] = 51] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.up);
console.log(Direction1.down);
console.log(Direction1.left);
console.log(Direction1.right);
