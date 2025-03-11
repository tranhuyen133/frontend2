let str = "";

function inputString() {
    str = prompt("Nhập vào một chuỗi: ");
}

function displayString() {
    console.log("Chuỗi hiện tại:", str);
}

function trimString() {
    str = str.trim();
    console.log("Chuỗi sau khi loại bỏ khoảng trắng:", str);
}

function reverseString() {
    str = str.split('').reverse().join('');
    console.log("Chuỗi sau khi đảo ngược:", str);
}

function countWords() {
    let wordCount = str.trim().split(/\s+/).length;
    console.log("Số lượng từ trong chuỗi là:", wordCount);
}




function replaceCharacter() {
    let oldChar = prompt("Nhập ký tự cần thay thế: ");
    if (!str.includes(oldChar)) {
        console.log("Không tìm thấy ký tự trong chuỗi.");
        return;
    }
    let newChar = prompt("Nhập ký tự thay thế: ");
    str = str.split(oldChar).join(newChar);
    console.log("Chuỗi sau khi thay thế:", str);
}

while (true) {
    console.log("\n===== MENU =====");
    console.log("1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Loại bỏ khoảng trắng ở đầu và cuối chuỗi");
    console.log("4. Đảo ngược chuỗi ký tự");
    console.log("5. Đếm số lượng từ trong chuỗi ký tự");
    console.log("6. Tìm kiếm và thay thế ký tự trong chuỗi");
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
            trimString();
            break;
        case 4:
            reverseString();
            break;
        case 5:
            countWords();
            break;
        case 6:
            replaceCharacter();
            break;
        case 7:
            console.log("Chương trình kết thúc.");
            process.exit(0);
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}
