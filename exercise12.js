let cookies = 25;
let days = 1;

while (cookies > 0) {
    cookies = cookies - 3

    if ( days % 2 === 0) {
        cookies = cookies + 1
    }

    days ++;
}

console.log(days);

