function processArray(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "number")) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng không có dữ liệu";
    }

    let squaredEvenNumbers = arr
        .map(num => num ** 2) 
        .filter(num => num % 2 === 0); 

    return squaredEvenNumbers;
}

// Test cases
console.log(processArray([2, 5, 10])); 
// Output: [4, 100]

console.log(processArray([])); 
// Output: "Mảng không có dữ liệu"

console.log(processArray("abc")); 
// Output: "Dữ liệu không hợp lệ"
