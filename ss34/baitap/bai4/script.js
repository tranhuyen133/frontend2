// Lấy danh sách công việc từ Local Storage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Hiển thị danh sách công việc khi tải trang
function renderTodos() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${todo} <button class="delete-btn" onclick="deleteTodo(${index})">Xóa</button>`;
        todoList.appendChild(li);
    });

    // Lưu vào Local Storage
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Thêm công việc
function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    todos.push(todoText);
    todoInput.value = ""; // Xóa nội dung input sau khi nhập
    renderTodos();
}

// Xóa công việc
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Chạy khi tải trang
renderTodos();
