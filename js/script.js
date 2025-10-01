// Menú hamburguesa
document.getElementById('menuToggle').addEventListener('click', function() {
  document.getElementById('navMenu').classList.toggle('mostrar');
});

// Carrusel automático
let indiceCarrusel = 0;
const imagenes = document.querySelectorAll('.carrusel-contenedor img');
const total = imagenes.length;

function mostrarImagen(n) {
  imagenes.forEach(img => img.classList.remove('active'));
  imagenes[n].classList.add('active');
}

function siguienteImagen() {
  indiceCarrusel = (indiceCarrusel + 1) % total;
  mostrarImagen(indiceCarrusel);
}

// Iniciar carrusel automático
setInterval(siguienteImagen, 5000);
mostrarImagen(0);

function cambiarCarrusel(direccion) {
  indiceCarrusel = (indiceCarrusel + direccion + total) % total;
  mostrarImagen(indiceCarrusel);
}

// FAQ desplegable
function toggleFaq(elemento) {
  const respuesta = elemento.querySelector('.faq-respuesta');
  respuesta.classList.toggle('mostrar');
}


// Resaltar menú activo al hacer clic
document.querySelectorAll('.nav-menu a').forEach(enlace => {
  enlace.addEventListener('click', function() {
    // Quitar clase 'activo' de todos
    document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('activo'));
    // Añadir a este
    this.classList.add('activo');
    // Cerrar menú en móvil
    document.getElementById('navMenu').classList.remove('mostrar');
  });
});

// Opcional: marcar "Inicio" como activo al cargar
window.addEventListener('load', () => {
  document.querySelector('.nav-menu a[href="#inicio"]').classList.add('activo');
});


// Audios sin solapamiento
document.querySelectorAll('audio').forEach(audio => {
  audio.addEventListener('play', function() {
    document.querySelectorAll('audio').forEach(other => {
      if (other !== this) {
        other.pause();
        other.currentTime = 0;
      }
    });
  });
});









// Botón flotante: se desvanece al hacer scroll hacia abajo
let ultimaPos = window.scrollY;
const botonFlotante = document.getElementById('whatsappFlotante');

window.addEventListener('scroll', () => {
  const actualPos = window.scrollY;
  
  if (actualPos > ultimaPos && actualPos > 200) {
    // Scroll hacia abajo → ocultar
    botonFlotante.classList.add('oculto');
  } else {
    // Scroll hacia arriba o al inicio → mostrar
    botonFlotante.classList.remove('oculto');
  }
  
  ultimaPos = actualPos;
});