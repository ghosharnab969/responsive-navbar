const navSlide = () => {
  const navBtn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".links");

  navBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
};
navSlide();
