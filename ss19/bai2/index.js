let char = prompt("Nhập một ký tự:");

if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
    console.log(`Ký tự ${char} là chữ cái`);
} else {
    console.log("Không phải chữ cái");
}