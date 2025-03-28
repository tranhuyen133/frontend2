// Lấy các phần tử
const modeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;

// Kiểm tra trạng thái Dark Mode từ localStorage
body.classList.toggle("dark-mode", localStorage.getItem("darkMode") === "enabled");

// Xử lý khi nhấn vào nút chuyển chế độ
modeToggle.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");  
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
});




