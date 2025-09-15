let products = [
{ id: 1, name: "Laptop", price: 45000, stock: 10 },
{ id: 2, name: "Phone", price: 20000, stock: 5 },
{ id: 3, name: "Tablet", price: 25000, stock: 0 }
];

for(let i in products){
    if(products[i].stock>0){
        console.log(products[i].name);
    }
}

let max=0;
let name='';
for(let i in products){
    if(products[i].price>max){
        max=products[i].price;
        name=products[i].name;
        }

}
console.log("most expesive:",name);
k=JSON.stringify(products);
console.log(k);

