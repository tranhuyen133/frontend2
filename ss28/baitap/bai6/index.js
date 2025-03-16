function calculateTotal(cart) {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity; // Tính tổng giá mỗi sản phẩm
    });
    return total;
}

let cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
];

console.log("Tổng giá trị đơn hàng:", calculateTotal(cart)); // Kết quả: 105000
