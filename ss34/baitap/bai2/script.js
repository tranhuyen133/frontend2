document.addEventListener("DOMContentLoaded", () => {
    let courses = [
        {
            id: 1,
            content: 'Learn JavaScript Session 01',
            dueDate: '2023-04-17',
            status: 'Pending',
            assignedTo: 'Anh Bách',
        },
        {
            id: 2,
            content: 'Learn JavaScript Session 2',
            dueDate: '2023-04-17',
            status: 'Pending',
            assignedTo: 'Anh Lâm',
        },
        {
            id: 3,
            content: 'Learn CSS Session 1',
            dueDate: '2023-04-17',
            status: 'Pending',
            assignedTo: 'Hieu Ci ớt ớt',
        },
    ];

    const taskTable = document.getElementById('taskTable');

    // Hàm hiển thị danh sách công việc
    function renderTasks() {
        taskTable.innerHTML = '';
        courses.forEach((task, index) => {
            taskTable.innerHTML += `
                <tr data-index="${index}">
                    <td>${index + 1}</td>
                    <td>${task.content}</td>
                    <td>${task.dueDate}</td>
                    <td>${task.status}</td>
                    <td>${task.assignedTo}</td>
                    <td>
                        <button class="edit">Sửa</button>
                        <button class="delete">Xóa</button>
                    </td>
                </tr>
            `;
        });

        // Gán sự kiện sau khi render lại danh sách
        document.querySelectorAll(".edit").forEach((button, index) => {
            button.addEventListener("click", () => editTask(index));
        });

        document.querySelectorAll(".delete").forEach((button, index) => {
            button.addEventListener("click", () => deleteTask(index));
        });
    }

    // Hàm sửa công việc
    function editTask(index) {
        let task = courses[index];
        let newContent = prompt("Nhập nội dung mới:", task.content);
        let newDueDate = prompt("Nhập ngày hoàn thành mới:", task.dueDate);
        let newStatus = prompt("Nhập trạng thái mới (Pending/Completed):", task.status);
        let newAssignedTo = prompt("Nhập người được giao:", task.assignedTo);

        if (newContent && newDueDate && newStatus && newAssignedTo) {
            courses[index] = {
                ...task,
                content: newContent,
                dueDate: newDueDate,
                status: newStatus,
                assignedTo: newAssignedTo,
            };
            renderTasks();
        }
    }

    // Hàm xóa công việc
    function deleteTask(index) {
        if (confirm("Bạn có chắc muốn xóa công việc này không?")) {
            courses.splice(index, 1);
            renderTasks();
        }
    }

    // Hiển thị danh sách ban đầu
    renderTasks();
});
