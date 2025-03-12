function findMaxValueAndIndex(arr) {
    if (!Array.isArray(arr) || arr.length !== 10 || arr.some(num => typeof num !== "number")) {
        console.log("Dữ liệu không hợp lệ! Hãy nhập một mảng số nguyên có đúng 10 phần tử.");
        return;
    }

    let maxValue = Math.max(...arr);
    let maxIndex = arr.indexOf(maxValue);

    console.log(`Số lớn nhất: ${maxValue}, Vị trí: ${maxIndex}`);
}

// Test case
findMaxValueAndIndex([12, 3, 45, 67, 34, 89, 23, 90, 11, 78]); 
// Output: Số lớn nhất: 90, Vị trí: 7
