let a = parseFloat(prompt("Nhập số"));
let b = parseFloat(prompt("Nhập số"));
let min = Math.min(a,b);
let max = Math.max(a,b);
let random = Math.floor(Math.random() * (max - min) + min );
document.write("Số ngẫu nhiên :" + random );