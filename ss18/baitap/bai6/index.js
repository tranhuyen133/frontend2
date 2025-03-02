let year = prompt("Nhập năm ");
if ((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
    console.log("Năm nhuận");
    
} else{
    console.log("không phải năm nhuận");
    
}
   