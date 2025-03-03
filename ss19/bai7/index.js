let a = parseFloat(prompt("Nhập số thứ nhất:"));
let b = parseFloat(prompt("Nhập số thứ hai:"));
let c = parseFloat(prompt("Nhập số thứ ba:"));

// Tìm số lớn nhất bằng cách so sánh
let max = a; // Giả sử ban đầu a là số lớn nhất

if (b > max) {  
    max = b; // Nếu b lớn hơn max (a), gán max = b
}

if (c > max) {  
    max = c; // Nếu c lớn hơn max (b hoặc a), gán max = c
}

console.log(`Số lớn nhất trong 3 số là ${max}`);
