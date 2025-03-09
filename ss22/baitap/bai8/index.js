let array = [3, 5, 7, 3, 8, 5, 3, 9, 5, 10];

let countMap = {};

for (let i = 0; i < array.length; i++) {
    let num = array[i];
    countMap[num] = (countMap[num] || 0) + 1;
}

let maxCount = 0;
let minValue = array[0]; 

for (let key in countMap) {
    let num = Number(key);
    let count = countMap[key];

    if (count > maxCount || (count === maxCount && num < minValue)) {
        maxCount = count;
        minValue = num;
    }
}

console.log(`Phần tử xuất hiện nhiều nhất là: ${minValue}, xuất hiện ${maxCount} lần.`);
