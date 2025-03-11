function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let number = Number(prompt("Nhập một số nguyên dương:"));

if (isPrime(number)) {
    console.log(`${number} là số nguyên tố.`);
} else {
    console.log(`${number} không phải là số nguyên tố.`);
}
