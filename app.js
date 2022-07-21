// alert('fix project so that grid does not control whole project,side navbar,etc')

// alert('fix width of main when on desktop')
const hamburger=document.querySelector('.hamburger');
const navbar=document.querySelector('.navbar');
const body=document.querySelector('body');
const main=document.querySelector('main');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('hamburger-click');
    navbar.classList.toggle('navbar-display');
    
  
})

main.addEventListener('click',()=>{
    if (navbar.classList.contains('navbar-display')){
        navbar.classList.remove('navbar-display')
    }
    hamburger.classList.remove('hamburger-click');

})

