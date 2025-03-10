let matrix = [];

function inputMatrix() {
    let rows = Number(prompt("Nhập số hàng của mảng: "));
    let cols = Number(prompt("Nhập số cột của mảng: "));
    matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = prompt(`Nhập hàng ${i + 1} (các số cách nhau bởi dấu cách):`).split(" ").map(Number);
        if (row.length !== cols) {
            console.log("Số lượng phần tử không khớp số cột!");
            return;
        }
        matrix.push(row);
    }
}

function displayMatrix() {
    if (matrix.length === 0) {
        console.log("Mảng chưa được nhập!");
        return;
    }
    console.log("Mảng 2 chiều:");
    matrix.forEach(row => console.log(row.join(" ")));
}

function sumMatrix() {
    let sum = matrix.flat().reduce((acc, num) => acc + num, 0);
    console.log("Tổng các phần tử trong mảng là:", sum);
}

function sumMainDiagonal() {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i] || 0;
    }
    console.log("Tổng đường chéo chính là:", sum);
}

function sumSecondaryDiagonal() {
    let sum = 0;
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        sum += matrix[i][n - 1 - i] || 0;
    }
    console.log("Tổng đường chéo phụ là:", sum);
}

function averageRowOrColumn() {
    let choice = prompt("Chọn 'row' để tính theo hàng, 'col' để tính theo cột:");
    let index = Number(prompt("Nhập chỉ số hàng/cột (bắt đầu từ 0):"));
    let sum = 0, count = 0;

    if (choice === "row" && index >= 0 && index < matrix.length) {
        sum = matrix[index].reduce((acc, num) => acc + num, 0);
        count = matrix[index].length;
    } else if (choice === "col" && matrix.length > 0 && index >= 0 && index < matrix[0].length) {
        for (let i = 0; i < matrix.length; i++) {
            sum += matrix[i][index] || 0;
            count++;
        }
    } else {
        console.log("Chỉ số không hợp lệ!");
        return;
    }
    console.log(`Trung bình cộng là: ${sum / count}`);
}

while (true) {
    console.log("\n===== MENU =====");
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tính tổng đường chéo chính");
    console.log("5. Tính tổng đường chéo phụ");
    console.log("6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột");
    console.log("7. Thoát");

    let choice = Number(prompt("Lựa chọn của bạn: "));
    switch (choice) {
        case 1:
            inputMatrix();
            break;
        case 2:
            displayMatrix();
            break;
        case 3:
            sumMatrix();
            break;
        case 4:
            sumMainDiagonal();
            break;
        case 5:
            sumSecondaryDiagonal();
            break;
        case 6:
            averageRowOrColumn();
            break;
        case 7:
            console.log("Chương trình kết thúc.");
            process.exit(0);
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}
