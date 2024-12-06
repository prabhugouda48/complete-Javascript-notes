// append => NodeList
// appendchild => Individual Elements (parent-child)

const root=window.document.getElementById("root");
const h1collection=["Hello 1","Hello 2","Hello 3","Hello 4"];
const h1_result=h1collection.map((h1) =>{
   let newH1Element=window.document.createElement("h1");
   newH1Element.innerText=h1;
   return newH1Element;
})
console.log(h1_result);

root.appendChild(h1_result);
// console.log(document);
// // console.log({root,h1});

// console.log(document);