var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products = [
    { id: 1, name: "Laptop", price: 1500, quantity: 5 },
    { id: 2, name: "Smartphone", price: 800, quantity: 10 },
    { id: 3, name: "Tablet", price: 600, quantity: 7 }
];
console.log(products);
// 1. hiển thị danh sách theo map
var showProducts = function (products) { return products; };
{
    products.map(function (product) {
        console.log("ID : ".concat(product.id, " , Name : ").concat(product.name, " , Price : ").concat(product.price, ", Quantity : ").concat(product.quantity));
    });
}
;
showProducts(products);
// 2. Tính tổng giá trị hàng tồn kho
var calculateTotaValue = function (products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
};
console.log(" Tổng giá" + calculateTotaValue(products));
// 3. Lọc sản phẩm theo giá
var filterByPrice = function (products, minPrice) {
    return products.filter(function (product) { return product.price >= minPrice; });
};
console.log('lọc sản phẩm theo giá' + filterByPrice(products, 700));
// 4. Thêm sản phẩm mới
var addProduct = function (products, newProduct) {
    products.push(newProduct);
};
addProduct(products, { id: 4, name: "Monitor", price: 300, quantity: 8 });
showProducts(products);
// 5. Xóa sản phẩm theo id
var removeProductById = function (products, id) {
    return products.filter(function (product) { return product.id !== id; });
};
console.log(removeProductById(products, { id: 1 }));
// 6. Cập nhật số lượng sản phẩm
var updateQuantity = function (products, id, newQuantity) {
    return products.map(function (product) {
        return product.id === id ? __assign(__assign({}, product), { quantity: newQuantity }) : product;
    });
};
