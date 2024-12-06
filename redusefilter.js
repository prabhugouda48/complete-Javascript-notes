// const number = [1,2,3,4,5];
// const even = number.filter((item)=> item%2 ===0);
// console.log(even);

// const students=[
//     { name:"siddu",age: 24},
//     {name:"Aitya",age: 19},
//     {name:"Raj",age: 17},
//     {name:"tina",age: 22},
// ];

// const filteredstudendts = students.filter((stude)=> {
//     return stude.age<= 18;});
//     console.log(filteredstudendts);


// const marks=[
//     { subject:"English", marks: 75},
//     { subject:"Hindi", marks: 80},
//     { subject:"Maths", marks: 65},
// ];

// // const result = marks.reduce(function (toalMarks ,sub){
// //     return totalMarks + subj.marks;
// //     // console.log(subj);
// // });
// function sumAllMarks(totalMarks,sub){
//     return totalMarks + subj.marks
// }

// const result=marks.reduce(sumAllMArks,0);
// console.log(result);

const cartoons = [
    "schinChan",
    "doremon",
    "Spiderman",
    "Batman",
    "Batman",
    "Doremon",

];

const result = cartoons.reduce(function (obj,cartoon){
    if(!obj[cartoon])
    {
        obj[cartoon]=1;   
    }else{ 
        obj[cartoon]++;
    }

    return obj;
},{});
console.log(result);


    