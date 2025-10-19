// menu.js

const menuPrincipal = `
  <div class="logo2"><img src="img/logo_keiwaremusic_66.png" alt="Keiware Music" height="50px"></div>
  <div class="menu-toggle" id="menuToggle">☰</div>
  <nav class="nav-menu" id="navMenu">
      <a href="#inicio">Inicio</a>
      <a href="#ofrecemos">¿Qué ofrecemos?</a>
      <a href="#singersteam">SingersTeam</a>
      <a href="#muestras">Muestras</a>
      <a href="#planes">Planes</a>
      <a href="#faq">Preguntas frecuentes</a>
      <a href="#nosotros">Nosotros</a>
      <a href="#contacto">Contacto</a>
    </nav>
`;

const menuArtistas = `
  <div class="logo2"><img src="img/logo_keiwaremusic_66.png" alt="Keiware Music" height="50px"></div>
  <div class="menu-toggle" id="menuToggle">☰</div>
  <nav class="nav-menu">
    <a href="index.html">← Volver a Principal</a>
    <a href="#singersteam">Catálogo de artistas</a>
    <a href="#muestras">Demos</a>
    <a href="#planes">Planes Premium</a>
  </nav>
`;

const menuDemos = `
  <div class="logo2"><img src="img/logo_keiwaremusic_66.png" alt="Keiware Music" height="50px"></div>
  <div class="menu-toggle" id="menuToggle">☰</div>
  <nav class="nav-menu">
    <a href="index.html">← Volver</a>
    <a href="#muestras">Muestras destacadas</a>
    <a href="#planes">Planes disponibles</a>
    <a href="#contacto">Contacto</a>
  </nav>
`;

function insertarMenu() {
  const ruta = window.location.pathname.toLowerCase();
  const nombreArchivo = ruta.split("/").pop();

  let menuElegido = menuPrincipal;
  let tipoDetectado = "principal";

  if (nombreArchivo.includes("singersteam")) {
    menuElegido = menuArtistas;
    tipoDetectado = "artistas";
  } else if (nombreArchivo.includes("demos")) {
    menuElegido = menuDemos;
    tipoDetectado = "demos";
  }

  const contenedor = document.getElementById("menu-container");

  if (contenedor) {
    contenedor.innerHTML = menuElegido;

    // Activar hamburguesa después de insertar el menú
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navMenu");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
      });
    }
    console.log(`✅ Menú "${tipoDetectado}" insertado correctamente.`);
  } else {
//    console.warn(`⚠️ No se encontró el contenedor #menu-container. Se insertará el menú como fallback.`);
    const fallback = document.createElement("header");
    fallback.innerHTML = menuElegido;
    document.body.insertBefore(fallback, document.body.firstChild);
// Activar hamburguesa en fallback
    const toggle = fallback.querySelector("#menuToggle");
    const nav = fallback.querySelector("#navMenu");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
      });
    }


  }
}

// document.addEventListener("DOMContentLoaded", insertarMenu);