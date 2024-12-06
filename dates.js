var currentDT=new Date();
var curentTimeUnix=currentDT.getTime();
var curentFullyr=currentDT.getFullYear();
var curentDay=currentDT.getDay();
var curentMonth=currentDT.getMonth();
var curentDatestring=currentDT.toDateString();
var milliseconds=currentDT.getMilliseconds();
var timezone=currentDT.getTimezoneOffset();
// var UTCDate=currentDT.getUTCDate();


// console.log(curentTimeUnix);
// console.log(curentFullyr);
// console.log(curentDay);
// console.log(curentMonth);
// console.log(curentDatestring);
// console.log(timezone);
// console.log(UTCDate);

var someDateTime=123456723456;
var someRandomDate="12/12/2020";
var convertedDateTime=new Date(123456723456);
var convertedrandom=new Date(someRandomDate).getTime();
console.log(convertedrandom)
console.log(convertedDateTime.getDate());


 