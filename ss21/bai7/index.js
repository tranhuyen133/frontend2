let tienGoc = parseFloat(prompt("Nhập số tiền gửi ban đầu:"));

let laiSuat = parseFloat(prompt("Nhập lãi suất tháng (%):")) / 100;

let soThang = parseInt(prompt("Nhập số tháng gửi:"));

let tongTien = tienGoc * Math.pow((1 + laiSuat), soThang);

let tongLai = tongTien - tienGoc;

console.log("Tiền lãi: " + tongLai.toFixed(3));
console.log("Tiền nhận được: " + tongTien.toFixed(3));
