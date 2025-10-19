    const overlay = document.getElementById("overlay");
    const botonAbrir = document.getElementById("abrirModal");

    // Abrir modal
    botonAbrir.addEventListener("click", () => {
      overlay.classList.add("activo");
      document.body.style.overflow = "hidden"; // Bloquea scroll
      // Opcional: enfocar primer botón del modal para accesibilidad
      document.querySelector("#modal .boton-modal")?.focus();
    });

    // Cerrar modal
    function cerrarModal() {
      overlay.classList.remove("activo");
      document.body.style.overflow = ""; // Restaura scroll
      botonAbrir.focus(); // Devuelve el foco al botón
    }

    // Cerrar al hacer clic fuera
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        cerrarModal();
      }
    });

    // Cerrar con tecla ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("activo")) {
        cerrarModal();
      }
    });

/* WWWWWWWWWWWWWWWWWWWW ESTILOS MUSICALES WWWWWWWWWWWWWWWWWWWW */
/*Muestra error en singersteam.html y cualquiera que no tenga el botón de mostrar estilos
 musciales*/
const overlayestilos = document.getElementById("overlay-estilos");
const botonAbrirEstilos = document.getElementById("abrirModalEstilos");

// Abrir modal
botonAbrirEstilos.addEventListener("click", () => {
  overlayestilos.classList.add("activo");
  document.body.style.overflow = "hidden"; // Bloquea scroll
  // Opcional: enfocar primer botón del modal para accesibilidad
  document.querySelector("#modal-estilos .boton-modal-estilos")?.focus();
});

// Cerrar modal
function cerrarModalEstilos() {
  overlayestilos.classList.remove("activo");
  document.body.style.overflow = ""; // Restaura scroll
  botonAbrirEstilos.focus(); // Devuelve el foco al botón
}

// Cerrar al hacer clic fuera
overlayestilos.addEventListener("click", (e) => {
  if (e.target === overlayestilos) {
    cerrarModalEstilos();
  }
});

// Cerrar con tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlayestilos.classList.contains("activo")) {
    cerrarModalEstilos();
  }
});