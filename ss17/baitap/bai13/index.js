let soTienGui =parseFloat(prompt("Nhập số tiên gửi"));
let soThangGui =parseInt(prompt("Nhập số tháng gửi"));
let soTienLai = (soTienGui * (43/100)* (soThangGui/12));
document.write(`Số tiền lãi nhận được sau ${soThangGui} là: ${soTienLai}`);
