class Contact {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class ContactManager {
    constructor() {
        this.contacts = [];
        this.nextId = 1; 
    }

    addContact(name, email, phone) {
        const contact = new Contact(this.nextId++, name, email, phone);
        this.contacts.push(contact);
        console.log("Đã thêm liên hệ thành công!");
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("Danh bạ trống!");
            return;
        }
        console.log("Danh sách danh bạ:");
        this.contacts.forEach(contact => {
            console.log(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);
        });
    }

    searchByPhone(phone) {
        const result = this.contacts.find(contact => contact.phone === phone);
        if (result) {
            console.log("Thông tin liên hệ:");
            console.log(`ID: ${result.id}, Name: ${result.name}, Email: ${result.email}, Phone: ${result.phone}`);
        } else {
            console.log("Không tìm thấy liên hệ!");
        }
    }

    updateContact(id, name, email, phone) {
        const contact = this.contacts.find(c => c.id === id);
        if (contact) {
            contact.name = name;
            contact.email = email;
            contact.phone = phone;
            console.log("Cập nhật thành công!");
        } else {
            console.log("Không tìm thấy ID!");
        }
    }

    deleteContact(id) {
        const index = this.contacts.findIndex(c => c.id === id);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log("Xóa liên hệ thành công!");
        } else {
            console.log("Không tìm thấy ID!");
        }
    }
}

const manager = new ContactManager();
const prompt = require("prompt-sync")(); 

function main() {
    while (true) {
        console.log("\n--- QUẢN LÝ DANH BẠ ---");
        console.log("1. Thêm liên hệ");
        console.log("2. Hiển thị danh sách danh bạ");
        console.log("3. Tìm kiếm theo số điện thoại");
        console.log("4. Cập nhật liên hệ theo ID");
        console.log("5. Xóa liên hệ theo ID");
        console.log("6. Thoát");

        let choice = prompt("Chọn chức năng (1-6): ");

        switch (choice) {
            case "1":
                let name = prompt("Nhập tên: ");
                let email = prompt("Nhập email: ");
                let phone = prompt("Nhập số điện thoại: ");
                manager.addContact(name, email, phone);
                break;
            case "2":
                manager.displayContacts();
                break;
            case "3":
                let searchPhone = prompt("Nhập số điện thoại cần tìm: ");
                manager.searchByPhone(searchPhone);
                break;
            case "4":
                let updateId = parseInt(prompt("Nhập ID cần cập nhật: "));
                let newName = prompt("Nhập tên mới: ");
                let newEmail = prompt("Nhập email mới: ");
                let newPhone = prompt("Nhập số điện thoại mới: ");
                manager.updateContact(updateId, newName, newEmail, newPhone);
                break;
            case "5":
                let deleteId = parseInt(prompt("Nhập ID cần xóa: "));
                manager.deleteContact(deleteId);
                break;
            case "6":
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
        }
    }
}

main();
