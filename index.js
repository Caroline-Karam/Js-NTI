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


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Day 3

// built in object (RegExp )
// Bom (Screen, Navigator, Location)
// Obj


// 1- Object
// var student = [1,"ali",17,true]


//literal creation


// var student={
//     id:1,
//     name:"ali",
//     age:10,
//     isFired:true,
//     hobbies:["drawing","reading","writing"],
//     display:function(){
//         console.log(student.name,this.age);
//     }
// }


// var student2={
//     id:1,
//     name:"ali",
//     age:50,
//     isFired:true,
//     hobbies:["drawing","reading","writing"],
//     display:function(){
//         console.log(student.name,this.age);
//     }
// }

// get data from object
// console.log(student.name);  
// console.log(student["name"])

// var y = "age"
// console.log(student2[y]);
// console.log(y);



// var y="name"
// log(student.y); ===========>xxxxxxx
// console.log(student[y]);



// set data in object
// student.name="hamada"
// student["name"]="shahd"
// console.log(student);

// console.log(student.hobbies[1]);
// student.hobbies[1]="song"
// console.log(student);


//for in
// for(var k in student){
//     console.log(k , student.k);  
//     console.log(k , student[k]);
// }



//////////////////////////////////////////////////////////////////////////////////////////

// =====> RegExp
// var phoneRegex=/^(01)(0|1|2|5)[0-9]{8}$/
// https://regex101.com/

////////////////////////////////////////////////////////////////////////////////////////////////////
// ---------- Bom

// console.log(window); 

//   var x = 10
//   console.log(x);
//   console.log(window.x);

// function test(){
//     console.log("hello");
    
// }
// test()

  
  
// window.alert()
// window.prompt()
// window.confirm()


//======> getSelection ---> in html



//======> open and close new window

// var newWin;
// function openNewWin(){
//    newWin = open("index2.html","_blank","width=400,height=300")
// }

// function closeWin(){
//     newWin.close()
// }



// ------> setInterval and clearInterval


// setInterval(function(){
//     alert("Hello")
// },2000) ---->


//  var s = setInterval(function(){
//     alert("Hello Abdallah");
    
// },2000)


// clearInterval(s)
// var s = setInterval(function(){
//     alert("Hello")
// },3000)



// -------> setTimeout and clearTimeout

// setTimeout(function(){
//     alert ("Hello Caro")
// },1000)

// Q
// function test(){
//     alert("Hello")
//     setTimeout(test,2000)
// }
// test()

// clearTimeout()
// var out;
// function test(){
//     alert("Hello")
//    out = setTimeout(test,2000)
// }

// test()

 

/////////////////// ------
//  1- screen
// 1- avail height
// 2- height
// 3- avail width
// 4- width


// 2- Navigator
// console.log(navigator.onLine);
// console.log(navigator.language);
// console.log(navigator.cookieEnabled);




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ------- 3- location

//----- 1- property
// 1- href (getter, setter)
// console.log( location.href); ------> getter
// location.href="index2.html" ------ setter

// setTimeout(function(){
// location.href="index2.html"
// },2000)  ----> replace for exam

// 2- search
// in html1 and html2

// 3- hash

// ----- 2- methods
// location.reload()
// replace and assign

// ------- 3- history

//////////////////////////////////////////////////////////////////////////////////////////////////

//  Day 4


// Bom (location and history)
// Dom
// Events


// ------- 1- location

//----- 1- property
// 1- href (getter, setter)

// console.log( location.href); ------> getter
// location.href="index2.html" ------ setter

// setTimeout(function(){
// location.href="index2.html"
// },2000)
// 
//   ----> replace for exam

// 2- search

// 3- hash

// ----- 2- methods
// location.reload()
// replace and assign

// ------- 2- history
// history.back()
// history.forward()
// history.go()

// ============================ Dom
// document.title="MEARN"
// document.writeln(`<h1>Hello</h1>`)
// document.bgColor="red"

// 1- Get Elements ==========================================================

// console.log(document.getElementById("h1_Body"));
// document.getElementById("h1Id").addEventListener("click", function () {
//     this.style.color = "red";
//   })
// console.log(document.getElementsByClassName("h1_class")[1]);
// console.log(document.getElementsByName("h2"));

