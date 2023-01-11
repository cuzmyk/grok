const body = document.querySelector("body");
// console.log(body);

window.addEventListener("scroll", () => {
  body.style.backgroundPosition = +window.pageYOffset + "px";
});
