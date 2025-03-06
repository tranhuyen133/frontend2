let array = [3, 5, 7, 3, 8, 5, 3, 9, 5, 10];

let number = Number(prompt("Nhập số nguyên cần đếm:"));

let count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
        count++;
    }
}



if (count > 0) {
    console.log(`Số ${number} xuất hiện ${count} lần trong mảng.`);
} else {
    console.log(`Số ${number} không có trong mảng.`);
}
