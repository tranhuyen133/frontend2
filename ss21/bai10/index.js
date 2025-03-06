let n = parseInt(prompt("Nhập số lượng số nguyên tố cần in ra:"));
let dem = 0; 
let num = 2; 

while (dem < n) {
    let soUoc = 0; 

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            soUoc++; 
        }
    }


    if (soUoc === 2) {
        console.log(num);
        dem++; 
    }

    num++; 
}
