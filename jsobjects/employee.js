let emp={ name: "John", position: "Developer", salary: 50000 };
emp.salary=6000;
emp.department="IT";
delete emp.position;
console.log(emp);