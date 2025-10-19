document.querySelectorAll('.artist-thumb').forEach(img => {
  img.addEventListener('click', () => {
    const id = img.dataset.id;
    const artist = artists[id];
    const detail = document.getElementById('artist-detail');

    // Si ya está visible, aplicar transición de salida
    if (detail.classList.contains('visible')) {
      detail.classList.add('fading-out');

      // Esperar la duración de la transición antes de actualizar contenido
      setTimeout(() => {
        updateArtistDetail(artist);
        detail.classList.remove('fading-out');
      }, 500);
    } else {
      updateArtistDetail(artist);
    }
  });
});

function updateArtistDetail(artist) {
  document.getElementById('detail-photo').src = artist.photo;
  document.getElementById('detail-name').textContent = artist.name;
  document.getElementById('detail-bio').textContent = artist.bio;
  document.getElementById('detail-genres').textContent = artist.genres;

  const audioContainer = document.getElementById('detail-audio-container');
  audioContainer.innerHTML = '';

  artist.audio.forEach(track => {
    const label = document.createElement('p');
    label.textContent = track.title;

    const player = document.createElement('audio');
    player.controls = true;
    player.src = track.src;

    audioContainer.appendChild(label);
    audioContainer.appendChild(player);
  });

  const detail = document.getElementById('artist-detail');
  detail.classList.remove('hidden');
  detail.classList.add('visible');
  detail.scrollIntoView({ behavior: 'smooth' });
}