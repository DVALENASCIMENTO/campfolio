// script.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu a");

  // Alterna visibilidade do menu hamburguer
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    hamburger.classList.toggle("ativo");
  });

  // Rolagem suave para âncoras
  menuLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const targetId = link.getAttribute("href").slice(1);
      const section = document.getElementById(targetId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        // Fecha o menu após clique em mobile
        menu.classList.remove("ativo");
        hamburger.classList.remove("ativo");
      }
    });
  });
});
