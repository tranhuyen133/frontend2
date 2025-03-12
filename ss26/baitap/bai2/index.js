function filterLongStrings(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "string")) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let result = arr.filter(word => word.length > 5);

    if (result.length > 0) {
        console.log(result);
    } else {
        console.log("Mảng không có phần tử nào");
    }
}

// Test cases
filterLongStrings(["apple", "banana", "cat", "elephant", "dog"]);  // Output: ["banana", "elephant"]
filterLongStrings([]);                                             // Output: "Mảng không có phần tử nào"
filterLongStrings("abc");                                          // Output: "Dữ liệu không hợp lệ"
