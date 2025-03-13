function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterPrimeNumbers(arr) {
    if (!Array.isArray(arr) || arr.some(num => typeof num !== "number")) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let primeNumbers = arr.filter(num => isPrime(num));

    console.log(primeNumbers.length > 0 ? primeNumbers : "Mảng không có phần tử nào");
}

// Test cases
filterPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 
filterPrimeNumbers([]); 
filterPrimeNumbers("abc"); 
filterPrimeNumbers([15, 18, 20]); 
