document.addEventListener('DOMContentLoaded', (event) => {
   const navBackground = document.querySelector('.hidden-nav-background'); 
   const heading = document.getElementById('landing-page-overlay');
   const h1Element = document.querySelector('#landing-page-overlay h1');
   const pElement = document.querySelector('#landing-page-overlay p');
   const btnElement = document.querySelector('#landing-page-overlay button');

   // Variables for the carousel
   const prevBtn = document.getElementById('prevBtn');
   const nextBtn = document.getElementById('nextBtn');
   const slide = document.querySelector('#work-experience .carousel-slide');
   const cards = document.querySelectorAll('#work-experience .card');
   let carouselCounter = 0;
   const carouselSize = cards[0].clientWidth + 16; // Card width + margin-right.

   nextBtn.addEventListener('click', () => {
    if (carouselCounter >= 2) {
        return;
    } 
    slide.style.transition = "transform  0.5s ease-in-out";
    carouselCounter++;
    slide.style.transform = "translateX(" + (-carouselSize * carouselCounter) + "px)";
   })

   prevBtn.addEventListener('click', () => {
    if (carouselCounter <= 0) return;
    slide.style.transition = 'transform 0.5s ease-in-out';
    carouselCounter--;
    slide.style.transform = 'translateX(' + (-carouselSize * carouselCounter) + 'px)';
   })

   const slide2 = document.querySelector('#learning-certs .carousel-slide');
   const cards2 = document.querySelectorAll('#learning-certs .card');
   let isHovering = false;
   let scrollInterval;

   function cycleCards() {
    if (!isHovering) {
        const firstCard = slide2.children[0];
        const clone = firstCard.cloneNode(true);
        slide2.appendChild(clone);
        slide2.removeChild(firstCard);
    }
   }
   // Auto-scroll intervals
   function startAutoScroll() {
    scrollInterval = setInterval(cycleCards, 2000);
   }
   function stopAutoScroll() {
    clearInterval(scrollInterval);
   }

   function attachHoverEvents(card) {
    card.addEventListener('mouseover', stopAutoScroll);
    card.addEventListener('mouseleave', startAutoScroll);
   }
   cards2.forEach(attachHoverEvents);
   startAutoScroll();




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