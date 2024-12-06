const body = document.querySelector("body");
const div = document.querySelector("div");
div.setAttribute("id","root")
const h1=document.createElement("h1");
h1.innerText="How to use createElement API";
h1.style.background="red";
h1.style.color="#ffffff"
body.appendChild(div);
div.appendChild(h1);

const rootDiv = document.getElementById("root");
console.log(rootDiv);
rootDiv.addEventListener("click",function(){
   h1.style.background="blue";
   h1.style.color="yellow";
});

// // console.log(h1);
// const h1=document.createElement("h1");
// h1.innerText="Hello World";
// const div_h1=div.appendChild(h1);
// body.appendChild(div_h1);








// function createInput(inputType,inputId,inputName,inputPlaceholder){
//     const input=window.document.createElement('input');
//     input.setAttribute('type',inputType);
//     input.setAttribute('id',inputId);
//     input.setAttribute('name',inputName);
//     input.setAttribute('placeholder',inputPlaceholder);
//     return input;
// }

// body.appendChild(createInput("text","username","Enter username"));
// body.appendChild(createInput("text","username","Enter username"));

console.log(window.document);