let text_number = prompt("Nhập một số nguyên:");
let check = 0;

if (isNaN(text_number)) {
    console.log("Dữ liệu nhập vào không hợp lệ.");
} else {
    let isPalindrome = true;
    let length = text_number.length;

    for (let i = 0; i < length / 2; i++) {
        if (text_number[i] !== text_number[length - 1 - i]) {
            check++; 
            isPalindrome = false;
            break; 
        }
    }
    check==0?console.log("Đây là dãy số đối xứng") : console.log("Đây khong phải là đối xứng");
}
