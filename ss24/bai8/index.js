let str = "";

function inputString() {
    str = prompt("Nhập vào một chuỗi: ");
}

function displayString() {
    console.log("Chuỗi hiện tại:", str);
}

function findDuplicateWords() {
    let words = str.toLowerCase().match(/\b\w+\b/g) || [];
    let wordCount = {};
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    console.log("Các từ trùng lặp và số lần xuất hiện:", wordCount);
}

function findMinMaxWords() {
    let words = str.match(/\b\w+\b/g) || [];
    if (words.length === 0) {
        console.log("Không có từ nào trong chuỗi.");
        return;
    }
    let minWord = words.reduce((a, b) => a.length <= b.length ? a : b);
    let maxWord = words.reduce((a, b) => a.length >= b.length ? a : b);
    console.log("Từ ngắn nhất:", minWord, "| Từ dài nhất:", maxWord);
}

function findMostFrequentCharacter() {
    let charCount = {};
    for (let char of str) {
        if (char !== ' ') {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    let maxFreq = Math.max(...Object.values(charCount));
    let mostFrequentChars = Object.keys(charCount).filter(char => charCount[char] === maxFreq);
    console.log("Ký tự xuất hiện nhiều nhất:", mostFrequentChars.join(", "), "với số lần xuất hiện:", maxFreq);
}

function convertToSnakeCase() {
    str = str.toLowerCase().replace(/\s+/g, '_');
    console.log("Chuỗi sau khi chuyển đổi sang snake_case:", str);
}

while (true) {
    console.log("\n===== MENU =====");
    console.log("1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện");
    console.log("4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi");
    console.log("5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi");
    console.log("6. Chuyển đổi chuỗi ký tự thành dạng snake_case");
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
            findDuplicateWords();
            break;
        case 4:
            findMinMaxWords();
            break;
        case 5:
            findMostFrequentCharacter();
            break;
        case 6:
            convertToSnakeCase();
            break;
        case 7:
            console.log("Chương trình kết thúc.");
            process.exit(0);
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}
