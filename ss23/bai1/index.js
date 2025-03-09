let array = [];

for (let i = 0; i < 10; i++) {
    let number = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
    array.push(number);
}

let count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] >= 10) {
        count++;
    }
}

console.log("Mảng đã nhập:", array);
console.log(`Có ${count} số nguyên lớn hơn hoặc bằng 10 trong mảng.`);
