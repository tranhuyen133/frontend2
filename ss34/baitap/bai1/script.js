document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let message = document.getElementById("message");

    // Kiểm tra các trường có bị trống không
    if (email === "" || password === "" || confirmPassword === "") {
        message.textContent = "Tất cả các trường đều bắt buộc";
        return;
    }

    // Kiểm tra xác nhận mật khẩu có trùng không
    if (password !== confirmPassword) {
        message.textContent = "Mật khẩu không khớp!";
        return;
    }

    // Lấy danh sách người dùng từ Local Storage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra email đã tồn tại chưa
    let userExists = users.some(user => user.email === email);
    if (userExists) {
        message.textContent = "Email đã được đăng ký!";
        return;
    }

    // Thêm người dùng mới vào danh sách
    users.push({ email: email, password: password });
    localStorage.setItem("users", JSON.stringify(users));

    message.style.color = "green";
    message.textContent = "Đăng ký thành công!";
    
    // Xóa các input sau khi đăng ký thành công
    document.getElementById("registerForm").reset();
});
