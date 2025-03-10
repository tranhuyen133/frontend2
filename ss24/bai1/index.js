let array = [];

function showMenu() {
    console.log("\n================== MENU ===================");
    console.log("1. Nhập mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng");
    console.log("4. Tính tổng các phần tử trong mảng");
    console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");
    console.log("6. Sắp xếp mảng tăng dần");
    console.log("7. Thoát chương trình");
    console.log("============================================");
}

while (true) {
    showMenu();
    let choice = Number(prompt("Lựa chọn của bạn:"));

    switch (choice) {
        case 1:
            let n = Number(prompt("Nhập số phần tử của mảng:"));
            if (n <= 0) {
                console.log("Số phần tử phải lớn hơn 0!");
            } else {
                let input = prompt(`Nhập ${n} số, cách nhau bởi dấu phẩy (,)`);
                array = input.split(",").map(Number);
                console.log("Mảng đã nhập:", array);
            }
            break;

        case 2:
            console.log("Mảng hiện tại:", array);
            break;

        case 3:
            if (array.length === 0) {
                console.log("Mảng rỗng, không thể tìm giá trị lớn nhất và nhỏ nhất!");
            } else {
                let max = Math.max(...array);
                let min = Math.min(...array);
                console.log(`Giá trị lớn nhất: ${max}, Giá trị nhỏ nhất: ${min}`);
            }
            break;

        case 4:
            let sum = array.reduce((total, num) => total + num, 0);
            console.log("Tổng các phần tử trong mảng:", sum);
            break;

        case 5:
            let searchNumber = Number(prompt("Nhập số cần thống kê:"));
            let count = array.filter(num => num === searchNumber).length;
            console.log(`Số ${searchNumber} xuất hiện ${count} lần trong mảng.`);
            break;

        case 6:
            array.sort((a, b) => a - b);
            console.log("Mảng sau khi sắp xếp tăng dần:", array);
            break;

        case 7:
            console.log("Chương trình kết thúc.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }

    if (choice === 7) {
        break; 
    }
}
