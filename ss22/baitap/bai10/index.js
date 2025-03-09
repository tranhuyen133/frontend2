// Khai báo mảng rỗng ban đầu
let array = [];

function showMenu() {
    console.log("\n===== MENU =====");
    console.log("1. Nhập vào mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Thêm phần tử");
    console.log("4. Sửa phần tử");
    console.log("5. Xóa phần tử");
    console.log("6. Thoát");
}

// Chạy chương trình chính
while (true) {
    showMenu(); // Hiển thị menu
    let choice = Number(prompt("Lựa chọn của bạn:"));

    switch (choice) {
        case 1:
            let input = prompt("Nhập vào mảng số nguyên, cách nhau bởi dấu phẩy (,):");
            array = input.split(",").map(Number); // Chuyển chuỗi thành mảng số
            console.log("Mảng đã nhập:", array);
            break;

        case 2:
            console.log("Mảng hiện tại:", array);
            break;

        case 3:
            let newElement = Number(prompt("Nhập số cần thêm:"));
            array.push(newElement);
            console.log("Đã thêm phần tử:", newElement);
            break;

        case 4:
            let indexEdit = Number(prompt("Nhập vị trí phần tử cần sửa (0 - " + (array.length - 1) + "):"));
            if (indexEdit >= 0 && indexEdit < array.length) {
                let newValue = Number(prompt("Nhập giá trị mới:"));
                array[indexEdit] = newValue;
                console.log("Mảng sau khi sửa:", array);
            } else {
                console.log("⚠️ Vị trí không hợp lệ!");
            }
            break;

        case 5:
            let indexDelete = Number(prompt("Nhập vị trí phần tử cần xóa (0 - " + (array.length - 1) + "):"));
            if (indexDelete >= 0 && indexDelete < array.length) {
                let removedElement = array.splice(indexDelete, 1); // Xóa phần tử tại vị trí indexDelete
                console.log("Đã xóa phần tử:", removedElement);
                console.log("Mảng sau khi xóa:", array);
            } else {
                console.log("⚠️ Vị trí không hợp lệ!");
            }
            break;

        case 6:
            console.log("Chương trình kết thúc.");
            break;

        default:
            console.log("⚠️ Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }

    if (choice === 6) {
        break; // Thoát chương trình khi chọn 6
    }
}
