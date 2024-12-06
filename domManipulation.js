const h1=document.querySelector("h1");
const button=document.querySelector("button");



button.addEventListener("click",function(){
    h1.innerText="Hello This is ${Math.floor(Math.random()*99)}";
});