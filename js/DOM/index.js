// console.log("Hello Ankur");
// let a=15;
// console.log(a+a);


// console.log(a);
// var a=20;


// let a=20;
// if(a>10){
//     let a=100
//     console.log("a="+a);
// }
// else{
//     console.log("Hii");
// }
// console.log(a);


// const a=23;
// a=50;


// normal function

// function fun(msg){
//     return "Hii"+" "+msg;
// }

// const data=fun("Ankur");
// console.log(data);


// function as an expression 

// const data=function fun(a,b){
//     return a*b;
// }
// console.log(data(10,20));

// const data=()=>{
//     console.log("Ankur");
// }
// console.log(data());


// IIFE 

// (function(){
//     console.log("Welcome to MERN Session");
// })();


// setTimeout(()=>{
//     console.log("Hii");
// },1000);


// function greet(msg="Java"){
//     console.log(msg+" is a good language");
// }
// greet("Python");


// function selectlanguage(lang){
//     let result;
//     if(lang=="Java"){
//         function JCompiler(){
//             return "Using J Compiler";
        
//         }
//         result=JCompiler();
//     }
//     else if(lang=="C"){
//         function CCompiler(){
//             return "Using C Compiler";
//         }
//     }
//     else{
//         result="No Compiler Found";
//     }
//     return result;
// }

// final=selectlanguage("Java");
// console.log(final);




// const div=document.getElementsByTagName('div');

// div[0].innerText="Hello World";
// div[0].style.color="Red";
// div[0].style.backgroundColor="aqua";
// console.log(div);

const container=document.getElementsByClassName('container');

// container[0].innerHTML='<h2 style=color:red>Hello Ankur!</h2>'
// console.dir(container);
const h2=document.createElement('h2');
h2.innerText="ABES";
h2.style.color="red";
h2.style.backgroundColor="black";
console.log(h2);
container[0].appendChild(h2);

const img=document.createElement('img');
img.src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/copy-urls-tabs-featured-image.jpg"
img.setAttribute('height','200px');
img.setAttribute('width','200px');
console.log(img);
container[0].appendChild(img);

const button=document.getElementById('btn');
console.log(button);
function msg(){
    // console.log("Hi! I am working on MERN");
    // alert("Hi! I am working on MERN");
    const container=document.getElementsByClassName('contain');
    const h2=document.createElement('h2');
    h2.innerText="ABES ENGINEERING COLLEGE";
    h2.style.color="red";
    h2.style.backgroundColor="black";
    container[0].appendChild(h2);
}
button.addEventListener('click',()=>(msg()));