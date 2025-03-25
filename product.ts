const products = [
    { id: 1, name: "Laptop", price: 1500, quantity: 5 },
    { id: 2, name: "Smartphone", price: 800, quantity: 10 },
    { id: 3, name: "Tablet", price: 600, quantity: 7 }
];

console.log(products);

// 1. hiển thị danh sách theo map

const showProducts = (products) =>products
{
    products.map(product => {
        console.log(`ID : ${product.id} , Name : ${product.name} , Price : ${product.price}, Quantity : ${product.quantity}`);
    });
};

showProducts(products);

// 2. Tính tổng giá trị hàng tồn kho

const calculateTotaValue = (products) =>
    products.reduce((total, product) => total + product.price, 0);
console.log(" Tổng giá" + calculateTotaValue(products));


// 3. Lọc sản phẩm theo giá

const filterByPrice = (products, minPrice) =>
    products.filter(product => product.price >= minPrice);

console.log('lọc sản phẩm theo giá' + filterByPrice(products,700));


// 4. Thêm sản phẩm mới

const addProduct = (products, newProduct) => {
    products.push(newProduct);
}

addProduct(products, { id: 4, name: "Monitor", price: 300, quantity: 8 });
showProducts(products);

// 5. Xóa sản phẩm theo id

const removeProductById = (products, id) => {
    return products.filter(product => product.id !== id);
};

console.log(removeProductById(products, { id: 1 }));


// 6. Cập nhật số lượng sản phẩm

const updateQuantity = (products, id, newQuantity) => {
    return products.map(product =>
        product.id === id ? { ...product, quantity: newQuantity } : product
    );
};





