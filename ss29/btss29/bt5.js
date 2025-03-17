class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

class AuthSystem {
    constructor() {
        this.users = [];
    }

    isValidEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/.test(email);
    }

    isValidPassword(password) {
        return /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password);
    }

    isEmailExist(email) {
        return this.users.some(user => user.email === email);
    }

    register(name, email, password) {
        if (!this.isValidEmail(email)) {
            console.log("Email không hợp lệ! Vui lòng nhập email đúng định dạng.");
            return;
        }
        if (!this.isValidPassword(password)) {
            console.log("Mật khẩu phải có ít nhất 6 ký tự, gồm chữ hoa và ký tự đặc biệt.");
            return;
        }
        if (this.isEmailExist(email)) {
            console.log("Email đã tồn tại. Vui lòng chọn email khác.");
            return;
        }

        this.users.push(new User(name, email, password));
        console.log("Đăng ký thành công!");
    }

    login(email, password) {
        const user = this.users.find(user => user.email === email && user.password === password);
        if (user) {
            console.log("Đăng nhập thành công!");
            console.log(`Chào mừng, ${user.name}!`);
        } else {
            console.log("Email hoặc mật khẩu không đúng!");
        }
    }
}

const auth = new AuthSystem();
const prompt = require("prompt-sync")();

function main() {
    while (true) {
        console.log("\n--- HỆ THỐNG ĐĂNG KÝ & ĐĂNG NHẬP ---");
        console.log("1. Đăng ký");
        console.log("2. Đăng nhập");
        console.log("3. Thoát");

        let choice = prompt("Chọn chức năng (1-3): ");

        switch (choice) {
            case "1":
                let name = prompt("Nhập tên: ");
                let email = prompt("Nhập email: ");
                let password = prompt("Nhập mật khẩu: ");
                auth.register(name, email, password);
                break;
            case "2":
                let loginEmail = prompt("Nhập email: ");
                let loginPassword = prompt("Nhập mật khẩu: ");
                auth.login(loginEmail, loginPassword);
                break;
            case "3":
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
        }
    }
}

main();
