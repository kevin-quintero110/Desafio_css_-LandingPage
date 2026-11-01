/* ============================================================
   MENÚ HAMBURGUESA (móvil)
   ============================================================ */
const boton  = document.querySelector(".boton button");
const imagen = document.querySelector(".hamburger");
const nav    = document.querySelector(".nav-contact");

/* ---- Abrir / cerrar el menú ---- */
function toggleMenu() {
  const isOpen = nav.classList.toggle("is-open");

  imagen.src = isOpen
    ? "./images/icon-close.svg"
    : "./images/icon-hamburger.svg";

  boton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  boton.setAttribute("aria-expanded", isOpen);
}

/* ---- Forzar cierre del menú ---- */
function closeMenu() {
  nav.classList.remove("is-open");
  imagen.src = "./images/icon-hamburger.svg";
  boton.setAttribute("aria-label", "Abrir menú");
  boton.setAttribute("aria-expanded", "false");
}

/* ---- Clic en el botón hamburguesa ---- */
boton.addEventListener("click", (e) => {
  e.stopPropagation(); // evita que el listener de "clic fuera" lo cierre al instante
  toggleMenu();
});

/* ---- Cerrar al hacer clic en un link del menú ---- */
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

/* ---- Cerrar al hacer clic fuera del menú ---- */
document.addEventListener("click", (e) => {
  const clickedInsideMenu = nav.contains(e.target);
  const clickedHamburger  = boton.contains(e.target);

  if (!clickedInsideMenu && !clickedHamburger && nav.classList.contains("is-open")) {
    closeMenu();
  }
});

/* ---- Cerrar con la tecla Escape ---- */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("is-open")) {
    closeMenu();
  }
});

/* ---- Resetear el menú al cambiar el tamaño de pantalla ----
   Esto soluciona el problema de DevTools: si el ancho cruza
   el breakpoint de 800px, el menú se cierra solo. */
let lastWidth = window.innerWidth;

window.addEventListener("resize", () => {
  const currentWidth = window.innerWidth;
  const crossedBreakpoint =
    (lastWidth > 800 && currentWidth <= 800) ||
    (lastWidth <= 800 && currentWidth > 800);

  if (crossedBreakpoint) {
    closeMenu();
  }

  lastWidth = currentWidth;
});