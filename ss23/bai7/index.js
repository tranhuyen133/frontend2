let n = Number(prompt("Nhập số lượng phần tử của mảng:"));

// Kiểm tra nếu n <= 0
if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    // Nhập mảng từ người dùng
    let input = prompt(`Nhập ${n} số, cách nhau bởi dấu phẩy (,)`);
    let array = input.split(",").map(Number);

    // Kiểm tra nếu mảng không có đủ 2 số để tìm số lớn thứ hai
    if (array.length < 2) {
        console.log("Không thể tìm số lớn thứ hai do mảng có ít hơn 2 phần tử.");
    } else {
        // Khởi tạo max và secondMax bằng 2 phần tử đầu tiên của mảng
        let max = array[0];
        let secondMax = array[1];

        if (max < secondMax) {
            [max, secondMax] = [secondMax, max]; // Hoán đổi nếu cần
        }

        // Duyệt mảng từ phần tử thứ 2 trở đi
        for (let i = 2; i < array.length; i++) {
            if (array[i] > max) {
                secondMax = max;
                max = array[i];
            } else if (array[i] > secondMax && array[i] !== max) {
                secondMax = array[i];
            }
        }

        // Kiểm tra nếu không tìm thấy số lớn thứ hai
        if (max === secondMax) {
            console.log("Không có số lớn thứ hai trong mảng.");
        } else {
            console.log("Số lớn thứ hai trong mảng là:", secondMax);
        }
    }
}
