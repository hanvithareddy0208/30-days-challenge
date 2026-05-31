// javascript foundation

//1.variables
// var name="hanvitha";
// let age = 20;
// const place = "hyderabad";
//var
// var a = 28;
// var a = 37;
// console.log(a);
//let
// let b = 56;
// b = 48;
// console.log(b);
//const
// const c =58;
// console.log(c);

// Practice Questions
//1. Create a variable storing your name.
// let name = "hanvitha";

//2.Create a variable storing your age.
// let age = 20;

//3.Swap two numbers.
// let A = 20;
// let B = 30;
// let temp = A;
// A = B;
// B = temp;
// console.log(A);
// console.log(B);

//4.Store price and quantity, calculate total.
// let mango_price = 200;
// let quantity = 7;
// let total;
// total = mango_price*quantity;
// console.log(total);

//5.Create constants for PI and GST.
// const PI = 1.65847;
// const GST = 0.4578;

//6.Store different data types in variables.
// let age = 18;
// console.log(typeof(age));
// let name="hanvitha";
// console.log(typeof(name));
// let ispass = true;
// console.log(typeof(ispass));
// let num = 175477879797989;
// console.log(typeof(num));
// let x = null;
// console.log(typeof(x));
// let y;
// console.log(typeof(y));
// let id = Symbol();


//7.Check the type of a variable using typeof.
// let age = 18;
// let name="hanvitha";
// let ispass = true;
// let num = 175477879797989;
// let x = null;
// let y;
// let id = Symbol();


//8.Create a variable and reassign its value.
// var a = 57;
// var a =67;
// console.log(a);

// let b = 47;
// let b = 57;
// b = 47;

// const c = 36;
// c = 57;

//9.Compare let and var.
//var - reassign, re declare, function scope
//let - re assign, block scope,
//const - block scope

//10.Create variables for student details.
// let student ={
//     name: "hanvitha",
//     age: 20,
//     ispass: true,
//     place: "hyderabd",
// }
// console.log(student);
// console.log(student["name"]);



//2.Data Types
//primitive
// let age = 18;
// console.log(typeof(age));
// let name="hanvitha";
// console.log(typeof(name));
// let ispass = true;
// console.log(typeof(ispass));
// let num = 175477879797989;
// console.log(typeof(num));
// let x = null;
// console.log(typeof(x));
// let y;
// console.log(typeof(y));
// let id = Symbol();
// console.log(typeof(id));

//non-primitive - object
// let student ={
//     name: "hanvitha",
//     age: 20,
//     ispass: true,
//     place: "hyderabd",
// }
// console.log(student);
// console.log(student["name"]);

//3.operators
// let a = 10;
// let b = 20;
// console.log("arthmetic");
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log("exponential");
// console.log(a**b);
// console.log("increment");
// console.log(a++);
// console.log(++a);
// console.log("decrement");
// console.log(--a);
// console.log(a--);
// console.log("assignment");
// console.log(a+=b);
// console.log(a-=b);
// console.log(a*=b);
// console.log(a/=b);
// console.log("comparison");
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a>b);
// console.log(a>=b);
// console.log("logical");
// console.log(a&&b);
// console.log(a||b);
// console.log(a!=b);
// console.log("ternary");
// console.log(a>b?"yes":"no");

//functions
//function declaration
// function greet(){
//     console.log("hello");
// }
// function add(a,b){
//     return a+b;
// }
// console.log(add(100,400));

//1.Function to print name.
// function name(){
//     console.log("hanvitha");
// }

// //2.Function to add two numbers.
// function add(a,b){
//     return a+b;
// }
// console.log(add(100,200));

// //3.Function to subtract numbers.
// function sub(a,b){
//     return a-b;
// }
// console.log(sub(100,200));

// //4.Function to multiply numbers.
// function mul(a,b){
//     return a*b;
// }
// console.log(mul(100,200));

// //5.Function to divide numbers.
// function div(a,b){
//     return a/b;
// }
// console.log(div(100,200));

// //6.Function to find square.
// function square(a){
//     return a**2;
// }
// console.log(square(10));

// //7.Function to find cube.
// function cube(a){
//     return a**3;
// }
// console.log(cube(10));

// //8.Function to check even/odd.
// function evenodd(a){
//     if(a%2==0){
//         return console.log("even");
//     }else{
//         return console.log("odd");
//     }
// }
// evenodd(10);

// //9.Function to find maximum of two numbers.
// function max(a,b){
//     if(a<b){
//         return console.log(b);
//     }else{
//        return console.log(a);
//     };
// }
// max(10,50);

// //10.Function to calculate simple interest.
// function simpleInterest(p,r,t){
//     return (p*r*t)/100;
// }
// console.log(simpleInterest(1000,5,2));

//arrow function
// let greet = () =>{
//     console.log("hello");
// }

//1.Arrow function to print name.
// let name = () =>{
//     console.log("hanvitha");
// }

//2.Arrow function to add two numbers.
// let add = (a,b) => {
//     return a+b;
// }
// console.log(add(100,200));

//additional questions
//1.Find largest among 3 numbers.
// const maxOfThree=(a,b,c)=>(a>b?(a>c?a:c):(b>c?b:c));
// console.log(maxOfThree(100,300,50));

//2.Check positive, negative, zero.
// const posNegZer0=(a)=>{
//     if(a===0){
//         console.log("zero");
//     }else if(a<0){
//         console.log("negative");
//     }else{
//         console.log("positive");
//     }
// }
// console.log(posNegZer0(-4));

//3.Check leap year.
// let year = 2020;
// if(year%4==0){
//     console.log("leap");
// }else{
//     console.log("non leap");
// }

//4.Find factorial.
// let a = 4;
// let fact =1;
// for(let i=1;i<=a;i++){
//     fact = fact*i;
// }
// console.log(fact);

//day task
//calculator




