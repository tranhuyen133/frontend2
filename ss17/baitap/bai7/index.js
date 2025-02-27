let a = (Number(prompt("Nhập số tiền ")));
document.write(a.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }));