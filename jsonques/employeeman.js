let data = `{
"employees": [
{"id": 1, "name": "Neha", "salary": 50000, "department": "HR"},
{"id": 2, "name": "Amit", "salary": 60000, "department": "IT"},
{"id": 3, "name": "Pooja", "salary": 75000, "department": "Finance"}
]
}`;

let parsed = JSON.parse(data);
let employees = parsed.employees;
for(let i in employees){
if(employees[i]["department"]=='IT'){
    employees[i].salary = employees[i].salary + 0.10 * employees[i].salary;
}
}


for(let i in employees){
    console.log(employees[i]["name"],":",employees[i]["salary"]);
}