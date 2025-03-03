//Nối chuỗi
let result = "javascript" + 5; 
console.log(result);  // "javascript5"
let result1 = "javascript" - 1;
//Chuỗi không thể trừ số
console.log(result1);  // NaN
//Nối chuỗi (ép kiểu thành chuỗi)
let result2 = "3" + 2;
console.log(result2);  // "32"
//	Ép kiểu thành số
let result3 = "5" - 4;
console.log(result3);  // 1
//"123" có thể thành số
let result4 = isNaN("123");
console.log(result4);  // false
//	"hello" không phải số
let result5 = isNaN("hello");
console.log(result5);  // true
//"123" không phải NaN
let result6 = Number.isNaN("123");
console.log(result6);  // false
//NaN là NaN
let result7 = Number.isNaN(NaN);
console.log(result7);  // true