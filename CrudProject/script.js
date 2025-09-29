const API_URL = "http://localhost:3000/products";
const productList = document.getElementById("product-list");

// ------------------- GET -------------------
function getProducts() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      productList.innerHTML = ""; // clear list
      data.forEach((p) => {
        const li = document.createElement("li");
        li.innerHTML = `
        
          ${p.title} (${p.category}) - ₹${p.price}
          <button onclick="updateProduct(${p.id})">Update</button>
          <button onclick="deleteProduct(${p.id})">Delete</button>
          
        `;
        productList.appendChild(li);
      });
    });
}

// ------------------- POST -------------------
function addProduct() {
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const price = document.getElementById("price").value;

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, category, price }),
  })
    .then((res) => res.json())
    .then(() => getProducts()); 
}

// ------------------- PUT -------------------
function updateProduct(id) {
  const newTitle = prompt("Enter new title:");
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: newTitle, category: "updated", price: 9999 }),
  })
    .then((res) => res.json())
    .then(() => getProducts());
}

// ------------------- DELETE -------------------
function deleteProduct(id) {
  fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() => getProducts());
}


getProducts();
