let str = "CapiTalize";

let result = str.slice(0, 1).toLowerCase() + str.slice(1, str.length - 1) + str[str.length - 1].toUpperCase();

console.log(result)