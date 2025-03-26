
        // Lấy các phần tử DOM
        const taskInput = document.getElementById("task-input");
        const addButton = document.getElementById("add-button");
        const taskList = document.getElementById("task-list");

        // Load danh sách từ LocalStorage
        function loadTasks() {
            taskList.innerHTML = "";
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <span class="${task.completed ? 'completed' : ''}" onclick="editTask(${index})">${task.text}</span>
                    <input type="text" class="edit-input" id="edit-${index}" value="${task.text}" onblur="saveEdit(${index})">
                    <button onclick="toggleTask(${index})">Sửa</button>
                    <button onclick="deleteTask(${index})">Xóa</button>
                `;
                taskList.appendChild(li);
            });
        }

        // Thêm công việc
        function addTask() {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            if (taskInput.value.trim()) {
                tasks.push({ text: taskInput.value, completed: false });
                localStorage.setItem("tasks", JSON.stringify(tasks));
                taskInput.value = "";
                loadTasks();
            }
        }

        // Xóa công việc
        function deleteTask(index) {
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            loadTasks();
        }

        // Đánh dấu hoàn thành
        function toggleTask(index) {
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            tasks[index].completed = !tasks[index].completed;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            loadTasks();
        }

        // Chỉnh sửa công việc
        function editTask(index) {
            const taskText = document.querySelector(`#edit-${index}`);
            taskText.style.display = "inline";
            taskText.focus();
        }

        // Lưu chỉnh sửa
        function saveEdit(index) {
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            const taskText = document.querySelector(`#edit-${index}`);
            tasks[index].text = taskText.value;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            loadTasks();
        }

        // Sự kiện nút thêm
        addButton.addEventListener("click", addTask);

        // Load danh sách khi mở trang
        loadTasks();