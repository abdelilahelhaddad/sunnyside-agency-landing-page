const navbar = document.querySelector(".navbar");
const list = document.querySelector(".list");

navbar.addEventListener("click", () => {
  list.classList.toggle("active");
});