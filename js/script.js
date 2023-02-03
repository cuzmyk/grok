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
const animBackground1 = document.querySelector(".bg-wave-1");
const animBackground2 = document.querySelector(".bg-wave-2");
const animBackground3 = document.querySelector(".bg-wave-3");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);

  function animOnScroll() {
    console.log(window.scrollY);

    if (window.scrollY >= 400 && window.scrollY <= 2200) {
      animBackground1.style.backgroundPosition = `top 0 right ${
        50 - (window.scrollY - 400) / 4
      }px`;
    }
    if (window.scrollY >= 2000) {
      animBackground2.style.backgroundPosition = `top 0 right ${
        -(window.scrollY - 2000) / 4
      }px`;
    }
    if (window.scrollY >= 800 && window.scrollY <= 2600) {
      animBackground3.style.backgroundPosition = `top 0 right ${
        -50 + (window.scrollY - 800) / 8
      }px`;
    }

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
