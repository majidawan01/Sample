// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Book Now button functionality
const bookNowBtn = document.getElementById('bookNowBtn');
const primaryCtas = document.querySelectorAll('.primary-cta');

bookNowBtn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

primaryCtas.forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});

// Emergency CTA functionality
const emergencyCtas = document.querySelectorAll('.secondary-cta, .emergency-link');

emergencyCtas.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (!btn.getAttribute('href')) {
            e.preventDefault();
            document.getElementById('emergency').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show success message
    alert('Thank you! We\'ll contact you within 2 hours.');

    // Reset form
    contactForm.reset();
});

// Service card click handlers
const serviceCtas = document.querySelectorAll('.service-cta');
serviceCtas.forEach(btn => {
    btn.addEventListener('click', () => {
        const serviceTitle = btn.closest('.service-card').querySelector('.service-title').textContent;

        // Scroll to contact form
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

        // Pre-fill service selection
        setTimeout(() => {
            const serviceSelect = document.getElementById('service');
            const options = serviceSelect.options;

            for (let i = 0; i < options.length; i++) {
                if (options[i].text.includes(serviceTitle.split(' ')[0])) {
                    serviceSelect.selectedIndex = i;
                    break;
                }
            }
        }, 500);
    });
});

console.log('VoltTech Electrical Services - Website Loaded ⚡');
