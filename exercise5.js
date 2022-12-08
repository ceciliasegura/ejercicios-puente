
let word = "biceps";

if (typeof word !== "string") {

    console.log("Input inválido: sólo se aceptan strings");
}

else {
    let lastChar = word[word.length - 1].toLowerCase();
    if ("a" === lastChar || "e" === lastChar || "i" === lastChar || "o" === lastChar || "u" === lastChar) {
        console.log(word + "s");

    }
    else {

        if (lastChar === "s") {
            if (word !== "biceps" && word !== "crisis" && word !== "tesis") {
                console.log("Esta palabra ya está en plural");
            }else{
                console.log("El plural coincide con el singular");
            }
        }
        else if (word === "sed" || word === "salud" || word === "caos" || word === "tórax") {
            console.log("Esta palabra no tiene forma plural");
        }
        else {
            console.log(word + "es");
        }
    }


}

