//alert
//prompt
//confirm


const fetchElement = (id) => document.getElementById(id);

const alertButton =fetchElement("alert");
const promptButton = fetchElement("prompt");
const confirmButton=fetchElement("confirm");

alertButton.addEventListener("click",function(){
    window.alert("Hello World")
});
promptButton.addEventListener("click",function(){
    const result =window.prompt("DO you want To LOgout ?");
    divRoot.innerText="Prompt Result is"+result;
});
confirmButton.addEventListener("click",function(){
    const result =window.confirm("DO you want To Logout ?");
    divRoot.innerText="confirm Result is"+ result;
});

