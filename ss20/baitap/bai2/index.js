let number = parseInt(prompt("Nhập số nguyên "));
if(isNaN(number)|| number <=0){
    console.log("Dữ liệu không hợp lệ ");
    
}else{
    console.log(`Các dgias trị chia hết cho 5 từ1 đến ${number} là`);
    for (let i = 5; i <= number; i += 5) {
        console.log(i);
}
        
}
    