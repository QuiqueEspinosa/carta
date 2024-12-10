// Leer mensaje personalizado desde la URL
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

// Obtener botones
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');

  // Abrir el sobre
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    // Sacar la carta (simula un modal que aparece)
    paperElement.classList.remove('close-paper', 'hidden');
    paperElement.classList.add('open-paper', 'visible');

    // Animar corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';

    setTimeout(() => {
      heartElement.style.display = 'none'; // Corazón desaparece
    }, 1000);
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');

  // Guardar la carta
  paperElement.classList.remove('open-paper', 'visible');
  paperElement.classList.add('close-paper', 'hidden');

  setTimeout(() => {
    // Cerrar el sobre
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');
  }, 500);
});
