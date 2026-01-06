// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll selection active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when clicking link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scrollreveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
var options = {
      strings: ['Machine Learning Engineer', 'Freelancer', "AI Enthusiast"], 
      typeSpeed: 100, 
      backSpeed: 100, 
      backDelay: 1000,
      loop: true,
    };

var typed = new Typed('.multiple-text', options);

// Skills section animation
document.addEventListener('DOMContentLoaded', () => {
    const circumference = 2 * Math.PI * 45;

    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Animate Horizontal Bars
                const horizontalBars = entry.target.querySelectorAll('.progress-bar-fill');
                horizontalBars.forEach(bar => {
                    const progress = bar.parentElement.querySelector('.progress-percent').innerText.replace('%','');
                    bar.style.width = `${progress}%`;
                });

                // 2. Animate Circular Bars
                const circularBars = entry.target.querySelectorAll('.skill-circle');
                circularBars.forEach(circle => {
                    const progress = circle.getAttribute('data-progress');
                    const offset = circumference - (progress / 100) * circumference;
                    const fill = circle.querySelector('.progress-ring-fill');
                    fill.style.strokeDashoffset = offset;
                });

                observer.unobserve(entry.target);
            }
        });
    };

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observerOptions = {
            threshold: 0.2 
        };
        const observer = new IntersectionObserver(animateSkills, observerOptions);
        observer.observe(skillsSection);
    }
});