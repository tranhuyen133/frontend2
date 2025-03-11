let users = [];

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.(com|vn)$/.test(email);
}

function registerEmail(email) {
    if (!isValidEmail(email)) {
        console.log(" Email không hợp lệ! Vui lòng nhập email đúng định dạng.");
        return;
    }

    if (users.includes(email)) {
        console.log(" Tài khoản đã tồn tại!");
    } else {
        users.push(email);
        console.log("Đăng ký thành công!");
    }
}

registerEmail("test@example.com");  
registerEmail("test@example.com");  
registerEmail("invalid-email");     
registerEmail("user@domain.vn");   
registerEmail("hello@domain.net");  
console.log("Danh sách tài khoản:", users);
