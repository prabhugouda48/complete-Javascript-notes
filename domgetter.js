//getting element by id 
const divroot=window.document.getElementById("root");
console.log(divroot);

const fetchElement=(element,singleton=true) =>
    singleton
?window.document.querySelector(element)
:window.document.querySelectorAll(element);


//querryselector
const h1=fetchElement("h1");
console.log(h1);
//querryselectorAll
const allH1=fetchElement("h1", false);
console.log(allH1);
// //console.log(document)