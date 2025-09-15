let students = {
"101": { name: "Ravi", age: 21, marks: { math: 85, science: 90 } },
"102": { name: "Anita", age: 20, marks: { math: 92, science: 88 } },
"103": { name: "Suresh", age: 22, marks: { math: 76, science: 80 } }
};
for(let i in students){
    console.log(students[i].name);
}
let max=0;
let name='';
for(let i in students){
    if(students[i].marks.math>max){
        max=students[i].marks.math;
        name=students[i].name;
        }

}
console.log("MAximum marks student",name);
let sum=0;
let c=0;
for(let i in students){
    sum+=students[i].marks.science;
    c++;

}
average=sum/c;

console.log("Average:",average);

