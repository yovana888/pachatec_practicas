const btnRed = document.getElementById("btn-red");
const btnGreen = document.getElementById("btn-green");
const divRed = document.getElementById("div_red");
const divGreen = document.getElementById("div_green");

btnRed.addEventListener("click", () => {
    divRed.style.display = "block";
    divGreen.style.display = "none";
});

btnGreen.addEventListener("click", () => {
    divRed.style.display = "none";
    divGreen.style.display = "block";
});