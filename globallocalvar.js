var FullName="siddhartha verma";

function greet() {
    var age=24;
    var FullName="siddhartha123"
    console.log(FullName);
    console.log(age);
}

function greet2(){
    FullName="siddhartha kumar";
    console.log(FullName);
    console.log(age);
}

greet();
greet2();


// greet()

function num1 (number1){
    const result = number1 *2;
    function num2(){
        return result*3;
    }
    const resp = num2();
    console.log(resp);
}

num1(10);
