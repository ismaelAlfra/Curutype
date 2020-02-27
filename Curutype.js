let container2 = document.querySelector("#container2");
let container3 = document.querySelector("#container3");
let check1 = document.querySelector("#check1");
let check2 = document.querySelector("#check2");
let check3 = document.querySelector("#check3");
let check4 = document.querySelector("#check4");
let check5 = document.querySelector("#check5");
let check6 = document.querySelector("#check6");
let input = document.querySelector("#txt");

function mudarCor() {
    if (check1.addEventListener("click", function() {
            container2.classList.add("colorB")
            container2.classList.remove("colorA")
            console.log("apertou");

        })) {

    }
    if (check2.addEventListener("click", function() {
            container2.classList.add("colorA")
            container2.classList.remove("colorB")
            console.log("apertou");

        })) {

    }
    if (check3.addEventListener("click", function() {
            container3.classList.add("colorB")
            container3.classList.remove("colorA")
            console.log("apertou");

        })) {

    }
    if (check4.addEventListener("click", function() {
            container3.classList.add("colorA")
            container3.classList.remove("colorB")
            console.log("apertou");

        })) {

    }
    if (check5.addEventListener("click", function() {
            input.style.backgroundColor = "";
            input.style.color = "#e45900ff";
            console.log("apertou");

        })) {

    }
    if (check6.addEventListener("click", function() {
            input.style.backgroundColor = "#e45900ff";
            input.style.color = "black";
            console.log("apertou");

        })) {

    }
}
mudarCor();