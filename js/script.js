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

// Carousel timing control (ms)
const SLIDE_DURATION = 7000; // cambiado a 7 segundos
let slideStart = null; // timestamp when current slide started
let slideTimer = null; // main timeout for slide change
let tickInterval = null; // interval for updating progress (every 100ms)
let isPaused = false; // estado de reproducción (autoplay)

function siguienteImagen() {
  indiceCarrusel = (indiceCarrusel + 1) % total;
  mostrarImagen(indiceCarrusel);
  iniciarTemporizador();
}

function iniciarTemporizador() {
  // Clear previous timers
  if (slideTimer) clearTimeout(slideTimer);
  if (tickInterval) clearInterval(tickInterval);

  slideStart = performance.now();
  // Main slide change (solo si no está pausado)
  if (!isPaused) {
    slideTimer = setTimeout(() => {
      indiceCarrusel = (indiceCarrusel + 1) % total;
      mostrarImagen(indiceCarrusel);
      iniciarTemporizador();
    }, SLIDE_DURATION);
  }

  // Tick for progress UI
  const fill = document.getElementById('progresoFill');
  tickInterval = setInterval(() => {
    const elapsed = performance.now() - slideStart;
    const pct = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
    if (fill) fill.style.width = pct + '%';
  }, 100);
}

// Manual navigation resets timer
function cambiarCarrusel(direccion) {
  indiceCarrusel = (indiceCarrusel + direccion + total) % total;
  mostrarImagen(indiceCarrusel);
  iniciarTemporizador();
}

// Inicia el carrusel
mostrarImagen(0);
iniciarTemporizador();

// PAUSA / REANUDA al hacer hover
const carruselElemento = document.querySelector('.carrusel');
if (carruselElemento) {
  carruselElemento.addEventListener('mouseenter', () => {
    // pausar sin cambiar el estado de 'isPaused' (autoplay toggle)
    if (tickInterval) clearInterval(tickInterval);
    if (slideTimer) clearTimeout(slideTimer);
    // mantener fill en su estado actual
  });
  carruselElemento.addEventListener('mouseleave', () => {
    // reanudar sólo si autoplay no está desactivado
    if (!isPaused) iniciarTemporizador();
  });
}

// Play/pause button removed — autoplay remains controlled only by hover and isPaused flag

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