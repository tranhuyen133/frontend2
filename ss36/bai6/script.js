// Lấy các phần tử DOM
const stars = document.querySelectorAll(".stars");
const selectedRating = document.getElementById("selected-rating");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("comment-list");

let currentRating = 0; // Lưu số sao người dùng chọn

// Xử lý khi bấm vào sao
stars.forEach(star => {
    star.addEventListener("click", () => {
        currentRating = Number(star.dataset.value);
        updateStarUI();
    });
});

// Cập nhật giao diện số sao được chọn
function updateStarUI() {
    stars.forEach(star => {
        star.classList.toggle("active", Number(star.dataset.value) <= currentRating);
    });
    selectedRating.textContent = currentRating 
        ? `Bạn đã đánh giá ${currentRating} sao.` 
        : "Bạn chưa đánh giá.";
}

// Gửi đánh giá
function submitReview() {
    const commentText = commentInput.value.trim();
    if (!currentRating) return alert("Vui lòng chọn số sao!");
    if (!commentText) return alert("Vui lòng nhập nội dung đánh giá!");

    // Lấy dữ liệu cũ từ localStorage, thêm đánh giá mới
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push({ rating: currentRating, comment: commentText });

    // Lưu vào localStorage và cập nhật giao diện
    localStorage.setItem("reviews", JSON.stringify(reviews));
    commentInput.value = "";
    currentRating = 0;
    updateStarUI();
    renderReviews();
}

// Hiển thị danh sách đánh giá từ localStorage
function renderReviews() {
    commentList.innerHTML = "";
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.forEach(({ rating, comment }) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${"★".repeat(rating)}</span> <b>${comment}</b>`;
        commentList.appendChild(li);
    });
}

// Hiển thị đánh giá khi tải lại trang
renderReviews();
