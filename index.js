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



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Day 2

//for , while , do while


// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }


// var i= 1;
// // do while
// do{

// console.log("");
//     i++;

// } while(i<=5);

//     // while




//switch

// var color= prompt("please enter your color")


// if(temp>20){
// console.log("hot");

// }else{
//     console.log("cold");
    
// }

//  var color = prompt("Enter your color")

// if(color==null){
//     alert("Thanks")
// }else{

//     switch(color){

//         case "red":
//             document.writeln("<h1 style='color:red'>Hello Js</h1>")
//             break;
//         case "green":
//             document.writeln("<h1 style='color:green'>Hello Js</h1>")
//             break;
//         default:
//             alert("Please enter a valid color")
//     }
// }



//////////////////////////////////////////////////////////////////////

// "use strict"

// var x=10

// console.log(x);

// var undefined=5

// var Infinity=5


// function sum(a=5,b=9){
// "use strict"
// a=a||5
// b=b||9

// console.log(a+b);

// }


// sum(2,3)

// sum()
 
////////////////////////////////////////////////////////////////////////////////////////////////
//String

//literal creation

// var str1="caro"   //string

//constructor creation
// var str2=new String("Ali") //object
// var name2 = new String ("loda")

// console.log(typeof name1);
// console.log(typeof name2);


// var name1 = "Hello Mostafa in our site"


// console.log(name1.length);

// console.log(name1.charAt(2)); 

// console.log(name1.indexOf("a")); 
// console.log(name1.lastIndexOf("a"));
// console.log(name1.substring(6,14));
// console.log(name1.split(" "));
// var x =name1.split(" ")
// console.log(typeof x);


////////////////////////////////////////////////////////////////////////////

// console.log(Math.E);

// console.log(Math.PI);

// console.log(Math.max(100,5,50,75,80)); 
// console.log(Math.min(2,8,60,100,18,6));

// console.log(Math.sqrt(16)); 

// console.log(Math.pow(4,2));


//////////////////////////////////////////////////////////////////////////////

//Array

//literal creation

// var arr1=[10,"Caro",true,50,[1,2,3],function test(){console.log("test");}]

// console.log(arr1);

//constructor creation

// var arr2=new Array(10,true,80,"Hend");


// var arr3=[10,20,30,40]


// console.log(arr3.length);

//  console.log(arr3.push(60,1));  ====>add ele last index
// arr3.push(60,1)
// arr3.unshift("test") =====> add ele in first index
// console.log(arr3.unshift("test")); 


// console.log(arr3.pop()); ======> remove in last index
// arr3.shift() =====>remove in frist index

// console.log(arr3.shift());

// console.log(arr3.join(" ")); 

// console.log(arr3.reverse()); 


// sort
// var arr1 = [50,80,20,10,5,15]
// console.log(arr1.sort(function(a,b){
//                  return b-a
// }));


// var arr1 = [2000, 1995, 1996, 2005, 2001];

// // // map
// var result3 = arr1.map(function(item){
//     return item*2
// })
// console.log(result3);

// // // filter
// var result = arr1.filter(function (item) {
//   return item > 2000;
// });
// console.log(result);

// var res = arr1.filter(function(ele){
//     return ele < 2000
// })
// console.log(res);

// // // find
// var result2 = arr1.find(function(item){
//     return item< 2000
//    })
//    console.log(result2);




////////////////////////////////////////////////////////////////////////////////

// ---------- Date 

// let d = new Date()
// console.log(d);


// let d2 = new Date()
// console.log(d2.toDateString());

// let d3 = new Date()
// console.log(d3.toTimeString());

// var d4=new Date("2009/9/9")





