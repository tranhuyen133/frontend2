console.log("Các số Armstrong có 3 chữ số:");

for (let num = 100; num <= 999; num++) {
    let hangTram = Math.floor(num / 100);   
    let hangChuc = Math.floor((num % 100) / 10);
    let hangDonVi = num % 10;               

    let tongLapPhuong = hangTram ** 3 + hangChuc ** 3 + hangDonVi ** 3;

    if (tongLapPhuong === num) {
        console.log(num);
    }
}



