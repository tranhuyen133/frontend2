let day1 = new Date(prompt("nhap ngay thu 1 : "));
let day2 = new Date(prompt("nhap ngay thu 2 : "));
let day = (d2 - d1) / 3600 / 24 / 1000;
document.write("so ngay cach nhau la : ", Math.abs(day) + " ngay");
