let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));

if (isNaN(a) || isNaN(b) || b < 0) {
    console.log("Dữ liệu nhập vào không hợp lệ");
} else {
    let result = 1;

    for (let i = 0; i < b; i++) {
        result *= a;
    }

    console.log(`${a}^${b} = ${result}`);
}
