let inputString = prompt("Nhập vào một chuỗi ký tự:");

let charArray = inputString.split("");

let countDigits = 0;

for (let i = 0; i < charArray.length; i++) {
    if (!isNaN(charArray[i]) && charArray[i] !== " ") { 
        countDigits++; 
    }
}

console.log(`Số ký tự số trong chuỗi là: ${countDigits}`);
