const h1=window.document.querySelector("h1");
const h1Style=h1.style;
h1style.background="green";
h1style.color="white";
h1style.padding="20px";
// console.log(h1style.background); 

h1.addEventListener("mouser", function(){
    h1Style.background="red";
    h1Style.cursor="pointer";
});

h1.addEventListener("mouseleave", function(){
    h1Style.background="green";
  
});