function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterOddPrimes(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "number")) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng không có dữ liệu";
    }

    let oddPrimes = arr.filter(num => isPrime(num) && num % 2 !== 0);
    return oddPrimes;
}

// Test cases
console.log(filterOddPrimes([10, 2, 3, 5, 7, 9])); 
// Output: [3, 5, 7]

console.log(filterOddPrimes([])); 
// Output: "Mảng không có dữ liệu"

console.log(filterOddPrimes("abc")); 
// Output: "Dữ liệu không hợp lệ"
