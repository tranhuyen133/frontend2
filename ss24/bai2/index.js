let array = [];

function showMenu() {
    console.log("\n================== MENU ===================");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm các phần tử chẵn và lẻ");
    console.log("4. Tính trung bình cộng của mảng");
    console.log("5. Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng");
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
                console.log(" Số phần tử phải lớn hơn 0!");
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
            let evenNumbers = array.filter(num => num % 2 === 0);
            let oddNumbers = array.filter(num => num % 2 !== 0);
            console.log("Các số chẵn:", evenNumbers);
            console.log("Các số lẻ:", oddNumbers);
            break;

        case 4:
            if (array.length === 0) {
                console.log("Mảng rỗng, không thể tính trung bình cộng!");
            } else {
                let sum = array.reduce((total, num) => total + num, 0);
                let avg = sum / array.length;
                console.log("Trung bình cộng của mảng:", avg.toFixed(2));
            }
            break;

        case 5:
            let indexDelete = Number(prompt("Nhập vị trí phần tử cần xóa (0 - " + (array.length - 1) + "):"));
            if (indexDelete >= 0 && indexDelete < array.length) {
                let removedElement = array.splice(indexDelete, 1);
                console.log("Đã xóa phần tử:", removedElement);
                console.log("Mảng sau khi xóa:", array);
            } else {
                console.log("Vị trí không hợp lệ!");
            }
            break;

        case 6:
            if (array.length < 2) {
                console.log(" Mảng không đủ phần tử để tìm số lớn thứ hai!");
            } else {
                let sortedArray = [...new Set(array)].sort((a, b) => b - a);
                if (sortedArray.length < 2) {
                    console.log("Mảng không có số lớn thứ hai!");
                } else {
                    console.log("Số lớn thứ hai trong mảng là:", sortedArray[1]);
                }
            }
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
