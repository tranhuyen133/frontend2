let correctPassword = "123456"; 

let userPassword = prompt("Nhập mật khẩu:");

if (userPassword === correctPassword) {
    console.log("Mật khẩu chính xác. Đăng nhập thành công!");
} else {
    console.log("Mật khẩu không đúng. Vui lòng thử lại.");
}
