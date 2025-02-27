let radius = parseFloat(prompt("Nhập bán kính hình trụ "));
let height = parseFloat(prompt("Nhập chiều cao hình trụ "));
let pi = Math.PI;
let lateralSurfaceArea = 2 * pi * radius * height;
let baseArea = pi * radius * radius;
let totalSurfaceArea = lateralSurfaceArea + 2 * baseArea;
let volume = baseArea * height;
let circumference = 2 * pi * radius;
    
document.write(`Diện tích xung quanh: ${lateralSurfaceArea.toFixed(2)}`);
document.write(`Diện tích toàn phần: ${totalSurfaceArea.toFixed(2)}`);
document.write(`Thể tích hình trụ: ${volume.toFixed(2)}`);
document.write(`Chu vi đáy: ${circumference.toFixed(2)}`);



