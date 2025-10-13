// console.log(1);
// setTimeout(()=>{

// console.log(2);

// },4000
// );
// console.log(3);
// function fetchd(callback){
//     console.log("data fetched");
//     callback();
// }
// function disp(){
//     console.log("data displayed");
// }
// fetchd(disp);

function operation(a,b,callback){
    return callback(a,b);
}
function add(a,b){
    return a+b;
}
function mul(c,d){
    return c*d;
}

console.log(operation(3,4,mul));
const ticket=new Promise(function(resolve,reject){


const isBoarded=false;
if(isBoarded){
    
    reject("you are in the flight")
    
}

else{
    resolve("your flight has been cancelled")
}
})

ticket.then((data)=>console.log("wao",data))

.catch((data)=>{
    console.log("oh no",data);
})
.finally(()=>{
    console.log("lastly");
}
)



