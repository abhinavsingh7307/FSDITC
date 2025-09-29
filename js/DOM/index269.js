// //Promise

// const myPromise-new Promise((resolve, reject)=>{
// const password="Ankur@123";
// if(password.length>=8){
// resolve("Strong Password");
// }else{
//     reject ("Weak Password");}});

// myPromise.then((result)=>{
// console.log(result);
// })
// .catch((err)=>{
// console.log(err);})
// .finally(()=>{
// console.log("all the reources have closed successfully");});

let button=document.getElementById('btn');
let disp=document.getElementById('disp');
let table='<table border=1>'
async function fetchdata(){
 disp.innerHTML="<h2>Data is loading...</h2>";
    const response=await fetch('https://dummyjson.com/recipes');
    const jsonData=await response.json();
    console.log(jsonData.recipes);

 jsonData.recipes.forEach(element=>{
    table+=`<tr>
        <td><img src=${element.image} height=200 width=200 alt='image'></td>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.ingredients}</td>
    </tr>`
});

table+='</tables>';
disp.innerHTML=table;
 }
button.addEventListener('click',fetchData);
