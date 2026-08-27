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
});

const form = document.getElementById('form');
const submitBtn = form.querySelector('input[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "bbc1a4d8-9697-45cb-8b6a-44151d0339e5");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Back to top display when window is scrolled 
window.addEventListener('scroll', ()=>{
    const top = document.querySelector('.top_btn');
    if (window.scrollY > 50) {
        top.style.display = 'block'
    } else {
        top.style.display = 'none'
    }    
});

// Gallery display 
const image = document.querySelector('.gallery_image');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup_image');
const close = document.querySelector('.close');

document.addEventListener('click' , function(event){
    if (event.target.classList.contains('gallery_image')) {
        const src = event.target.src;
        const img = document.createElement('img');
        img.src = src;
        popup.style.display = 'block';
        popupContent.appendChild(img);
        popup.style.display = 'block';
    }
});
close.addEventListener('click', function(){
    const img = popupContent.querySelector('img');
    popup.style.display = 'none';
    if (img) {
        popupContent.removeChild(img);
    }
})
popup.addEventListener('click', function(){
    const img = popupContent.querySelector('img');
    popup.style.display = 'none';
    if (img) {
        popupContent.removeChild(img);
    }
});
