let year = parseInt(prompt("Nhập số năm kinh nghiệm của nhân viên"));

if (isNaN(year) || year < 0) {
    console.log("Vui lòng nhập số hợp lệ.");
} else if (year < 1) {
    console.log("Mới vào nghề");
} else if (year <= 3) {
    console.log("Nhân viên có kinh nghiệm");
} else if (year <= 6) {
    console.log("Chuyên viên");
} else {
    console.log("Quản lý");
}
