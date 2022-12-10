let word = "javaScript";

if (typeof word !== "string") {
    console.log("Input inválido");
}
else {

    word = word.slice(0, 8);
    console.log(word);
}