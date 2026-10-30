const botonMenu = document.querySelector(".boton-hamburguesa");
const menuLinks = document.querySelector(".menu-links");

if (botonMenu && menuLinks) {
  botonMenu.addEventListener("click", () => {
    menuLinks.classList.toggle("abierto");

    const estaAbierto = menuLinks.classList.contains("abierto");
    botonMenu.setAttribute("aria-expanded", estaAbierto);
    botonMenu.setAttribute("aria-label", estaAbierto ? "Cerrar menú" : "Abrir menú");
    botonMenu.textContent = estaAbierto ? "✕" : "☰";
  });
}