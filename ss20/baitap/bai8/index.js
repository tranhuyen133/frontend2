let n = prompt("Nhập số lượng số nguyên tố cần hiển thị:");
n = parseInt(n);

if (isNaN(n) || n <= 0) {
    console.log("Dữ liệu nhập vào không hợp lệ.");
} else {
    let count = 0;
    let num = 2;

    console.log("Các số nguyên tố:");

    while (count < n) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num);
            count++;
        }

        num++;
    }
}
