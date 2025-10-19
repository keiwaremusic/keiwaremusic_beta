// menu.js

const menus = {
  principal: `
    <div class="logo2"><img src="img/logo_keiwaremusic_66.png" alt="Keiware Music" height="50px"></div>
    <div class="menu-toggle" id="menuToggle">☰</div>
    <nav class="nav-menu" id="navMenu">
      <a href="index.html">Inicio</a>
      <a href="#presentacion">Presentación</a>
      <a href="#singersteam">SingersTeam</a>
      <a href="#muestras">Muestras</a>
      <a href="#planes">Planes</a>
      <a href="#faq">FAQ</a>
      <a href="#contacto">Contacto</a>
    </nav>
  `,
  artistas: `
    <div class="logo2"><img src="img/logo_keiwaremusic_66.png" alt="Keiware Music" height="50px"></div>
    <div class="menu-toggle" id="menuToggle">☰</div>
    <nav class="nav-menu" id="navMenu">
      <a href="index.html">← Volver</a>
      <a href="#singersteam">Catálogo de artistas</a>
      <a href="#muestras">Demos</a>
      <a href="#planes">Planes Premium</a>
    </nav>
  `,
  demos: `
    <div class="logo2"><img src="img/logo_keiwaremusic_66.png" alt="Keiware Music" height="50px"></div>
    <div class="menu-toggle" id="menuToggle">☰</div>
    <nav class="nav-menu" id="navMenu">
      <a href="index.html">← Volver</a>
      <a href="#muestras">Muestras destacadas</a>
      <a href="#planes">Planes disponibles</a>
      <a href="#contacto">Contacto</a>
    </nav>
  `
};

function insertarMenuUniversal() {
  const ruta = window.location.pathname.toLowerCase();
  const archivo = ruta.split("/").pop();
  let tipo = "principal";

  if (archivo.includes("singersteam")) tipo = "artistas";
  else if (archivo.includes("demos")) tipo = "demos";

  const htmlMenu = `<header class="navbar menu-fijo">${menus[tipo]}</header>`;
  const contenedor = document.getElementById("menu-container");

  if (contenedor) {
    contenedor.outerHTML = htmlMenu;
  } else {
    document.body.insertAdjacentHTML("afterbegin", htmlMenu);
  }

  // Activar hamburguesa
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navMenu");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  console.log(`✅ Menú "${tipo}" insertado y funcional.`);
}

document.addEventListener("DOMContentLoaded", insertarMenuUniversal);