let str = "";

function inputString() {
    str = prompt("Nhập vào một chuỗi: ");
}

function displayString() {
    console.log("Chuỗi hiện tại:", str);
}

function countLettersAndNumbers() {
    let letterCount = (str.match(/[a-zA-Z]/g) || []).length;
    let numberCount = (str.match(/[0-9]/g) || []).length;
    console.log("Số lượng ký tự chữ:", letterCount, "| Số lượng chữ số:", numberCount);
}

function toggleCase() {
    str = str.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
    console.log("Chuỗi sau khi đổi chữ hoa/thường:", str);
}

function shuffleStrings() {
    let str2 = prompt("Nhập chuỗi thứ hai để trộn:");
    let maxLength = Math.max(str.length, str2.length);
    let result = "";
    for (let i = 0; i < maxLength; i++) {
        if (i < str.length) result += str[i];
        if (i < str2.length) result += str2[i];
    }
    console.log("Chuỗi sau khi trộn:", result);
}

function sortWordsByLength() {
    let words = str.match(/\b\w+\b/g) || [];
    words.sort((a, b) => a.length - b.length);
    console.log("Các từ sau khi sắp xếp theo độ dài:", words.join(" "));
}

while (true) {
    console.log("\n===== MENU =====");
    console.log("1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Đếm số lượng ký tự chữ và số trong chuỗi");
    console.log("4. Chuyển đổi chữ hoa/thường");
    console.log("5. Trộn chuỗi với một chuỗi khác");
    console.log("6. Sắp xếp từ theo độ dài");
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
            countLettersAndNumbers();
            break;
        case 4:
            toggleCase();
            break;
        case 5:
            shuffleStrings();
            break;
        case 6:
            sortWordsByLength();
            break;
        case 7:
            console.log("Chương trình kết thúc.");
            process.exit(0);
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}
