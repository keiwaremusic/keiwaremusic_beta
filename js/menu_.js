// menu.js
const menuPrincipal = `
<header class="navbar">
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
</header>
`;

const menuArtistas = `
  <div class="logo2">
    <img src="img/logo_keiwaremusic_66.png" alt="Keiware Music" height="50px">
  </div>
  <div class="menu-toggle" id="menuToggle">☰</div>
  <nav class="nav-menu" id="navMenu">
    <a href="index.html">Página principal</a>
    <a href="#presentacion">Presentación</a>
    <a href="#singersteam">SingersTeam</a>
    <a href="#muestras">Muestras</a>
    <a href="#planes">Planes</a>
    <a href="#faq">Preguntas frecuentes</a>
    <a href="#contacto">Contacto</a>
  </nav>
`;

const menuDemos = `
<header class="navbar">
  <div class="logo2">
    <img src="img/logo_keiwaremusic_66.png" alt="Keiware Music" height="50px">
  </div>
  <div class="menu-toggle" id="menuToggle">☰</div>
  <nav class="nav-menu" id="navMenu">
    <a href="index.html">Página principal</a>
    <a href="#presentacion">Presentación</a>
    <a href="#singersteam">SingersTeam</a>
    <a href="#muestras">Muestras</a>
    <a href="#planes">Planes</a>
    <a href="#faq">Preguntas frecuentes</a>
    <a href="#contacto">Contacto</a>
  </nav>
</header>
`;

document.addEventListener("DOMContentLoaded", () => {
  const ruta = window.location.pathname.toLowerCase();
  let menuElegido = menuPrincipal;

  if (ruta.includes("singersteam")) {
    menuElegido = menuArtistas;
  } else if (ruta.includes("demos")) {
    menuElegido = menuDemos;
  }

  const contenedor = document.getElementById("menu-container");
  if (contenedor) {
    contenedor.innerHTML = menuElegido;
  } else {
    console.warn("No se encontró el contenedor #menu-container");
  }
});
