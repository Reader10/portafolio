// seleciones de menu
const menu = document.querySelector("#menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// seleccion de scroll
const scrollUp = document.querySelector("#scroll-up");

// Seleccion de links de navegacion
const navLink = document.querySelectorAll(".nav-link");

// Funcion del menu
menu.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Cerrar menu cuando apretas el link
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Funcionalidad del scroll
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
