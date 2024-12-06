// try
// cath
// finally
// throw

// var x =11;
// try {
//     // x.toPrecision(500);
//     // console.log(x);
//     const resp=x.toPrecision(5);
//     console.log(resp);
// }catch(err){
//     //  console.log(err); //shows the error
//     //  throw err.name;   //show error name
//      throw "Error: while setting precision to x"; //show the user error name.
// }


var x=5;
var y=10;
try{
    // x=y+1*2;
    x=z+1*2;
    console.log(x);
}catch (err){
    throw err.name;      //shows the error y is no defined.
} finally{
    console.log("Failed to convert");
}