let n = Number(prompt("Nhập số lượng phần tử của mảng:"));

// Kiểm tra nếu n <= 0
if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Không phải dãy số fibonacci");
} else {
    // Nhập mảng từ người dùng
    let input = prompt(`Nhập ${n} số, cách nhau bởi dấu phẩy (,)`);
    let array = input.split(",").map(Number);

    // Kiểm tra nếu mảng có ít hơn 3 phần tử (điều kiện cần cho dãy Fibonacci)
    if (array.length < 3) {
        console.log("Không phải dãy số fibonacci");
    } else {
        let isFibonacci = true;

        // Kiểm tra theo công thức Fibonacci: an = an-1 + an-2
        for (let i = 2; i < array.length; i++) {
            if (array[i] !== array[i - 1] + array[i - 2]) {
                isFibonacci = false;
                break;
            }
        }

        if (isFibonacci) {
            console.log("Là dãy số fibonacci");
        } else {
            console.log("Không phải dãy số fibonacci");
        }
    }
}
