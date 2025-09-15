let orders = `{
"orderId": 101,
"customer": "Rohit",
"items": [
{"name": "Shoes", "price": 2000, "qty": 2},
{"name": "T-shirt", "price": 800, "qty": 3}
]
}`;

let order=JSON.parse(orders);
bill=0;

for(let i in order["items"]){
    bill+=order[i]["price"];


}

console.log(bill);


