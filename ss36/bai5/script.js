// Lấy các phần tử DOM cần sử dụng
const taskInput = document.getElementById("taskName");
const addButton = document.querySelector(".task-input button");

const pendingTasks = document.getElementById("pendingTasks");
const inProgressTasks = document.getElementById("inProgressTasks");
const doneTasks = document.getElementById("doneTasks");

// Lấy dữ liệu từ localStorage nếu có
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Hiển thị công việc từ localStorage khi trang tải lại
function renderTasks() {
    pendingTasks.innerHTML = "";
    inProgressTasks.innerHTML = "";
    doneTasks.innerHTML = "";

    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <p>${task.name}</p>
            ${task.status !== "done" ? `<button onclick="changeStatus('${task.id}')">Chuyển tiếp</button>` : ""}
        `;

        if (task.status === "pending") {
            pendingTasks.appendChild(taskElement);
        } else if (task.status === "inProgress") {
            inProgressTasks.appendChild(taskElement);
        } else {
            doneTasks.appendChild(taskElement);
        }
    });

    // Lưu lại vào localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
addButton.addEventListener("click",()=>{
    const taskName= taskInput.value.trim();
    if(taskName === ""){
        alert("Vui lòng nhập tên công việc");
        return;
    }

    const newTask = {
        id: Date.now().toString(),
        name:taskName,
        status:"pending"
    }
})










// Thêm công việc mới
addButton.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (taskName === "") {
        alert("Vui lòng nhập tên công việc!");
        return;
    }

    const newTask = {
        id: Date.now().toString(),
        name: taskName,
        status: "pending",
    };

    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
});

// Chuyển trạng thái công việc
function changeStatus(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            if (task.status === "pending") {
                task.status = "inProgress";
            } else if (task.status === "inProgress") {
                task.status = "done";
            }
        }
        return task;
    });

    renderTasks();
}

// Hiển thị danh sách công việc khi tải lại trang
renderTasks();
