let array = [];

function showMenu() {
    console.log("\n================== MENU ===================");
    console.log("1. Nhập số phần tử cần nhập và giá trị các phần tử");
    console.log("2. In ra giá trị các phần tử đang quản lý");
    console.log("3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần");
    console.log("4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng");
    console.log("5. In ra các số nguyên tố trong mảng và tính tổng");
    console.log("6. Nhập một số và đếm số lần xuất hiện trong mảng");
    console.log("7. Thêm một phần tử vào vị trí chỉ định");
    console.log("8. Xóa một phần tử theo giá trị");
    console.log("9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần");
    console.log("0. Thoát");
    console.log("============================================");
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
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
            let evenNumbers = array.filter(num => num % 2 === 0);
            let sumEven = evenNumbers.reduce((sum, num) => sum + num, 0);
            evenNumbers.sort((a, b) => b - a);
            console.log("Các số chẵn (giảm dần):", evenNumbers);
            console.log("Tổng các số chẵn:", sumEven);
            break;

        case 4:
            if (array.length === 0) {
                console.log("⚠️ Mảng rỗng, không thể tìm giá trị lớn nhất và nhỏ nhất!");
            } else {
                let max = Math.max(...array);
                let min = Math.min(...array);
                let maxIndex = array.indexOf(max);
                let minIndex = array.indexOf(min);
                console.log(`Giá trị lớn nhất: ${max} (Vị trí: ${maxIndex}), Giá trị nhỏ nhất: ${min} (Vị trí: ${minIndex})`);
            }
            break;

        case 5:
            let primeNumbers = array.filter(num => isPrime(num));
            let sumPrime = primeNumbers.reduce((sum, num) => sum + num, 0);
            console.log("Các số nguyên tố:", primeNumbers);
            console.log("Tổng các số nguyên tố:", sumPrime);
            break;

        case 6:
            let searchNumber = Number(prompt("Nhập số cần thống kê:"));
            let count = array.filter(num => num === searchNumber).length;
            console.log(`Số ${searchNumber} xuất hiện ${count} lần trong mảng.`);
            break;

        case 7:
            let newElement = Number(prompt("Nhập phần tử cần thêm:"));
            let position = Number(prompt(`Nhập vị trí muốn chèn (0 - ${array.length}):`));
            if (position >= 0 && position <= array.length) {
                array.splice(position, 0, newElement);
                console.log("Mảng sau khi thêm phần tử:", array);
            } else {
                console.log("Vị trí không hợp lệ!");
            }
            break;

        case 8:
            let deleteValue = Number(prompt("Nhập giá trị cần xóa:"));
            let initialLength = array.length;
            array = array.filter(num => num !== deleteValue);
            if (array.length === initialLength) {
                console.log(`Không tìm thấy giá trị ${deleteValue} trong mảng!`);
            } else {
                console.log(`Đã xóa giá trị ${deleteValue}, mảng sau khi xóa:`, array);
            }
            break;

        case 9:
            let order = prompt("Nhập 'tang' để sắp xếp tăng dần, 'giam' để sắp xếp giảm dần:");
            if (order === "tang") {
                array.sort((a, b) => a - b);
                console.log("Mảng sau khi sắp xếp tăng dần:", array);
            } else if (order === "giam") {
                array.sort((a, b) => b - a);
                console.log("Mảng sau khi sắp xếp giảm dần:", array);
            } else {
                console.log("Lựa chọn không hợp lệ!");
            }
            break;

        case 0:
            console.log("Chương trình kết thúc.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }

    if (choice === 0) {
        break; 
    }
}
