/* ===== HAMBURGER MENU TOGGLE ===== */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navbarMenu.classList.toggle('active');
        });
    }

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.navbar')) {
            hamburger.classList.remove('active');
            navbarMenu.classList.remove('active');
        }
    });

    /* ===== TYPING EFFECT ===== */
    const texts = [
        " Artificial Intelligence",
        " Technical Support",
        " Content Creation",
        " DevOps Engineering",
        " Cloud Technologies",
        " Linux Engineering",
        " Mountain Trekking",
        " Freelancing"
    ];
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    const typingSpan = document.getElementById("typing");

    function typeEffect() {
        if (!typingSpan) return;
        
        currentText = texts[index];
        if (isDeleting) {
            typingSpan.textContent = currentText.substring(0, charIndex--);
        } else {
            typingSpan.textContent = currentText.substring(0, charIndex++);
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            // pause before deleting
            setTimeout(() => (isDeleting = true), 1000);
        } else if (isDeleting && charIndex === 0) {
            // move to next word
            isDeleting = false;
            index = (index + 1) % texts.length;
        }
        
        const speed = isDeleting ? 50 : 100; // speed of typing/deleting
        setTimeout(typeEffect, speed);
    }
    
    typeEffect();
});

/* ===== CONTACT FORM HANDLING ===== */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    const submitBtn = form.querySelector("button[type='submit']");

    // Client-side validation
    function validateForm() {
        const name = form.querySelector("input[name='name']").value.trim();
        const email = form.querySelector("input[name='email']").value.trim();
        const message = form.querySelector("textarea[name='message']").value.trim();

        if (!name) {
            alert("⚠️ Please enter your name.");
            return false;
        }

        // Simple email regex validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("⚠️ Please enter a valid email address.");
            return false;
        }

        if (message.length < 10) {
            alert("⚠️ Your message must be at least 10 characters long.");
            return false;
        }

        return true;
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Validate before submission
        if (!validateForm()) {
            return;
        }

        // Show loading state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                alert("✅ Thank you! Your message has been sent successfully.");
                form.reset();
            } else {
                alert("❌ Oops! There was an error sending your message. Please try again.");
            }
        } catch (error) {
            alert("❌ Network error. Please check your connection and try again.");
        } finally {
            // Restore button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
});

/* ===== NAVIGATION SCROLL ACTIVE STATE ===== */
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    function updateActiveLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call
});

/* ===== SCROLL REVEAL ANIMATION ===== */
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.skill-card, .project-card, .home-img, .home-content');
    
    // Add initial opacity 0 for JS-enabled reveal
    const style = document.createElement('style');
    style.innerHTML = `
        .reveal-hidden {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
        }
        .reveal-visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    revealElements.forEach(el => el.classList.add('reveal-hidden'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                entry.target.classList.remove('reveal-hidden');
                observer.unobserve(entry.target); // layout rarely changes, valid to unobserve
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
});
