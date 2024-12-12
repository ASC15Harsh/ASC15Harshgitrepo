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
    // constructor(name:string){
    //     super(name);
    // }
    makeSound2() : void{
        console.log(`${this.name} Barks`); //string interpolation
    }
}

const Animaldemo = new Animal1("CAT");
Animaldemo.makeSound1();
const Dogdemo = new Dog1("Buddy !!");
Dogdemo.makeSound1();
Dogdemo.makeSound2();


class phonenew{
    phonefeature : string;
    constructor(feature : string){
        this.phonefeature = feature;
    }
    displaydetails() : void{
        console.log("phone featurs are " +this.phonefeature)
    }
}

class smartphone extends phonenew{
    constructor(feature : string){
super(feature);
    }
    displayDetails(): void{
        console.log("smartphone features are " +this.phonefeature);
    }
}

const phone = new phonenew ("calling facility");
phone.displaydetails();
const phone1 = new smartphone (" camera , music");
phone1.displayDetails();



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
//done in different files


//type inference
let x:number = 10; //typescript infers the type of x as number
let y:string="hello"; // as string
let z : number | string = 10;
let c :boolean = true;
let d: any = "hello";
let e: any = 9;
let g:number[] = [1,2,3];
let h:string[] = ["hello" , "hello2"];
let i:boolean[] = [true,false];
let j:any[] = [1,"hello", true];
let k:[string,number]=["harsh",10]; //tuple

let l:object = {name: "harshh", age :22,emailids : { email_id : "123@gmail.com"},preference: ["sports","music"]};

console.log(x,y,z,x,d,e,h,i,j,k,l);
console.log(`l: ${typeof l}` , l);

//union-types

function printId(id: string | number) {
    console.log(id);
}

printId("101"); 
printId(101); 
interface Circle {
    kind: "circle";
    radius: number;
}
interface Square {
    kind: "square";
    sideLength: number;
}

// usage of union-types 

function getArea(shape: Circle | Square): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}



const carea: Circle = {
    kind: "circle",
    radius: 10
};

console.log(getArea(carea));
