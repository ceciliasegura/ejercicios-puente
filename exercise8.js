let t = "ojo";

let r = "";
for (let i = 0; i < t.length; i++) {
    r = t[i] + r;
}

if (t === r ){
    console.log( "es palindromo: " + t);
}

else {
    console.log( " no es palindromo: " + t);
}