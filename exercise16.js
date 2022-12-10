
let word = "millard";

let char = "r"

if ( word.includes (char)){
  for( i = 0; i < word.indexOf(char); i++){
    console.log(word[i])
  }
}
else{
    console.log("La palabra no contiene dicha letra")
}