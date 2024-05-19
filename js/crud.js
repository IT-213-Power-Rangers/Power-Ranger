let products = [];


function addProduct() {
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);

    const product = {
        name: productName,
        description: productDescription,
        price: productPrice
    };


    products.push(product);


    displayProducts();


    document.getElementById('productName').value = '';
    document.getElementById('productDescription').value = '';
    document.getElementById('productPrice').value = '';
}


function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; 


    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${product.name}</strong>: ${product.description} - $${product.price} 
                        <button onclick="editProduct(${index})">Edit</button>
                        <button onclick="deleteProduct(${index})">Delete</button>`;
        productList.appendChild(li);
    });
}


function editProduct(index) {
    const updatedName = prompt("Enter updated product name:");
    const updatedDescription = prompt("Enter updated product description:");
    const updatedPrice = parseFloat(prompt("Enter updated product price:"));


    products[index].name = updatedName;
    products[index].description = updatedDescription;
    products[index].price = updatedPrice;


    displayProducts();
}


function deleteProduct(index) {

    products.splice(index, 1);


    displayProducts();
}