// console.log(document.getElementsByTagName("h1"));

// console.log(document.querySelector(".h1_class")); ====> id
// console.log(document.querySelector(".h1_class")); ====> first index match cond
// console.log(document.querySelectorAll(".h1_class")); ======> all class

// 2- Collections ==========================================================
// console.log(document.forms);
// console.log(document.images);
// console.log(document.links[0].href);

// 3- Set or Add Elements ==========================================================
// document.forms[0].input1.value = "Abdallah"
// document.links[1].href="index2.html"
// document.getElementById("para1").textContent="Shahad"

//  var ele = document.getElementById("para1");
//       ele.style.backgroundColor = "teal";
//       ele.style.width = "400px";
//       ele.style.padding = "40px";
//       ele.style.color = "white";
// //     OR
//      ele.style.cssText = "background-color: teal; width: 400px; padding: 40px; color: white";
// //     OR
//       ele.setAttribute("style", "background-color: teal; width: 400px; padding: 40px; color: white");

// a- ADD Img ===============
// document.getElementById("imgId").src = "img/images (2).jpeg"
// document.getElementsByTagName("img")[0].src = "img/images (2).jpeg"
// // Or
// document.getElementsByTagName("img")[0].setAttribute("style","width: 100px; height: 100px")


// b- Add Content ===========================

    // var element = document.getElementById("h1Id");
    // element.innerHTML = "Hello in our new site"
        // element.innerText = "Hello in our new site2"
            // element.textContent = "Hello in our new site3"



// textContent vs innerText for search ===================================
// console.log(document.getElementById("div_ID").innerText);
// console.log(document.getElementById("div_ID").textContent);


// 4- Create element ========================================================================
//   var newEle = document.createElement("h2");
//   newEle.innerHTML = "This is a new header";

//   var ele =  newEle.innerHTML = "This is a new header";
//   console.log(ele);

//   document.body.appendChild(newEle);


// var newEle= document.createElement("h3");

// newEle.innerHTML = "This is a new header";

// console.log(newEle);
// document.body.appendChild(newEle);



// 5- Remove element ========================================================================

//  document.getElementById("div_ID").remove();



// 6- Events ========================================================================

// First way
//  function sayhello() {
//       alert("hello");
//     }
//     sayhello();

// Second way
// document.getElementById("eventBtn").onclick = function sayHello(){
//     alert("hello");
// }

// document.getElementById("div_ID").onclick = function color(){
//     this.style.color = "red";
// }

// third way  ==== EventListener
// addEventListener("eventType", callbackFunction);

// document.getElementById("eventBtn").addEventListener("click", function(){
//     alert("hello by EventListener");
//         this.style.backgroundColor = "red";


// })

// removeEventListener
// document.getElementById("eventBtn").removeEventListener("click");

// Events Types =================================================
// 1- Mouse Events

// let MouseEvents = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "contextmenu"];

// let mouseEvents = document.getElementById("div_event");

// 1
//  mouseEvents.ondblclick = function(){
//     this.style.backgroundColor = "red";
// }

// 2
// mouseEvents.onmousedown = function(){
//     this.style.backgroundColor = "blue";
// }

// // 3
// mouseEvents.onmouseup = function(event){
//     event.target.style.backgroundColor = "green"

// }

// // 4
// mouseEvents.onmousemove = function (event) {
//   event.target.style.backgroundColor = "teal";
// };

// mouseEvents.onmouseout = function () {
//   this.style.backgroundColor = "";
// };


// 2- Keyboard Events ====================================

// var input = document.getElementById("input_ID");

//     input.onkeydown = function (eve) {
//       console.log("onkeydown");
//     };

//     input.onkeyup = function (eve) {
//       console.log("onkeyup");
//     };

   //  // Form Events
   //  var form = document.getElementById("form_Id");
   //  form.onsubmit = function (eve) {
   //    eve.preventDefault();
   //    alert("Form submitted but blocked by JS");
   //  };


    // preventDefault 
// document.getElementById("linkId").onclick= function(event){
//   event.preventDefault();
//   alert("Link Clicked")
// }




