//BOTÂO DE MENU PARA DISPOSITIVOS MÓVEIS

const toggle = document.getElementById('menu-mobile');
const lista = document.getElementById('menu-lista');
const links = lista.querySelectorAll('a');

toggle.addEventListener('click', () => {
    lista.classList.toggle('show');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        lista.classList.remove('show');
    });
});

document.addEventListener('click', (event) => {
    if (!lista.contains(event.target) && !toggle.contains(event.target)) {
        lista.classList.remove('show');
    }
});