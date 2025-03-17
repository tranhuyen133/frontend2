class Task {
    constructor(id, name, description, startTime, status = "Chưa hoàn thành") {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startTime = startTime;
        this.status = status;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }

    addTask(name, description, startTime) {
        this.tasks.push(new Task(this.nextId++, name, description, startTime));
        console.log("Đã thêm công việc mới.");
    }

    displayTasks() {
        console.log("\n--- DANH SÁCH CÔNG VIỆC ---");
        if (this.tasks.length === 0) {
            console.log("Không có công việc nào.");
            return;
        }
        this.tasks.forEach(task => {
            console.log(`#${task.id} - ${task.name}`);
            console.log(`  Mô tả: ${task.description}`);
            console.log(`  Bắt đầu: ${task.startTime}`);
            console.log(`  Trạng thái: ${task.status}\n`);
        });
    }

    updateTaskStatus(id, newStatus) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.status = newStatus;
            console.log("Cập nhật trạng thái thành công.");
        } else {
            console.log("Không tìm thấy công việc!");
        }
    }

    filterTasks(status) {
        console.log(`\n--- CÔNG VIỆC CÓ TRẠNG THÁI: ${status} ---`);
        const filteredTasks = this.tasks.filter(task => task.status === status);
        if (filteredTasks.length === 0) {
            console.log("Không có công việc nào phù hợp.");
        } else {
            filteredTasks.forEach(task => console.log(`#${task.id} - ${task.name}`));
        }
    }

    sortTasks() {
        this.tasks.sort((a, b) => (a.status > b.status ? 1 : -1));
        console.log("Đã sắp xếp công việc theo trạng thái.");
    }
}

const taskManager = new TaskManager();
const prompt = require("prompt-sync")();

function main() {
    while (true) {
        console.log("\n--- QUẢN LÝ CÔNG VIỆC ---");
        console.log("1. Thêm công việc");
        console.log("2. Hiển thị công việc");
        console.log("3. Cập nhật trạng thái công việc");
        console.log("4. Lọc công việc theo trạng thái");
        console.log("5. Sắp xếp công việc");
        console.log("6. Thoát");

        let choice = prompt("Chọn chức năng (1-6): ");

        switch (choice) {
            case "1":
                let name = prompt("Nhập tên công việc: ");
                let description = prompt("Nhập mô tả: ");
                let startTime = prompt("Nhập thời gian bắt đầu: ");
                taskManager.addTask(name, description, startTime);
                break;
            case "2":
                taskManager.displayTasks();
                break;
            case "3":
                let id = parseInt(prompt("Nhập ID công việc: "));
                let newStatus = prompt("Nhập trạng thái mới: ");
                taskManager.updateTaskStatus(id, newStatus);
                break;
            case "4":
                let status = prompt("Nhập trạng thái cần lọc: ");
                taskManager.filterTasks(status);
                break;
            case "5":
                taskManager.sortTasks();
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
