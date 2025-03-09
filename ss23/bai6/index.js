let array = [0, 1, false, 2, "", 3, null, "hello", undefined, NaN, "world", true];

let filteredArray = array.filter(value => Boolean(value));

console.log("Mảng sau khi loại bỏ các phần tử falsy:", filteredArray);
