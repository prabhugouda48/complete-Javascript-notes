// indexof
// lastIndexof
// search
// match
// matchAll

var greetings ="Helo,how are are are you doing ?";
console.log(greetings.lastIndexOf("are"))
console.log(greetings.indexOf("are"))
console.log(greetings.search("ajjjjre"))
console.log(greetings.match("are"))
console.log(Array.from(greetings.matchAll("are")));