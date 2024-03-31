document.addEventListener('DOMContentLoaded', (event) => {
   const navBackground = document.querySelector('.hidden-nav-background'); 
   const heading = document.getElementById('landing-page-overlay');
   const h1Element = document.querySelector('#landing-page-overlay h1');
   const pElement = document.querySelector('#landing-page-overlay p');
   const btnElement = document.querySelector('#landing-page-overlay button');

   // Variables for the carousel
   const prevBtn = document.getElementById('prevBtn');
   const nextBtn = document.getElementById('nextBtn');
   const slide = document.querySelector('.carousel-slide');
   const cards = document.querySelectorAll('.card');

    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        let windowHeight = window.innerHeight;
        let alpha = Math.min(scrollPosition / windowHeight, 0.4);
        navBackground.style.background = `rgba(6, 9, 24, ${alpha})`;

        if (scrollPosition > 0) {
            navBackground.style.border = "solid rgb(6, 9, 24) 1px";
        } else {
            navBackground.style.border = "solid transparent 1px";
        }

    })

    // Mobile hamburger menu.
    const hamburger = document.getElementById('hamburger-menu');
    const line1 = document.getElementById('hamburger-line1');
    const line2 = document.getElementById('hamburger-line2');
    const line3 = document.getElementById('hamburger-line3');
    const navUL = document.querySelectorAll('.nav-left-li');
    const menuItems = document.getElementById('menu-li-container');
    const overlay = document.getElementById('menu-overlay');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menuItems.classList.toggle('active');
        overlay.classList.toggle('active');
        line1.classList.toggle('active');
        line2.classList.toggle('active');
        line3.classList.toggle('active');
        navUL.forEach(element => {
            element.classList.toggle('active');
            console.log(element);
        })
    })
    // heading animations.
    heading.classList.remove('animate-line'); // .remove does not throw an error - its failsafe.
    h1Element.classList.remove('animate-drop-down');
    pElement.classList.remove('animate-drop-down');
    btnElement.classList.remove('animate-drop-down');
    void heading.offsetWidth; // Trigger reflow and make the DOM Work For It!!
    void h1Element.offsetWidth;
    void pElement.offsetWidth;
    void btnElement.offsetWidth;
    heading.classList.add('animate-line');
    h1Element.classList.add('animate-drop-down');
    pElement.classList.add('animate-drop-down');
    btnElement.classList.add('animate-drop-down');
})