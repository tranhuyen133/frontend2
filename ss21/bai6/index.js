let number = parseInt(prompt("Nhập một số nguyên:"));

if (Number.isInteger(number) && number !== 0) {
    console.log("Các ước của " + number + " là:");
    for (let i = 1; i <= Math.abs(number); i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
} else {
    console.log("Vui lòng nhập một số nguyên khác 0.");
}
