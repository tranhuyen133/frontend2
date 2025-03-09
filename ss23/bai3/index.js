let n = Number(prompt("Nhập số phần tử của mảng:"));
let array = [];

for (let i = 0; i < n; i++) {
    let number = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
    array.push(number);
}

let countNegative = 0;

for (let j = 0; j < array.length; j++) {
    if (array[j] < 0) {
        countNegative++;
    }
}

console.log("Mảng đã nhập:", array);
console.log(`Số lượng số nguyên âm trong mảng là: ${countNegative}`);
