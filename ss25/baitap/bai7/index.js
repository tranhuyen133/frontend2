function capitalizeWords(str) {
    if (typeof str !== "string" || str.trim() === "") {
        console.log("Dữ liệu không hợp lệ!");
        return;
    }

    let words = str.toLowerCase().split(" "); 
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); 

    let result = capitalizedWords.join(" ");
    console.log("Chuỗi sau khi viết hoa:", result);
}

let userInput = prompt("Nhập vào một chuỗi:");
capitalizeWords(userInput);
