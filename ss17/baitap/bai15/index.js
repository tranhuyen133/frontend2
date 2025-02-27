let radius = parseFloat(prompt("Nhập bán kính của hình cầu: "));
let pi = Math.PI;
let volume = (4 / 3) * pi * Math.pow(radius, 3);
let surfaceArea = 4 * pi * Math.pow(radius, 2);
let maxCircumference = 2 * pi * radius;

document.write(`Thể tích hình cầu: ${volume.toFixed(2)}`);
document.write(`Diện tích bề mặt hình cầu: ${surfaceArea.toFixed(2)}`);
document.write(`Chu vi lớn nhất của hình cầu: ${maxCircumference.toFixed(2)}`);