let a = Number(prompt("Nhập giá trị của a"));
let b = Number(prompt("Nhập giá trị của b"));
let c = Number(prompt("Nhập giá trị của c"));

let delta = Math.abs(b*b - 4*a*c);
let x1 = (-b + Math.sqrt(delta))/2*a;
let x2 = (-b - Math.sqrt(delta))/2*a;
document.write(`Gía trị x1 ${x1.toFixed(2)}`);
document.write(`\n Gía trị x2 ${x2.toFixed(2)}`);






