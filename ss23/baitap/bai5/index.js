let array = [2, 7, 10, 5, 9];

let sumOdd = 0; 
let sumEven = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        sumEven += array[i];
    } else {
        sumOdd += array[i]; 
    }
}

console.log(`Tổng các số lẻ: ${sumOdd}`);
console.log(`Tổng các số chẵn: ${sumEven}`);
