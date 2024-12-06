function greet() {
    window.console.log("Hello from javascript setTimeout");
}
// here if you write sentence it will return it after 3 sec.
setTimeout(function (){
      greet();
},3000);

window.console.log("Hello from console after setTimeout")

// setInterval(function(){
//     window.console.log("random Number: ${Math.floor(math.random()* 99)}");
// },1000);
let currentInterval;
const randomNumber=()=>{
    currentInterval= setInterval(function() {
    window.console.log('Random Number: ${Math.floor(Math.random()*99)}');
}, 1000);

document.getElementById("Start").addEventListener('click',function(){
    randomNumber();
});

document.getElementById("stop").addEventListener("click",function(){
    if (currentInterval){
        clearInterval(currentInterval)
    }
});