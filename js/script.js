const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("animated");
    } else {
      e.target.classList.remove("animated");
    }
  });
});

const animItems = document.querySelectorAll(".animated_item");
animItems.forEach((el) => observer.observe(el));

const actionElem = document.querySelectorAll(".about__item");
actionElem.forEach((e) => {
  window.addEventListener("scroll", () => {
    if (
      e.getBoundingClientRect().top <= window.screen.height / 2 &&
      e.getBoundingClientRect().bottom >= e.getBoundingClientRect().height
    ) {
      e.classList.add("active");
    } else if (
      e.getBoundingClientRect().top >= window.screen.height / 2 ||
      e.getBoundingClientRect().bottom <= e.getBoundingClientRect().height
    ) {
      e.classList.remove("active");
    }
  });
});

const animBackground1 = document.querySelector(".bg-wave-1");
const animBackground2 = document.querySelector(".bg-wave-2");
const animBackground3 = document.querySelector(".bg-wave-3");
window.addEventListener("scroll", () => {
  gsap.to(".bg-wave-1", {
    x: window.scrollY / 10,
  });
  if (
    window.scrollY >
    document.documentElement.offsetHeight -
      animBackground2.offsetHeight -
      window.screen.height
  ) {
    gsap.to(".bg-wave-2", {
      x:
        -(window.scrollY / 10) +
        (document.documentElement.offsetHeight -
          animBackground2.offsetHeight -
          window.screen.height) /
          10,
    });
  }
  gsap.to(".bg-wave-3", {
    x: window.scrollY / 8,
  });
});

const consultaionBtn = document.querySelectorAll("button.button");
const closeConsultaionBtn = document.querySelectorAll(".close-contact-window");
const contactWindow = document.querySelector(".contact-window");

function enableScroll() {
  window.onscroll = function () {};
}

consultaionBtn.forEach((e) => {
  e.onclick = function () {
    contactWindow.classList.remove("none");
  };
});
closeConsultaionBtn.forEach((e) => {
  e.onclick = function () {
    contactWindow.classList.add("none");
  };
  document.onkeydown = function (e) {
    e = e || window.event;
    if (e.key === "Escape") {
      contactWindow.classList.add("none");
    }
  };
});

//FROM

jQuery(document).ready(function () {
  jQuery("form .contact-window__btn").click(function () {
    var form = jQuery(this).closest("form");

    if (form.valid()) {
      // form.css("opacity", ".5");
      var actUrl = form.attr("action");

      jQuery.ajax({
        url: actUrl,
        type: "post",
        dataType: "html",
        data: form.serialize(),
        success: function (data) {
          form.html(data);
          // form.css("opacity", "1");
          form.find(".status").html("форма отправлена успешно");
          //$('#myModal').modal('show') // для бутстрапа
        },
        error: function () {
          form.find(".status").html("серверная ошибка");
        },
      });
    }
  });
});
