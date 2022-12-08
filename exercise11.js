
let number = 5;
let divisible = false;
for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        dvisible = true;
    }
}

if (divisible || number === 0 || number === 1) {
    console.log("No es un numero primo");
} else { 
    console.log("Es un numero primo");
}
