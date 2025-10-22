const menuBtn = document.querySelector('#menu');
const menuNav = document.querySelector('#menuNav');
let menuIsOpen = false;
menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('fa-bars')) {
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-xmark');
        menuIsOpen = true;
    } else {
        menuBtn.classList.remove('fa-xmark');
        menuBtn.classList.add('fa-bars');
        menuIsOpen = false;
    }

    if (menuIsOpen == false) {
        menuNav.classList.add('hidden')
    } else {
        menuNav.classList.remove('hidden')
    }
})

const darkModeBtn = document.querySelector('#darkModeBtn');
const bola = darkModeBtn.querySelector('.bola');

darkModeBtn.addEventListener('click', () => {
    darkModeBtn.classList.toggle('bg-gray-400');
    darkModeBtn.classList.toggle('bg-yellow-400');

    if (bola.classList.contains('translate-x-6')) {
        bola.classList.remove('translate-x-6');
    } else {
        bola.classList.add('translate-x-6');
    }
});
