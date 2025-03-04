let number = parseInt(prompt("Nhập số :"));

if (isNaN(number) || number <= 0) {
    console.log("Dữ liệu nhập vào không hợp lệ.");
} else {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    console.log("Tổng từ 1 đến " + number + " là: " + sum);
}
