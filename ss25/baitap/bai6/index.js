function isPalindrome(str) {
    if (typeof str !== "string") {
        console.log("Dữ liệu không hợp lệ!");
        return;
    }

    let cleanedStr = str.toLowerCase().replace(/\s+/g, ""); // Chuyển thành chữ thường & loại bỏ khoảng trắng
    let reversedStr = cleanedStr.split("").reverse().join(""); // Đảo ngược chuỗi

    if (cleanedStr === reversedStr) {
        console.log(`Chuỗi "${str}" là chuỗi đối xứng.`);
    } else {
        console.log(`Chuỗi "${str}" không phải là chuỗi đối xứng.`);
    }
}

// 🛠 Nhập chuỗi từ người dùng
let userInput = prompt("Nhập vào một chuỗi:");
isPalindrome(userInput);
