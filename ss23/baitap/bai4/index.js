let inputString = prompt("Nhập vào dãy số, cách nhau bởi dấu phẩy:");

let array = inputString.split("").map(Number);

if (array.length === 0) {
    console.log("Không có số nguyên hợp lệ trong dãy số.");
} else {
    let max = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    console.log(`Số ${max} là số lớn nhất trong dãy số.`);
}
