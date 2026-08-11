// Sectional toggle switch 
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
// sectional toggle switch end here


//Small device navbar display 
const open = document.querySelector('.menubtn');
const closebtn = document.querySelector('#close');
closebtn.addEventListener('click' , () => {
    document.querySelector('.menubar').classList.remove('open');
});
open.addEventListener('click', ()=>{
    document.querySelector('.menubar').classList.add('open');

});

// closing navbar when other partvof the page is clicked 
const Body = document.querySelector('.body');
Body.addEventListener('click' , () => {
    if(document.querySelector('.menubar').classList.contains('open')){
        document.querySelector('.menubar').classList.remove('open')
    }
})


// Back to top display when window is scrolled 
window.addEventListener('scroll', ()=>{
    const top = document.querySelector('.top_btn');
    if (window.scrollY > 50) {
        top.style.display = 'block'
    } else {
        top.style.display = 'none'
    }
});


