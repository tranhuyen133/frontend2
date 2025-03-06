for (let i = 1; i <= 10; i++) {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);

    console.log(`%cMàu số ${i}: ${color}`, `color: ${color}; font-weight: bold;`);
}
