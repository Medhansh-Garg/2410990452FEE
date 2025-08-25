//functions
function introduction(){
    console.log("Hi");
    console.log("my name is");
    return "Medhansh";
}

console.log(introduction());
//local and global scope
let global=10;
function test() {
    let local=5;
    console.log(global,local);

}
test();
console.log(global);
//console.log(local);not acessible

//anonymous function

setTimeout(function(){
    console.log("After 5 seconds")
},5000);

//arrow function
const add=(a,b)=>a+b;
console.log(add(10,20));

//IIFE (immidieately invoked function)


(function() {
    let message ="call me now";
    console.log(message);
})(); 
//default value

function fun(num=5){
    console.log(num);
}
fun();
fun(6);
