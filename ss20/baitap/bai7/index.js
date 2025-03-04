let n = prompt("Nhập số lượng số Fibonacci:");
n = parseInt(n);

if (isNaN(n) || n <= 0) {
    console.log("Dữ liệu nhập vào không hợp lệ.");
} else {
    let a = 1, b = 1;
    console.log("Dãy Fibonacci:");
    
    for (let i = 0; i < n; i++) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}
