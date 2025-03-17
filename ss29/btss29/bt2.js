class Product {
    constructor(id, name, price, category, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1; 
    }

    addProduct(name, price, category, quantity) {
        const product = new Product(this.nextId++, name, price, category, quantity);
        this.products.push(product);
        console.log("✔️ Đã thêm sản phẩm thành công!");
    }

    displayProducts() {
        if (this.products.length === 0) {
            console.log("⚠️ Không có sản phẩm nào trong danh sách!");
            return;
        }
        console.log("\n Danh sách sản phẩm:");
        this.products.forEach(p => {
            console.log(`ID: ${p.id} | Name: ${p.name} | Price: ${p.price} | Category: ${p.category} | Quantity: ${p.quantity}`);
        });
    }

    showProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            console.log("\n🔍 Chi tiết sản phẩm:");
            console.log(`ID: ${product.id} | Name: ${product.name} | Price: ${product.price} | Category: ${product.category} | Quantity: ${product.quantity}`);
        } else {
            console.log("⚠️ Không tìm thấy sản phẩm với ID đã nhập!");
        }
    }

    updateProduct(id, name, price, category, quantity) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            product.name = name;
            product.price = price;
            product.category = category;
            product.quantity = quantity;
            console.log(" Cập nhật sản phẩm thành công!");
        } else {
            console.log(" Không tìm thấy sản phẩm để cập nhật!");
        }
    }

    deleteProduct(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log(" Xóa sản phẩm thành công!");
        } else {
            console.log(" Không tìm thấy sản phẩm để xóa!");
        }
    }

    filterProductsByPrice(min, max) {
        const filteredProducts = this.products.filter(p => p.price >= min && p.price <= max);
        if (filteredProducts.length === 0) {
            console.log(" Không tìm thấy sản phẩm nào trong khoảng giá này!");
            return;
        }
        console.log("\n Sản phẩm trong khoảng giá:");
        filteredProducts.forEach(p => {
            console.log(`ID: ${p.id} | Name: ${p.name} | Price: ${p.price} | Category: ${p.category} | Quantity: ${p.quantity}`);
        });
    }
}

const manager = new ProductManager();
const prompt = require("prompt-sync")();

function main() {
    while (true) {
        console.log("\n--- HỆ THỐNG QUẢN LÝ SẢN PHẨM ---");
        console.log("1.  Thêm sản phẩm");
        console.log("2. Hiển thị danh sách sản phẩm");
        console.log("3.  Xem chi tiết sản phẩm theo ID");
        console.log("4.  Cập nhật sản phẩm theo ID");
        console.log("5.  Xóa sản phẩm theo ID");
        console.log("6.  Lọc sản phẩm theo khoảng giá");
        console.log("7.  Thoát");

        let choice = prompt("🔹 Chọn chức năng (1-7): ");

        switch (choice) {
            case "1":
                let name = prompt("Nhập tên sản phẩm: ");
                let price = parseFloat(prompt("Nhập giá sản phẩm: "));
                let category = prompt("Nhập danh mục sản phẩm: ");
                let quantity = parseInt(prompt("Nhập số lượng sản phẩm: "));
                manager.addProduct(name, price, category, quantity);
                break;
            case "2":
                manager.displayProducts();
                break;
            case "3":
                let searchId = parseInt(prompt("Nhập ID sản phẩm cần xem: "));
                manager.showProductById(searchId);
                break;
            case "4":
                let updateId = parseInt(prompt("Nhập ID sản phẩm cần cập nhật: "));
                let newName = prompt("Nhập tên mới: ");
                let newPrice = parseFloat(prompt("Nhập giá mới: "));
                let newCategory = prompt("Nhập danh mục mới: ");
                let newQuantity = parseInt(prompt("Nhập số lượng mới: "));
                manager.updateProduct(updateId, newName, newPrice, newCategory, newQuantity);
                break;
            case "5":
                let deleteId = parseInt(prompt("Nhập ID sản phẩm cần xóa: "));
                manager.deleteProduct(deleteId);
                break;
            case "6":
                let minPrice = parseFloat(prompt("Nhập khoảng giá tối thiểu: "));
                let maxPrice = parseFloat(prompt("Nhập khoảng giá tối đa: "));
                manager.filterProductsByPrice(minPrice, maxPrice);
                break;
            case "7":
                console.log(" Thoát chương trình.");
                return;
            default:
                console.log(" Lựa chọn không hợp lệ, vui lòng nhập lại!");
        }
    }
}

main();
