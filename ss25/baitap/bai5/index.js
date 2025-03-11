function countPositiveNumbers(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ!");
        return;
    }

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            count++;
        }
    }

    console.log("Số lượng số nguyên dương trong mảng:", count);
}

// 🛠 Kiểm thử
countPositiveNumbers([1, -2, 3, 4.5, 6, 0]); 
countPositiveNumbers([-1, -3, -5]); 
countPositiveNumbers([10, 20, "hello", true, 30]); 
countPositiveNumbers("Test"); 
