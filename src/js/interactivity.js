document.addEventListener('DOMContentLoaded', (event) => {
    const navBackground = document.querySelector('.hidden-nav-background');
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        let windowHeight = window.innerHeight;

        let alpha = Math.min(scrollPosition / windowHeight, 0.3);
        console.log(alpha);
        navBackground.style.background = `rgba(6, 9, 24, ${alpha})`;
    })
})