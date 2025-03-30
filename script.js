document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section-animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Add the animation class
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section); // Observe each section
    });
});
