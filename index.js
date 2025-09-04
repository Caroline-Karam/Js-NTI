// alert('Hello from external')

// document.writeln("<h1 style='color:red'>I love JS</h1>")
// document.write("I love javascript")
// document.write("<h1 style='color:green'>I love javascript</h1>")


// console.log("Hello world")


//////////////////////////////////////////////////////////////////////////////


//variable


// var x= 10
// let y = 30
// const z =50
// console.log(x);
// console.log(y);
// console.log(z);




// var x=10 
// let y=20 
// const z=30
// console.log(x);



// var namee="caro"    //string
// console.log( typeof namee );

// var num=20           //number 

// var num2=10.5       //number


// var isFired=true //boolean
//  var x
//  console.log(x);
//  console.log(typeof x);
 



// var w   
// console.log(typeof w);

// //undefined 


// var r =null     //object
// console.log(typeof r); 


////////////////////////////////////////////////////////////////////////////////////////////////
// var , let , const

//1- intialization

// var x

// let w

// // const z

// console.log(x );
// console.log(y);


// const age   


//2- Redeclaration


// var m=50;
// var m="mona"

// console.log(m);


// let m=50;  xxxxx
// let m="mona"

// console.log(m);


// const m=50;
// const m="mona"

// console.log(m);




//3- Reassign


// var x = 10
// x = 60
// console.log(x);


// let y = 60
// y = 50
// console.log(y);

// const z = 70
// z = 80
// console.log(z);


// var w=10  
// w=50

// console.log(w);


// let w=10
// w=50
// console.log(w);


// const w=10
// w=50  
// console.log(w);



//4- Scopes


//global scope
var w = 20
 
// function x(){
// var w = 10

// }


// local scope (fun scope and block scope)

// 1- fun scope
// function displayMsg(){

//     let test=80  //local scope
//     // console.log(test);

//     console.log(test , w);

// }

// displayMsg()

// console.log(test);  //xxxxxxxxxxxx



// 2- block scope in es.6 with let and const
// let and conset block scope but var is not

// {
//     var w=50
//     console.log(w);

//       let w=50
//       console.log(w);
// }


// {
//      var x = 50 
//      console.log(x)

//      let y = 70
//      console.log(y)
// }

// console.log(x);
// console.log(y)  



// for(var i=0;i<5;i++){

//     console.log(i);
// }

// console.log(i);

// ********

// for(let i=0;i<5;i++){

//     console.log(i);
// }

// console.log(i);  //xxxxxxxxxxxxxxxxxxx

// Q1
// var x = 5;

// function test2(){
//      var x="shahd"
//     console.log(x);
// }

// test2();

// console.log(x);

//  *******
// Q2

// let x=5;

// function test2(){
//     x= "devid"
//     console.log(x);
    
// }
// test2()
// console.log(x);




//5- Hoisting

//var x = undefined ,  let x , printData


// console.log(x);
// const x = 10

// console.log(x);
// var x =10


// console.log(x);
// let x=10


// printData()
// function printData(){
//     console.log("ay data");
// }

// data()

// function data(){
//     console.log("Hello");
    
// }

////////////////////////////////////////////////////////////////

// var a=10 
// a=true;


// var result=10+20+"50"
// console.log(result);

// var result="10"-"20"
// console.log(result);

// console.log(undefined+5);

// console.log(typeof NaN);


//camel case
// getComputedStyle

// var firstName="mona"


// =====>oprators
// var x=5
// console.log(x++);
// console.log(++x);
// console.log(x--);
// console.log(--x);




// value (== ,  != ), value and type (===, !==)

// var num1=10
// var num2="10"

// if(num1===num2){
//     console.log("equal");

// }else{
//     console.log("not equal");
// }


//ternary operator

// var temp=30                    
// var res =(temp>20)?"hot":"cold"
// console.log(res);






// ===========================================


//for , while , do while

// var i=0


// do{

// console.log("mona");
// }while(i>5)

// while(i<=5){
//     console.log(i);
//     i++
// }



//switch

// var color= prompt("please enter your color")

// // console.log(color);

// if(color==null){
//     alert("Thanks")
// }else{

//     switch(color){

//         case "red":
//             document.write("<h1 style='color:red'>Hello Js</h1>")
//             break;
//         case "green":
//             document.write("<h1 style='color:green'>Hello Js</h1>")
//             break;
//         default:
//             alert("Please enter a valid color")
//     }
// }


// function sum(x=2,y=3){
//     //  x=x||2
//     //  y=y||3
//     // console.log(x+y);

//     return x+y 
// }

// // sum(10,5)
// // sum(3,5)
// var result= sum(10,5)
// console.log(result);

// result=sum(8,5)

// console.log(result);



//////////////////////////////////////////////////////////////////////

//built in function
//parseInt , parseFloat , Number , String

// var num1=Number(prompt("please enter first number")) 
// var num2= Number(prompt("please enter second number")) 

// console.log(num1+num2);


//search >>>
//isFinite()  , isNaN()  , strict mode 








