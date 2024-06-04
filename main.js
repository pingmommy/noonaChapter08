const BathText = document.querySelector(".bath-text");

window.addEventListener("scroll", () => {
  const v = window.scrollY;
  console.log(v);

  if (v < 1500) {
    BathText.style.animation = "slideIn 3s ease-out forwards";
  }
});
