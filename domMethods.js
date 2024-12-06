// const div =window.document.querySelector("div");
// const btn=window.document.querySelector("button");

const div =window.document.getElementById("root");
const btn=window.document.getElementById("addH1");

btn.addEventListener("click",function(){
    div.innerHTML += '<h1>Dom Method ${Math.random()}</h1>';
    // const h1Elements=window.document.querySelectorAll("h1");
    // console.clear();
    // h1Elements.forEach((h) => console.log(h));
    const myDiv=window.document.getElementByClassName("myDiv");
    console.log(myDiv[0]);
});