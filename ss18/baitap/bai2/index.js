let math = parseFloat(prompt("Nhập điểm môn Toán:"));
let literature = parseFloat(prompt("Nhập điểm môn Văn:"));
let english = parseFloat(prompt("Nhập điểm môn Tiếng Anh:"));

let average = (math + literature + english) / 3;

if (average >= 8.0) {
    console.log("Giỏi");
} else if (average >= 6.5) {
    console.log("Khá");
} else if (average >= 5.0) {
    console.log("Trung bình");
} else {
    console.log("Yếu");
}
