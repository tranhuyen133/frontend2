let number = parseInt(prompt("Nhập số từ 0 đến 999:"));

if (isNaN(number) || number < 0 || number > 999) {
    console.log("Vui lòng nhập số nguyên từ 0 đến 999.");
} else {
    let tram = Math.floor(number / 100);
    let chuc = Math.floor((number % 100) / 10);
    let donVi = number % 10;
    let result = "";

    switch (tram) {
        case 1: 
        result += "Một trăm "; 
        break;
        case 2: 
        result += "Hai trăm "; 
        break;
        case 3: 
        result += "Ba trăm "; 
        break;
        case 4: 
        result += "Bốn trăm "; 
        break;
        case 5: 
        result += "Năm trăm "; 
        break;
        case 6: 
        result += "Sáu trăm "; 
        break;
        case 7: 
        result += "Bảy trăm "; 
        break;
        case 8:
        result += "Tám trăm "; 
        break;
        case 9: 
        result += "Chín trăm "; 
        break;
    }

    if (tram > 0 && chuc === 0 && donVi !== 0) {
        result += "linh ";
    }

    switch (chuc) {
        case 1: 
            result += "Mười ";
            break;
        case 2: 
            result += "Hai mươi ";
            break;
        case 3: 
            result += "Ba mươi ";
            break;
        case 4: 
            result += "Bốn mươi ";
            break;
        case 5: 
            result += "Năm mươi ";
            break;
        case 6: 
            result += "Sáu mươi ";
            break;
        case 7: 
            result += "Bảy mươi ";
            break;
        case 8: 
            result += "Tám mươi ";
            break;
        case 9: 
            result += "Chín mươi ";
            break;
    }

    if (chuc === 1) { 
        switch (donVi) {
            case 1: 
                result += "một"; 
                break;
            case 2: 
                result += "hai"; 
                break;
            case 3: 
                result += "ba"; 
                break;
            case 4: 
                result += "bốn";
                break;
            case 5: 
                result += "lăm"; 
                break;
            case 6:
                result += "sáu"; 
                break;
            case 7:
                result += "bảy"; 
                break;
            case 8: 
                result += "tám"; 
                break;
            case 9: 
                result += "chín"; 
                break;
        }
    } else {
        switch (donVi) {
            case 1: 
                result += (chuc > 1) ? "mốt" : "một"; 
                break;
            case 2:     
                result += "hai";
                break;
            case 3: 
                result += "ba"; 
                break;
            case 4: 
                result += "bốn"; 
                break;
            case 5: 
                result += (chuc > 0) ? "lăm" : "năm"; 
                break;
            case 6: 
                result += "sáu"; 
                break;
            case 7: 
                result += "bảy"; 
                break;
            case 8: 
                result += "tám"; 
                break;
            case 9: 
                result += "chín"; 
                break;
        }
    }

    alert(result.trim());
}
