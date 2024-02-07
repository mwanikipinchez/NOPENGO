// All animations will take exactly 1000ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-links a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.nav-links a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    // remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//Scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content', {origin: 'top'});
ScrollReveal().reveal('.home-content h3, .content, .box, .newsbox', {origin: 'left'});
ScrollReveal().reveal('.wrapper, .news_box, .about-right', {origin: 'bottom'});
