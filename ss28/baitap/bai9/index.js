let books = [
    { id: 1, title: "Dế Mèn Phiêu Lưu Ký", author: "Tô Hoài", year: 1941, price: 50000, isAvailable: true },
    { id: 2, title: "Đắc Nhân Tâm", author: "Dale Carnegie", year: 1936, price: 120000, isAvailable: false },
    { id: 3, title: "Nhà Giả Kim", author: "Paulo Coelho", year: 1988, price: 80000, isAvailable: true }
];

// Hiển thị danh sách sách
function displayBooks() {
    console.table(books);
}

// Thêm sách mới
function addBook() {
    let id = parseInt(prompt("Nhập mã sách (ID):"));
    let title = prompt("Nhập tên sách:");
    let author = prompt("Nhập tác giả:");
    let year = parseInt(prompt("Nhập năm xuất bản:"));
    let price = parseFloat(prompt("Nhập giá sách:"));
    let isAvailable = confirm("Sách có sẵn để mượn không? (OK: Có, Cancel: Không)");

    books.push({ id, title, author, year, price, isAvailable });
    alert("Sách đã được thêm thành công!");
}

// Tìm kiếm sách theo tiêu đề
function searchBookByTitle() {
    let title = prompt("Nhập tên sách cần tìm:");
    let result = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if (result.length > 0) {
        console.table(result);
    } else {
        alert("Không tìm thấy sách.");
    }
}

// Cập nhật trạng thái mượn/trả sách
function updateBookStatus() {
    let id = parseInt(prompt("Nhập ID sách cần cập nhật trạng thái:"));
    let book = books.find(b => b.id === id);
    if (book) {
        book.isAvailable = !book.isAvailable;
        alert(`Trạng thái sách "${book.title}" đã được cập nhật thành ${book.isAvailable ? "Có sẵn" : "Đang mượn"}.`);
    } else {
        alert("Không tìm thấy sách có ID này.");
    }
}

// Xóa sách theo ID
function deleteBook() {
    let id = parseInt(prompt("Nhập ID sách cần xóa:"));
    let index = books.findIndex(b => b.id === id);
    if (index !== -1) {
        let confirmDelete = confirm(`Bạn có chắc chắn muốn xóa sách "${books[index].title}" không?`);
        if (confirmDelete) {
            books.splice(index, 1);
            alert("Sách đã bị xóa!");
        }
    } else {
        alert("Không tìm thấy sách có ID này.");
    }
}

// Sắp xếp sách theo giá tăng dần
function sortBooksByPrice() {
    books.sort((a, b) => a.price - b.price);
    alert("Danh sách sách đã được sắp xếp theo giá tăng dần!");
    displayBooks();
}

// Menu quản lý thư viện
function libraryMenu() {
    let option;
    do {
        option = prompt(
            "Quản lý Thư Viện:\n" +
            "1. Hiển thị danh sách sách\n" +
            "2. Thêm sách mới\n" +
            "3. Tìm kiếm sách theo tiêu đề\n" +
            "4. Cập nhật trạng thái mượn/trả sách\n" +
            "5. Xóa sách theo ID\n" +
            "6. Sắp xếp sách theo giá tăng dần\n" +
            "7. Thoát\n" +
            "Chọn chức năng (1-7):"
        );
        switch (option) {
            case "1":
                displayBooks();
                break;
            case "2":
                addBook();
                break;
            case "3":
                searchBookByTitle();
                break;
            case "4":
                updateBookStatus();
                break;
            case "5":
                deleteBook();
                break;
            case "6":
                sortBooksByPrice();
                break;
            case "7":
                alert("Thoát chương trình.");
                break;
            default:
                alert("Vui lòng nhập số từ 1 đến 7!");
        }
    } while (option !== "7");
}

libraryMenu();
