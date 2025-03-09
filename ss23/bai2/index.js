let array = [];
let i = 0;

while (i < 10) {
    let number = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));

    if (!array.includes(number)) {
        array.push(number);
        i++; 
    } else {
        console.log("Số đã tồn tại, vui lòng nhập số khác!");
    }
}

let max = array[0];
let maxIndex = 0;

for (let j = 1; j < array.length; j++) {
    if (array[j] > max) {
        max = array[j];
        maxIndex = j;
    }
}

console.log("Mảng đã nhập:", array);
console.log(`Số lớn nhất trong mảng là: ${max}, tại vị trí index: ${maxIndex}`);
