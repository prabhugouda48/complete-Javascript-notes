const input=document.querySelector("input");

document.querySelector("button").addEventListener("click",function(){
input.setAttribute("type","password");
input.setAttribute("id","upass");
input.setAttribute("value","12345");
input.setAttribute("placeholder","Enter your password");
input.setAttribute(
    "data-person",
    JSON.stringify({pName: "siddhartha",pAge:25 })
);
});