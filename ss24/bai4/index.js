let matrix = [];

function showMenu() {
    console.log("\n================== MENU ===================");
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó");
    console.log("5. Tính trung bình cộng các phần tử của một hàng cụ thể");
    console.log("6. Đảo ngược các hàng trong mảng");
    console.log("7. Thoát chương trình");
    console.log("============================================");
}

while (true) {
    showMenu();
    let choice = Number(prompt("Lựa chọn của bạn:"));

    switch (choice) {
        case 1:
            let rows = Number(prompt("Nhập số hàng của mảng:"));
            let cols = Number(prompt("Nhập số cột của mảng:"));
            matrix = [];

            for (let i = 0; i < rows; i++) {
                let rowInput = prompt(`Nhập ${cols} phần tử của hàng ${i + 1}, cách nhau bởi dấu phẩy (,)`);
                let rowArray = rowInput.split(",").map(Number);
                if (rowArray.length !== cols) {
                    console.log(" Số phần tử nhập không khớp số cột!");
                    i--;
                } else {
                    matrix.push(rowArray);
                }
            }
            console.log("Mảng 2 chiều đã nhập:");
            console.table(matrix);
            break;

        case 2:
            console.log("Mảng 2 chiều hiện tại:");
            console.table(matrix);
            break;

        case 3:
            let sum = matrix.flat().reduce((total, num) => total + num, 0);
            console.log("Tổng các phần tử trong mảng:", sum);
            break;

        case 4:
            if (matrix.length === 0) {
                console.log("Mảng rỗng, không thể tìm phần tử lớn nhất!");
            } else {
                let maxVal = matrix[0][0];
                let maxRow = 0, maxCol = 0;
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        if (matrix[i][j] > maxVal) {
                            maxVal = matrix[i][j];
                            maxRow = i;
                            maxCol = j;
                        }
                    }
                }
                console.log(`Phần tử lớn nhất là ${maxVal} tại vị trí [${maxRow}, ${maxCol}]`);
            }
            break;

        case 5:
            let rowIndex = Number(prompt("Nhập chỉ số hàng muốn tính trung bình:"));
            if (rowIndex >= 0 && rowIndex < matrix.length) {
                let rowSum = matrix[rowIndex].reduce((total, num) => total + num, 0);
                let avg = rowSum / matrix[rowIndex].length;
                console.log(`Trung bình cộng của hàng ${rowIndex}: ${avg.toFixed(2)}`);
            } else {
                console.log("Chỉ số hàng không hợp lệ!");
            }
            break;

        case 6:
            matrix.reverse();
            console.log("Mảng sau khi đảo ngược các hàng:");
            console.table(matrix);
            break;

        case 7:
            console.log("Chương trình kết thúc.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }

    if (choice === 7) {
        break;
    }
}
