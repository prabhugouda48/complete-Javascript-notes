const div =document.getElementById("root");
const innerTextButton=document.getElementById("innertext");
const innerHTMLButton=document.getElementById("innerHtml");
// console.log(document);

innerTextButton.addEventListener("click", function(){
    div.innertext="<select><option>one<option></select>";
});
innerHTMLButton.addEventListener("click",function(){
    div.innerHtml="one";
});



// console.log({
//     div,
//     innerTextButton,
//     innerHTMLButton,
//   });