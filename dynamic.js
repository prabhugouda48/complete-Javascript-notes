//------getting content from h1----//
// console.log(document)
// const h1 =document.querySelector('h1')
// h1.innerText="Hello siddhartha";
// console.log(h1)


//------- Getting by id customDiv-----//
// const customDiv=document.getElementById("customDiv");
// customDiv.innerText="Lets learn Angular";
// customDiv.innerHTML="<h2>Lets learn React</h2>";


// ----- creating element and printing the content of element-------//
// const h2 = document.createElement("h2");
// h2.textContent="Hello,How Are You?";
// console.log(h2);
// customDiv.appendChild(h2);

//--selecting---//
// const div =document.querySelector("div");

// //----creating--//
// const input=document.createElement("input");
// input.value="Angular course";
// input.type="text";
// input.placeholder="Enter some content";
// input.id="course_field";

// const h1=document.createElement("h1");
// h1.innerText="Dynamic Content In HTML";

// const button=document.createElement("button");
// button.textContent="click Me";

// //----appending or linking---//
// div.appendChild(h1);
// div.appendChild(input);
// div.appendChild(button);


// button.addEventListener("click",function() {
//     window.alert("Hey,This is a button");
// })


// //-----creating the HTML,BODY,DIV-----//
// const html=document.createElement("html");
// const body=document.createElement("body");
// const div =document.createElement("div");
// div.innerHTML="<h2> Hello World</h2>"
// html.append(body);
// body.append(div);


function dateCreator(){
const div=document.querySelector("div");
const dateInput=document.createElement("input");
dateInput.type="date";
div.appendChild(dateInput);
}

const btn=document.querySelector("button");
btn.addEventListener("click",function(){
    dateCreator();
})


