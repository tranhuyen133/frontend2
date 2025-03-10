let str = "";

function inputString() {
    str = prompt("Nhập vào một chuỗi: ");
}

function displayString() {
    console.log("Chuỗi hiện tại:", str);
}

function getStringLength() {
    console.log("Độ dài của chuỗi là:", str.length);
}

function countCharacter() {
    let char = prompt("Nhập ký tự cần đếm: ");
    let count = str.split('').filter(c => c === char).length;
    console.log(`Số lần xuất hiện của '${char}' là:`, count);
}

function isPalindrome() {
    let reversed = str.split('').reverse().join('');
    console.log(str === reversed ? "Chuỗi là chuỗi đối xứng." : "Chuỗi không phải là chuỗi đối xứng.");
}

function capitalizeWords() {
    str = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    console.log("Chuỗi sau khi chuyển đổi:", str);
}

while (true) {
    console.log("\n===== MENU =====");
    console.log("1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Tính độ dài của chuỗi");
    console.log("4. Đếm số lần xuất hiện của một ký tự");
    console.log("5. Kiểm tra chuỗi có phải là chuỗi đối xứng không");
    console.log("6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ");
    console.log("7. Thoát");

    let choice = Number(prompt("Lựa chọn của bạn: "));
    switch (choice) {
        case 1:
            inputString();
            break;
        case 2:
            displayString();
            break;
        case 3:
            getStringLength();
            break;
        case 4:
            countCharacter();
            break;
        case 5:
            isPalindrome();
            break;
        case 6:
            capitalizeWords();
            break;
        case 7:
            console.log("Chương trình kết thúc.");
            process.exit(0);
        default:
            console.log(" Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}