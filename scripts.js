document.addEventListener("scroll", function() {
    const parallax = document.querySelector('.parallax');
    const scrolled = window.scrollY;
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
});
