var color1 = document.querySelector(".rang1");
var color2 = document.querySelector(".rang2");
var cssText = document.querySelector("h3");
var body = document.getElementById("gradient");
var btn = document.getElementById("rand");

function selectedColor() {

    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    console.log(body.style.background);
    cssText.textContent = body.style.background;

}

function generateRandom() {
    var one = Math.random() * 150;
    var two = Math.random() * 250;
    var three = two - one;

    body.style.background = "linear-gradient(to right, rgb(" + one + ", " + two + ", " + three + "),rgb(" + three + ", " + two + ", " + one + ")";
    console.log(body.style.background);
    cssText.textContent = body.style.background;
}


color1.addEventListener("input", selectedColor);
color2.addEventListener("input", selectedColor);
btn.addEventListener("click", generateRandom);
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
cssText.textContent = body.style.background;