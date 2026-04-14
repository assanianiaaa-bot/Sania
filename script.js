// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        alert('Mohon isi semua field!');
        return;
    }

    // Simulate form submission
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Terima kasih! Pesan Anda telah dikirim. Kami akan menghubungi Anda segera.');
    
    // Reset form
    contactForm.reset();
});

// Intersection Observer untuk animasi on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Scroll animation untuk skill progress bars
const skillBars = document.querySelectorAll('.skill-progress');
let hasAnimated = false;

const skillsSection = document.getElementById('skills');

window.addEventListener('scroll', () => {
    if (skillsSection) {
        const sectionPosition = skillsSection.offsetTop;
        const screenPosition = window.innerHeight / 2;

        if (!hasAnimated && window.pageYOffset + screenPosition > sectionPosition) {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.animation = 'fillBar 1.5s ease forwards';
                    bar.style.width = width;
                }, 100);
            });
            hasAnimated = true;
        }
    }
});

// Responsive hamburger animation
hamburger.addEventListener('click', function() {
    const spans = hamburger.querySelectorAll('span');
    
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Dark mode toggle (optional feature)
function initDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        background: var(--primary-brown);
        color: var(--cream);
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(139, 111, 71, 0.3);
        z-index: 999;
        transition: all 0.3s ease;
    `;

    darkModeToggle.addEventListener('mouseover', () => {
        darkModeToggle.style.transform = 'scale(1.1)';
    });

    darkModeToggle.addEventListener('mouseout', () => {
        darkModeToggle.style.transform = 'scale(1)';
    });

    // Uncomment to enable dark mode feature
    // document.body.appendChild(darkModeToggle);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // initDarkMode();
    console.log('Portfolio website loaded successfully!');
});