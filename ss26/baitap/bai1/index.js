function filterNumbersGreaterThanTen(arr) {
    if (!Array.isArray(arr) || arr.some(isNaN)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let result = arr.filter(num => num >= 10);

    if (result.length > 0) {
        console.log(result);
    } else {
        console.log("Mảng không có phần tử nào");
    }
}

// Test cases
filterNumbersGreaterThanTen([1, 22, 10, 9, 8]);  // Output: [22, 10]
filterNumbersGreaterThanTen([]);                 // Output: "Mảng không có phần tử nào"
filterNumbersGreaterThanTen("abc");              // Output: "Dữ liệu không hợp lệ"
