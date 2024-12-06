function greetCustomer(customerName = "Customer"){
    console.log("Hello"+ customerName);
}

greetCustomer();
greetCustomer("Tomm 1");
greetCustomer("Tomm 2");
greetCustomer("Tomm 3");
greetCustomer("Tomm 4");

function checkForValidAge(age){
    return age > 18? true:false;
}

var person1 = checkForValidAge(14);
console.log(person1);
var person2 = checkForValidAge(21);
console.log(person2);

// anonymus function.

var test = function (marks){
    return marks %2===0 ? "password" : "Failed";
};

console.log(test(101));

//ES6 Arrow Functions
//function printFullName(fname,Lname){
// console.log(fname + " " + Lname);
//}

//printFullName("Siddhrtha","verma");

const printFullName=(fname,lname)=> console.log(fname +" "+lname)

printFullName("siddhartha","Verma");

function provideNumber1(number1){
    function provideNumber2(number2){
        return parseInt(number1) + parseInt(number2);
    }
}

const result = provideNumber1(10);
const finalResult = result(20);
console.log(finalResult);
