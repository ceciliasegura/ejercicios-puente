let word = "patata";
let result = "";
if (typeof word !== "string") {
    console.log("Input inválido");
}
else {


    for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
            result += word[i].toLowerCase()
        } else {
            result += word[i].toUpperCase()
        }
    }

    console.log("resultado: " + result)
}