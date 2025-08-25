let faculty={
    name:"Ram",
    age:39,
    course:"Btech"
};

let fruits=["Apple","Banana","Mango"];
for(let i=0;i<3;i++){
    console.log(fruits[i]);
    

}
for(let prop in faculty){
    console.log(prop,":",faculty[prop]);
}

for(let fruit of fruits){
    console.log(fruit);
}