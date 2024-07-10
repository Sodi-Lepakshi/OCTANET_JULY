document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0 });
    gsap.from(".info", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
});
