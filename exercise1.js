
let angulo1 = 72;
let angulo2 = 36;
let angulo3 = 72;

let sum = angulo1 + angulo2 + angulo3;

if (sum === 180) {
    console.log("triangle is valid")
    if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90) {

        console.log("triangle acutangulo")
    }

    if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {

        console.log("triangle obtusangulo")

    }

    if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90) {

        console.log("triangle rectangulo")
    }
} else {
    console.log("triangle is not valid")
}
