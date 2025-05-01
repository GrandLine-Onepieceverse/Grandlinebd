// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const navLinks = document.getElementById('navLinks');
    
    if (openMenu && closeMenu && navLinks) {
        openMenu.addEventListener('click', () => {
            navLinks.classList.add('active');
        });
        
        closeMenu.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
        
        // Close menu when clicking on a link
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Characters Slider
    const charactersSlider = document.getElementById('charactersSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (charactersSlider && prevBtn && nextBtn) {
        const slideWidth = 270; // Width of character card + gap
        
        nextBtn.addEventListener('click', () => {
            charactersSlider.scrollLeft += slideWidth;
        });
        
        prevBtn.addEventListener('click', () => {
            charactersSlider.scrollLeft -= slideWidth;
        });
    }
    
    // Form Submissions
    const joinForm = document.getElementById('joinForm');
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (joinForm) {
        joinForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleFormSubmit);
    }
    
    function handleFormSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.target);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        const formId = e.target.id;
        let message = '';
        
        if (formId === 'joinForm') {
            message = 'Thank you for joining our crew! We will contact you soon.';
        } else if (formId === 'contactForm') {
            message = 'Thank you for your message! We will get back to you soon.';
        } else if (formId === 'newsletterForm') {
            message = 'Thank you for subscribing to our newsletter!';
        }
        
        // Create and show alert
        showAlert(message, 'success');
        
        // Reset form
        e.target.reset();
    }
    
    // Alert function
    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert ${type}`;
        alertDiv.textContent = message;
        
        document.body.appendChild(alertDiv);
        
        // Style the alert
        Object.assign(alertDiv.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '5px',
            zIndex: '1000',
            maxWidth: '300px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            opacity: '0',
            transform: 'translateY(20px)'
        });
        
        if (type === 'success') {
            Object.assign(alertDiv.style, {
                background: '#4CAF50',
                color: 'white'
            });
        } else if (type === 'error') {
            Object.assign(alertDiv.style, {
                background: '#F44336',
                color: 'white'
            });
        }
        
        // Animate in
        setTimeout(() => {
            alertDiv.style.opacity = '1';
            alertDiv.style.transform = 'translateY(0)';
        }, 10);
        
        // Remove after 5 seconds
        setTimeout(() => {
            alertDiv.style.opacity = '0';
            alertDiv.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                document.body.removeChild(alertDiv);
            }, 300);
        }, 5000);
    }
    
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-content, .events-container, .gallery-container, .characters, .join-content, .contact-container, .marine-ranks, .marine-leaders, .marine-bases, .pirate-crews, .pirate-types, .hierarchy, .cp-agents, .celestial-info');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    const elementsToAnimate = document.querySelectorAll('.about-content, .events-container, .gallery-container, .characters, .join-content, .contact-container, .marine-ranks, .marine-leaders, .marine-bases, .pirate-crews, .pirate-types, .hierarchy, .cp-agents, .celestial-info');
    
    elementsToAnimate.forEach(element => {
        Object.assign(element.style, {
            opacity: '0',
            transform: 'translateY(50px)',
            transition: 'all 1s ease'
        });
    });
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load
    animateOnScroll();
});