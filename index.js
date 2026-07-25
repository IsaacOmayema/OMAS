const home = document.querySelector('#home');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const gallery = document.querySelector('#gallery');
const body = document.querySelector('body');

home.addEventListener('click', () => {
    body.classList.add('active');
    document.querySelector('.home').classList.add('active');
    document.querySelector('.about').classList.remove('active');
    document.querySelector('.contact').classList.remove('active');
    document.querySelector('.gallery').classList.remove('active');
});
about.addEventListener('click', () => {
    body.classList.add('active');
    document.querySelector('.home').classList.remove('active');
    document.querySelector('.about').classList.add('active');
    document.querySelector('.contact').classList.remove('active');
    document.querySelector('.gallery').classList.remove('active');
});
contact.addEventListener('click', () => {
    body.classList.add('active');
    document.querySelector('.home').classList.remove('active');
    document.querySelector('.about').classList.remove('active');
    document.querySelector('.contact').classList.add('active');
    document.querySelector('.gallery').classList.remove('active');
});
gallery.addEventListener('click', () => {
    body.classList.add('active');
    document.querySelector('.home').classList.remove('active');
    document.querySelector('.about').classList.remove('active');
    document.querySelector('.contact').classList.remove('active');
    document.querySelector('.gallery').classList.add('active');
});


