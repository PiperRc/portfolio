// alert('fix project so that grid does not control whole project,side navbar,etc')

// alert('fix width of main when on desktop')
const hamburger=document.querySelector('.hamburger');
const navbar=document.querySelector('.navbar');
const main=document.querySelector('main');
const navbarNav=document.querySelector('.navbar-nav')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('hamburger-click');
    navbar.classList.toggle('navbar-display');
    navbarNav.classList.toggle('navbar-nav-display');
  
})



main.addEventListener('click',()=>{
    if (navbar.classList.contains('navbar-display')){
        navbar.classList.remove('navbar-display')
    }
    if(navbarNav.classList.contains('navbar-nav-display')){
        navbarNav.classList.remove('navbar-nav-display');
    }
    hamburger.classList.remove('hamburger-click');
})


