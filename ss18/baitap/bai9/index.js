let hour = parseInt(prompt("Nhập giờ (0-23):"));
let minute = parseInt(prompt("Nhập phút (0-59):"));
let second = parseInt(prompt("Nhập giây (0-59):"));

if (
    hour >= 0 && hour <= 23 &&
    minute >= 0 && minute <= 59 &&
    second >= 0 && second <= 59
) {
    let period;
    let displayHour;

    switch (true) {
        case hour === 0:
            if (hour === 0) {
                displayHour = 12;
                period = "AM";
            }
            break;
        case hour > 0 && hour < 12:
            if (hour > 0 && hour < 12) {
                displayHour = hour;
                period = "AM";
            }
            break;
        case hour === 12:
            if (hour === 12) {
                displayHour = 12;
                period = "PM";
            }
            break;
        default:
            if (hour > 12 && hour <= 23) {
                displayHour = hour - 12;
                period = "PM";
            }
            break;
    }

    alert(`Thời gian: ${displayHour}:${minute}:${second} ${period}`);
} else {
    alert("Giá trị nhập không hợp lệ. Vui lòng nhập lại!");
}
