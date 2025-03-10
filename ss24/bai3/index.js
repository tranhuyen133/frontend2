let array = [];

function showMenu() {
    console.log("\n================== MENU ===================");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
    console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5. Đảo ngược mảng");
    console.log("6. Kiểm tra mảng có đối xứng không");
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
                let input = prompt(`Nhập ${n} số nguyên, cách nhau bởi dấu phẩy (,)`);
                array = input.split(",").map(Number);
                console.log("Mảng đã nhập:", array);
            }
            break;

        case 2:
            console.log("Mảng hiện tại:", array);
            break;

        case 3:
            if (array.length === 0) {
                console.log("Mảng rỗng, không thể tìm phần tử lớn nhất!");
            } else {
                let maxValue = Math.max(...array);
                let index = array.indexOf(maxValue);
                console.log(`Phần tử lớn nhất là ${maxValue} ở vị trí ${index}`);
            }
            break;

        case 4:
            let positiveNumbers = array.filter(num => num > 0);
            if (positiveNumbers.length === 0) {
                console.log("Không có số dương trong mảng!");
            } else {
                let sum = positiveNumbers.reduce((total, num) => total + num, 0);
                let avg = sum / positiveNumbers.length;
                console.log("Tổng các số dương:", sum);
                console.log("Trung bình cộng:", avg.toFixed(2));
            }
            break;

        case 5:
            array.reverse();
            console.log("Mảng sau khi đảo ngược:", array);
            break;

        case 6:
            let isSymmetric = array.join("") === array.slice().reverse().join("");
            console.log(isSymmetric ? " Mảng đối xứng!" : " Mảng không đối xứng!");
            break;

        case 7:
            console.log("Chương trình kết thúc.");
            break;

        default:
            console.log(" Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }

    if (choice === 7) {
        break; 
    }
}
