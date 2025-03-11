let arr = [7, -2, 10, 4, -5, 3];
if(arr===0){
    console.log("Mảng rỗng. Không có giá trị nhỏ nhất ");
    
}else {
    let minValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < minValue){
            minValue = arr[i];
        }
    }
    console.log(`Gía trị nhỏ nhất ${minValue}`);   
}