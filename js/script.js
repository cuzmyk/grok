// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]');

// Цикл по всем ссылкам
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute("href")
      ? anchor.getAttribute("href")
      : "body";
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const animItems = document.querySelectorAll(".animated_item");
const animBackground = document.querySelector(".bg__img");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    // console.log(window.scrollY);
    // if (window.scrollY >= 700) {
    //   animBackground.style.transform = `translateX(${
    //     (window.scrollY - 700) / 300
    //   }%)`;
    // }

    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        window.scrollY > animItemOffset - animItemPoint &&
        window.scrollY < animItemOffset + animItemPoint
      ) {
        animItem.classList.add("animated");
      } else {
        animItem.classList.remove("animated");
      }

      animItemPoint = window.innerHeight - animItemHeight;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight;
      }

      if (
        window.scrollY > animItemOffset - animItemPoint &&
        window.scrollY < animItemOffset + animItemHeight / 8
      ) {
        animItem.classList.add("active");
      } else {
        animItem.classList.remove("active");
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
}

setTimeout(() => {
  animOnScroll();
}, 300);
