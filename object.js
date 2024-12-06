// console.log("objects !!");


function person (firstName,lname,age,contactnumber){
    this.firstName=firstName;
    this.lname=lname;
    this.age=age;
    this.contactnumber=contactnumber;
}

const p1=person("siddu","verma",5678345678);
console.log(p1);

// const student =new Object();
// student.name="siddu";
// student.percenteg="78%";
// student.greet=function(){
//     return"Hello World";
// };
// // console.log(student);
// console.log(student.greet());

// const student={
//     name:"siddu",
//     percenteg:"77%",
//     greet:() =>{
//         return this.name+ ",Hello world";
//     },
// };
// console.log(student.greet());

// const person={};
// person["firstName"]="siddu";
// person["lastName"]="verma";
// person.age=24;
// person.designation="fullstack devloper";
// person.address="uttar pradesh";
// console.log(person.firstName + "works as " + person.designation);


// const person1={firstname:"siddu",lastname:"verma"};
// const person2={firstname:"krish",lastname:"raj"};
// const personcollection=[person1,person2];
// console.log(personcollection);

//  const school=new Object();
//  school.name="GD public school";
//  school.gade="A+";
//  school.address="New delhi,India"
// const school2=new Object(u);
// //  console.log(school);
// console.log(school2);

