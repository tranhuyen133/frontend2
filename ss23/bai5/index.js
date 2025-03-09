let n = Number(prompt("Nhập số phần tử của mảng:"));

let array = [];

for (let i = 0; i < n; i++) {
    let value = prompt(`Nhập phần tử thứ ${i + 1}:`);
    array.push(value); 
}

let sum = 0;

for (let i = 0; i < array.length; i++) {
    let num = parseFloat(array[i]); 
    
    if (!isNaN(num) && array[i].trim() !== "") {  
        sum += num;
    }
}

console.log(`Tổng các ký tự là số trong mảng: ${sum}`);
