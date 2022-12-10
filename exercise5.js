
let word = "crisis";
let lastChar = word[word.length - 1];

if (typeof word !== "string") {

    console.log("Input inválido: sólo se aceptan strings");
}

else if (word[lastChar] === "a" || lastChar === "e" || lastChar === "i" || lastChar === "o" || lastChar === "u") {
    console.log(word + "s");

}
else if (lastChar === "s" && (word !== "biceps" && word !== "crisis" && word !== "tesis")) {

    console.log("Esta palabra ya está en plural");
}

else if ((lastChar === "s" && (word === "crisis" || word === "tesis")) || word === "torax") {
    console.log("El plural coincide con el singular");
}

else if (word === "sed" || word === "salud" || word === "caos") {
    console.log("Esta palabra no tiene forma plural");
}

else {
    console.log(word + "es");
}








