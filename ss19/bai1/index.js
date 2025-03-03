let month = parseInt(prompt("Nhập số tháng (1-12):"));

if (month < 1 || month > 12) {
    console.log("Tháng không hợp lệ");
} else if (month === 2) {
    console.log("Tháng 2 có 28 hoặc 29 ngày năm nhuận");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(`Tháng ${month} có 30 ngày`);
} else {
    console.log(`Tháng ${month} có 31 ngày`);
}
