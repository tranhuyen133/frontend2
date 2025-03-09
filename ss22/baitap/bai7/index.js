let array = [10, 5, 8, 3, 6, 7, 1, 9, 4, 2];

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log("Mảng sau khi sắp xếp tăng dần:", array);
