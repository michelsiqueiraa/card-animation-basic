const console = document.getElementById("console");
const controle = document.getElementById("controle");

const arrowRight = document.getElementById("right");
const arrowLeft = document.getElementById("left");

arrowLeft.addEventListener("click", () => {
  console.style.left = "-650px";
  controle.style.left = "75px";
});
arrowRight.addEventListener("click", () => {
  console.style.left = "-50px";
  controle.style.left = "-650px";
});
