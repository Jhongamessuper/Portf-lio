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

//AUDIO & DISCO

const disco= document.getElementById('inicio-disco')
const audio= document.getElementById('inicio-audio')
const agulha = document.getElementById('inicio-agulha');

 audio.addEventListener('play', () => {
    disco.classList.add('rotacao');
    agulha.classList.add('inicio-agulha-tocando');
});

 audio.addEventListener('pause', () => {
    disco.classList.remove('rotacao');
    agulha.classList.remove('inicio-agulha-tocando');
});