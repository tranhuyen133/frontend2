let sumOdd = 0;
let numbers = [];

for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt("Nhập số nguyên thứ " + (i + 1) + ":"));
    numbers.push(num); 

    if (num % 2 !== 0) { 
        sumOdd += num;
    }
}

console.log("Tổng các số lẻ trong các số đã nhập là: " + sumOdd);
