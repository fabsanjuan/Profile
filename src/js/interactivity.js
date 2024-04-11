document.addEventListener('DOMContentLoaded', (event) => {
   const navBackground = document.querySelector('.hidden-background'); 
   const heading = document.getElementById('landing-page-overlay');
   const h1Element = document.querySelector('#landing-page-overlay h1');
   const pElement = document.querySelector('#landing-page-overlay p');
   const btnElement = document.querySelector('#landing-page-overlay button');
   const workExp = document.getElementById('work-experience')

   // Variables for the carousel
   const prevBtn = document.getElementById('prevBtn');
   const nextBtn = document.getElementById('nextBtn');
   const slide = document.querySelector('#work-experience .carousel-slide');
   const cards = document.querySelectorAll('#work-experience .card');
   let windowWidth = window.innerWidth;
   let carouselCounter = 0;
   let totalSwipes = 0;
   const carouselSize = cards[0].clientWidth + 16; // Card width + margin-right.

   // size of window determines increments of carousel counter.
   nextBtn.addEventListener('click', () => {
    if (totalSwipes >= cards.length - 1) {
        return;
    } 
    slide.style.transition = "transform  0.5s ease-in-out";
    carouselCounter++;
    slide.style.transform = "translateX(" + (-carouselSize * carouselCounter) + "px)";
    console.log(-carouselSize * carouselCounter);
    console.log(totalSwipes);
    if (windowWidth >= 1275) { 
        totalSwipes += 2;
    } else if (windowWidth >= 960) {
        totalSwipes += 1.5;
    } else {
        totalSwipes++;
    }
   })

   prevBtn.addEventListener('click', () => {
    if (totalSwipes <= 0) return;
    slide.style.transition = 'transform 0.5s ease-in-out';
    carouselCounter--;
    slide.style.transform = 'translateX(' + (-carouselSize * carouselCounter) + 'px)';
    if (windowWidth >= 1275) { 
        totalSwipes += -2;
    } else if (windowWidth >= 960) {
        totalSwipes += -1.5;
    } else {
        totalSwipes--;
    }
   })

   // Infinite loop carousel
   const slide2 = document.querySelector('#learning-certs .carousel-slide');
   const certs = document.querySelectorAll('#learning-certs .card')
   let moving = false;
   let animating = true;
   let positionX = 0;
   const moveSpeed = 1;
   
   function moveSlide() {
    if (!animating || moving) return;
    positionX += -moveSpeed; // Move slide to the left
    slide.style.transition = 'transform 0s linear';
    slide2.style.transform = `translateX(${positionX}px)`;
    }

    function resetSlideIfNeeded() {
        const firstCard = slide2.firstElementChild;
        const firstCardWidth = firstCard.offsetWidth;
        if (Math.abs(positionX) >= firstCardWidth + 100) {
            moving = true;
            slide2.appendChild(firstCard); // Move the first card to the end
            positionX += firstCardWidth; // Adjust position
            slide2.style.transition = 'none';
            slide2.style.transform = `translateX(${positionX}px)`;
            requestAnimationFrame(() => {
                slide.style.transition = 'transform 0.5s linear';
            })
            moving = false;
        }
    }

    function animate() {
        moveSlide();
        resetSlideIfNeeded();
        requestAnimationFrame(animate);
    }

    // Add mouseover and mouseleave event listeners to control animation
    slide2.addEventListener('mouseover', () => animating = false);
    slide2.addEventListener('mouseleave', () => animating = true);

    // Start the animation
    requestAnimationFrame(animate);


    // Scroll navbar menu background.
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
    const navLinks = document.querySelectorAll('.nav-left-li .nav-links')
    const menuItems = document.getElementById('menu-li-container');
    const overlay = document.getElementById('menu-overlay');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        menuItems.classList.toggle('active');
        overlay.classList.toggle('active');
        line1.classList.toggle('active');
        line2.classList.toggle('active');
        line3.classList.toggle('active');
        navUL.forEach(element => {
            element.classList.toggle('active');
        })
    }
    hamburger.addEventListener('click', toggleMenu);
    navLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
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

    btnElement.addEventListener('click', function() {
        workExp.scrollIntoView({
            behavior: 'smooth'
        })
    } )
})