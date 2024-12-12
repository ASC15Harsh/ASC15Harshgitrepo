// console.log("Welcome");


// fullname ="Tony Stark";
// console.log(fullname);

// x=null;
// console.log(x);

// y=undefined
// console.log(y);

// const names = "Harsh"
// console.log(names);

// let age = 22
// console.log(age);

// // Datatypes
// // Number,string, Boolean,Undefined,Null,BigInt,Symbol

// const student = {
//     fullName : "Harsh M",
//     age : 22,
//     cgpa : 20,
// };
// console.log(student);
// console.log(student["fullName"]);
// console.log(student.age);
// student.age = student.age + 1;
// console.log(student.age);

// let a=5;
// let b=4;

//arithematic operator
// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a*b);
// console.log("a / b = ",a/b);
// console.log("a % b = ",a%b);
// console.log("a ** b = ",a**b);


//unary operator
//post - a++ ||||||  pre - ++a  
// console.log("a++ = ",++a);
// console.log("b-- = ",--b);


//assignment operator
// = , += , -= , *=  , %= , **=

//comparision operator
//== , === , != , !== , > , <= , > , >= 

//logical operators
// && , || , ! 


//conditional statement
// let agge = 15
// if(agge >= 18){
//     console.log("you can vote");
// }
// else{
//     console.log("you cannot vote");
// }


//alert("hello !");

// let num= prompt("Enter a number")
// if(num % 5 == 0){
//     console.log("number divisible by 5");
// }
// else{
//     console.log("not divisible by 5");
// }

// for (let i=1;i<=5;i++){
//     console.log("Harsh")
// }

// let i=1;
// while(i <= 5)
// {
//     console.log("Harsh M");
//     i++;
// }

//for-of loop
// let str= "Harsh Mishra"
// let size=0;
// for(let i of str){
//     console.log("i=" , i);
// size++;
// }

// console.log("size = ", size);



// for in loop

// let s={
//     name: "harsh",
//     age:22,
//     cgpa:10,
// };
// for (let i in student){
//     console.log("key = ", i, "value = ", student[i]);
// }


//string
// let str = "harsh mish";
// console.log(str[8]);

// //template literals
// let ss = `this is a template`;
// console.log(ss);


// let arr=[1,2,3,4,5];
// console.log(arr);


//---------------------------------------------------------


// function mf(){
//     console.log("this is function");
// }

// mf();

// function msg(ms , aa){
//     console.log(ms);
//     console.log(aa);
// }

// msg("harsh" , 22)


// function sum (x,y){
//     s=x+y;
//     return s;
// }

// let val= sum(3,4);
// console.log(val);


// //forEach loop

// let arr=["pune","delgi","haryama"];
// arr.forEach((val, idx , arr)=>{
//     console.log(val.toUpperCase() , idx , arr);
// })

// map

// let num = [1,2,3,4];
// let new_arr = num.map((val) => {
//     return val;
// });

// console.log(new_arr);

// //flter
// let ar=[1,2,3,4,5,6];
// let even_arr = ar.filter((val)=>{
//     return val % 2 == 0;
// })
// console.log(even_arr);


//dom
// console.log(window);

// console.log(window.document);
// console.dir(window.document);
// console.log(document.body);
//---------------------------------------------
// heading = document.getElementById("id1");
// console.log(heading);


//let add = document.querySelector("id2");
//console.dir(id2.innerText);
// id2.innerText = id2.innerText + " added new string 1";
// console.dir(id2.innerText);

// //let add2 = document.querySelector("id1");
// id1.innerText = id1.innerText + " added new string 2";
// console.dir(id1.innerText);

//----------------------------------------------
// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// console.log(newbtn);

// newbtn.style.backgroundColor = "red";

// let div= document.querySelector("div");
// div.append(newbtn);

//----------------------------------------------
//event



// let btn1=document.querySelector("button");

// // btn1.onclick = () => {
// //     console.log("btn1 was clicke");
// // }

//----------------------------------------------

// let curmode = 'light';

// btn1.addEventListener("click", () =>{
//     console.log("change mode");
//     if(curmode === "light"){
//         curmode= "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else{
//         curmode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(curmode);
// })


//-----------------------------------------------------

//classes and objects

// const students = {
//     fname : "hARSH",
//     mark : 91,
//     printMarks: function(){
//         console.log("marks = ", this.mark);
//     },
// };

// console.log(students.printMarks());


//----------------------------------

//async wait >> promise chain >> callback hell

//timeout

// function hello(){
//     console.log("Hello function");
// }

// setTimeout(hello , 4000);

// setTimeout(() =>{
//     console.log("2 seconds after");
// }, 2000);

//---------------------------------------
//callback hell
// function getdata(dataid, getnextdata){
//     setTimeout(() =>{
//       console.log(dataid ," seconds after");
//       if(getnextdata){
//       getnextdata();}
//      }, 2000);
// }

// getdata(1, ()=>{
//     console.log("getting data 2");
// getdata(2, () =>{
//     getdata(3);
// });
// });
//--------------------------------------------

//promises

// let pro = new Promise((resolve, reject) =>{
//     console.log("i am promise");
//     //resolve("success");
//     //reject("rejected by company");
// });

// console.log(pro);



// function getdata(dataid, getnextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(dataid, " seconds after");
//             resolve("success");
//             console.log("promise fulfilled");
//             if (getnextdata) {
//                 getnextdata();
//             }
//         }, 2000);
//     });
// }
// let pr = (getdata(1));
// pr.then(() => {
//     let pr2 = (getdata(2));
//     pr2.then(() => {
//         let pr3 = getdata(3);
//         pr3.then(()=>{
//             console.log("success");
//         });
//     });
// });
// console.log(pr);

//or we can call by:-

// getdata(1).then(() =>{
//     getdata(2).then(() =>{
//         getdata(3).then(()=>{console.log("success");});
//     });
// });


//-----------------------------------------
//async - await

// function getdata(dataid, getnextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(dataid, " seconds after");
//             resolve("success");
//             console.log("promise fulfilled");
//             if (getnextdata) {
//                 getnextdata();
//             }
//         }, 2000);
//     });
// }


// async function getdataasync() {
//     await getdata(1);   
//     await getdata(2);  
//     await getdata(3); 
//     console.log("success");
// }
// console.log(getdataasync());

//---------------------------------


//fetch api
const url = "http://cat-fact.herokuapp.com/facts"; 

// let promise = fetch(url);
// console.log(promise);

//document.addEventListener("DOMContentLoaded", () =>{
const factpara = document.querySelector("#fact");
const cf = document.querySelector("#catfact");

const getfacts = async () =>{
    console.log("fetching data");
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    //console.log(data[0].text);
    factpara.innerText = data[0].text;
};
cf.addEventListener("click", getfacts);
//console.log(getfacts());
//});