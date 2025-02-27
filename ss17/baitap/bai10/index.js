let n = Number(prompt("Hãy nhập 1 số kiểm tra: "));
let sqrt = Math.sqrt(n);
let result = Number.isInteger(sqrt) ? `${n} là số chính phương` : `${n} không phải số chính phương`;
document.write(result);