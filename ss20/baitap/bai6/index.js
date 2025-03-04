let num = prompt("Nhập một số nguyên:");
num = parseInt(num);

if (isNaN(num) || num < 2) {
    console.log("Dữ liệu nhập vào không hợp lệ hoặc không phải số nguyên tố.");
} else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${num} là số nguyên tố.`);
    } else {
        console.log(`${num} không phải là số nguyên tố.`);
    }
}
