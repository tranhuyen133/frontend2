function convertDateFormat(dates) {
    if (!Array.isArray(dates) || dates.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let result = dates.map(date => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            return "Dữ liệu không hợp lệ";
        }

        let [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    });

    return result;
}

// Test cases
console.log(convertDateFormat(["2025-03-10", "2024-12-25", "2023-07-01"])); 
// Output: ["10/03/2025", "25/12/2024", "01/07/2023"]

console.log(convertDateFormat([])); 
// Output: "Mảng không có phần tử nào"

console.log(convertDateFormat(["abc"])); 
// Output: ["Dữ liệu không hợp lệ"]
