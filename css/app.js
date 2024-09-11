


const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0)
});


const control = document.querySelector('#controll');

var slider = tns({
    container: '.slider-card',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    loop: true,

    autoplayResetOnVisibility: false,
    autoplayButtonOutput: false,
    autoplay: true,
    nav: false,
    mouseDrag: true,

    controlsContainer: control,
    prevButton: '.left',
    nextButton: '.right',

});


const nav = document.querySelector('.nav');
const menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('nav-open');
});

