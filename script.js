document.addEventListener("DOMContentLoaded", function() {
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav ul li a');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    const firstLink = document.querySelector('header nav ul li a[href="#hero"]');
    if (firstLink) {
        firstLink.classList.add('active');
    }

    function scrollSpy() {
        let current = 'hero'; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) { 
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }
    
    function handleScroll() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
        
        scrollSpy();
    }
    
    window.addEventListener('scroll', handleScroll);
    
    scrollToTopBtn.addEventListener('click', () => {
         window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
    
    handleScroll();
});