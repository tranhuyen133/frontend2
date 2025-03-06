let n = 8; 

console.log("Hình a:");
for (let i = n; i > 0; i--) {
    console.log("*".repeat(i));
}

console.log("\nHình b:");
for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
}

console.log("\nHình c:");
for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
}

console.log("\nHình d:");
for (let i = n; i > 0; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
}



