let month = parseInt(prompt("Nhập một tháng (1-12):"));

let season;

if (month >= 1 && month <= 3) {
    season = "mùa xuân";
} else if (month >= 4 && month <= 6) {
    season = "mùa hạ";
} else if (month >= 7 && month <= 9) {
    season = "mùa thu";
} else if (month >= 10 && month <= 12) {
    season = "mùa đông";
} else {
    season = "tháng không hợp lệ";
}

console.log(season);
