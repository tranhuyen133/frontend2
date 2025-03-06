let array = [3, 5, 7, 3, 8, 5, 3, 9, 5, 10];

let uniqueArray = []; 

for (let i = 0; i < array.length; i++) {
    let value = array[i]; 
    if (uniqueArray.indexOf(value) === -1) {
        uniqueArray.push(value);
    }
}

uniqueArray.sort((a, b) => a - b);

console.log("Mảng sau khi loại bỏ phần tử trùng nhau:", uniqueArray);
