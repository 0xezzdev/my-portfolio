/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

// تفعيل الحركات للكل
sr.reveal('.nav__logo, .nav__item', { interval: 100 });
sr.reveal('.home__data, .home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.section-title', {});
sr.reveal('.about__img, .about__text', { delay: 400 });
sr.reveal('.education__data, .skills__data', { interval: 200 });
sr.reveal('.work__card', { interval: 200 });
sr.reveal('.contact__info, .contact__form', { interval: 200 });