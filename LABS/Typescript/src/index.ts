console.log("Hello");

let lunch: string = "Briyani";
console.log(lunch);

let number: Number = 5;
console.log(number);

//function
function add(a:number, b:number ): number{
    return a + b;
}

const result = add(3,4);
console.log(result);


//interface
interface User{
    name:string;
    age:number;
    email:string;
}

const userme: User = {
    name : "HARSH",
    age: 22,
    email: "harsh.mishra@ascendion.com"
}

console.log(userme);


//classes and inheritance
class Animal1 {
    constructor(public name: string){}

    makeSound1() : void{
        console.log(`${this.name} makes a sound`);

    }
}

class Dog1 extends Animal1 {
    makeSound2() : void{
        console.log(`${this.name} Barks`);
    }
}

const Animaldemo = new Animal1("CAT");
Animaldemo.makeSound1();
const Dogdemo = new Dog1("Buddy !!");
Dogdemo.makeSound1();
Dogdemo.makeSound2();



//generics
function identity<T>(arg: T): T{
    return arg;
}

const num = identity<number>(42);
const str = identity<string>("Hello Bhaiii");

console.log(num);
console.log(str);


//enums
enum Directions{
    Up,down,left,right
}
const move =Directions.Up;
console.log(move);

console.log(Directions[move]);
console.log(Directions[1]);


enum Direction1{
    up=1,
    down,
    left = 50,
    right = 51
}
console.log(Direction1.up);
console.log(Direction1.down);
console.log(Direction1.left);
console.log(Direction1.right);


//modules
