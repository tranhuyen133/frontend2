let choice = prompt("Chọn kiểu đổi tiền (1: VND -> USD, 2: USD -> VND):");
let exchangeRate = 23000; // 1 USD = 23,000 VND
let amount, result;

if (choice === "1") {
    amount = parseFloat(prompt("Nhập số tiền VND:"));
    result = amount / exchangeRate;
    console.log(`${amount} VND = ${result.toFixed(2)} USD`);
} else if (choice === "2") {
    amount = parseFloat(prompt("Nhập số tiền USD:"));
    result = amount * exchangeRate;
    console.log(`${amount} USD = ${result} VND`);
} else {
    console.log("Lựa chọn không hợp lệ.");
}
