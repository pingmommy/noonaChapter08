const BathText = document.querySelector(".bath-text");

window.addEventListener("scroll", () => {
  const v = window.scrollY;
  console.log(v);

  if (v < 1600) {
    BathText.style.animation = "slideIn 3.5s ease-out forwards";
  }
});
