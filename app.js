// alert('fix project so that grid does not control whole project,side navbar,etc')

// alert('fix width of main when on desktop')
const hamburger=document.querySelector('.hamburger');
const navbar=document.querySelector('.navbar');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('hamburger-click');
    navbar.classList.toggle('navbar-display')
})