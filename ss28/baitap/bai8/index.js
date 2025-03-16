let employees = [
    { id: 1, name: "Nguyễn Văn A", position: "Developer", salary: 1000 },
    { id: 2, name: "Trần Thị B", position: "Tester", salary: 800 },
    { id: 3, name: "Lê Văn C", position: "Manager", salary: 2000 }
];

// Hiển thị danh sách nhân viên
function displayEmployees() {
    console.table(employees);
}

// Thêm nhân viên mới
function addEmployee() {
    let id = parseInt(prompt("Nhập ID nhân viên:"));
    let name = prompt("Nhập tên nhân viên:");
    let position = prompt("Nhập vị trí công việc:");
    let salary = parseFloat(prompt("Nhập lương:"));
    employees.push({ id, name, position, salary });
    alert("Nhân viên đã được thêm!");
}

// Xóa nhân viên theo ID
function deleteEmployee() {
    let id = parseInt(prompt("Nhập ID nhân viên cần xóa:"));
    let index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        let confirmDelete = confirm(`Bạn có chắc chắn muốn xóa nhân viên ${employees[index].name} không?`);
        if (confirmDelete) {
            employees.splice(index, 1);
            alert("Nhân viên đã bị xóa!");
        }
    } else {
        alert("Không tìm thấy nhân viên có ID này.");
    }
}

// Cập nhật lương nhân viên theo ID
function updateSalary() {
    let id = parseInt(prompt("Nhập ID nhân viên cần cập nhật lương:"));
    let employee = employees.find(emp => emp.id === id);
    if (employee) {
        let newSalary = parseFloat(prompt(`Nhập mức lương mới cho ${employee.name}:`));
        employee.salary = newSalary;
        alert(`Lương của ${employee.name} đã được cập nhật!`);
    } else {
        alert("Không tìm thấy nhân viên có ID này.");
    }
}

// Tìm kiếm nhân viên theo tên
function searchEmployeeByName() {
    let name = prompt("Nhập tên nhân viên cần tìm:");
    let result = employees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));
    if (result.length > 0) {
        console.table(result);
    } else {
        alert("Không tìm thấy nhân viên.");
    }
}

// Menu quản lý nhân viên
function employeeMenu() {
    let option;
    do {
        option = prompt(
            "Quản lý Nhân viên:\n" +
            "1. Hiển thị danh sách nhân viên\n" +
            "2. Thêm nhân viên\n" +
            "3. Xóa nhân viên theo ID\n" +
            "4. Cập nhật lương nhân viên\n" +
            "5. Tìm kiếm nhân viên theo tên\n" +
            "6. Thoát\n" +
            "Chọn chức năng (1-6):"
        );
        switch (option) {
            case "1":
                displayEmployees();
                break;
            case "2":
                addEmployee();
                break;
            case "3":
                deleteEmployee();
                break;
            case "4":
                updateSalary();
                break;
            case "5":
                searchEmployeeByName();
                break;
            case "6":
                alert("Thoát chương trình.");
                break;
            default:
                alert("Vui lòng nhập số từ 1 đến 6!");
        }
    } while (option !== "6");
}

employeeMenu();
