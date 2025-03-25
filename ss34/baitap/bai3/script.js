// Hàm đăng ký người dùng
function register() {
    let email = document.getElementById("registerEmail").value.trim();
    let password = document.getElementById("registerPassword").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let message = document.getElementById("registerMessage");

    if (email === "" || password === "" || confirmPassword === "") {
        message.textContent = "Vui lòng điền đầy đủ thông tin!";
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "Mật khẩu không khớp!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
        message.textContent = "Email đã tồn tại!";
        return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    message.style.color = "green";
    message.textContent = "Đăng ký thành công! Chuyển hướng...";
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
}

// Hàm đăng nhập
function login() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    let message = document.getElementById("loginMessage");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        message.textContent = "Sai email hoặc mật khẩu!";
        return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    message.style.color = "green";
    message.textContent = "Đăng nhập thành công! Chuyển hướng...";
    setTimeout(() => {
        window.location.href = "home.html"; // Chuyển sang trang chủ
    }, 2000);
}
