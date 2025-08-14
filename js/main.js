// Main JavaScript file for Kaylie Labs

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-wrapper')) {
            navMenu?.classList.remove('mobile-active');
            mobileMenuToggle?.classList.remove('active');
        }
    });

    // Redirect all "View Details" buttons to coming soon page
    const viewDetailsButtons = document.querySelectorAll('.product-card .btn-primary');
    viewDetailsButtons.forEach(button => {
        if (button.textContent.includes('View Details')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'coming-soon.html';
            });
        }
    });

    // Redirect Sign In button to coming soon
    const signInButtons = document.querySelectorAll('.btn-primary');
    signInButtons.forEach(button => {
        if (button.textContent === 'Sign In') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'coming-soon.html';
            });
        }
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            alert('Thank you for your message! We\'ll get back to you within 24 hours.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Handle newsletter forms
    const newsletterForms = document.querySelectorAll('.newsletter-form, .newsletter-inline-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Show success message
            alert(`Thank you for subscribing! We've added ${email} to our newsletter list.`);
            
            // Reset form
            form.reset();
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Product filters (if on products page)
    const filterCheckboxes = document.querySelectorAll('.filter-item input[type="checkbox"]');
    const filterRadios = document.querySelectorAll('.filter-item input[type="radio"]');
    
    if (filterCheckboxes.length > 0 || filterRadios.length > 0) {
        const updateProductDisplay = () => {
            // This is a placeholder for actual filter functionality
            console.log('Filters updated - implement actual filtering logic here');
        };

        filterCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateProductDisplay);
        });

        filterRadios.forEach(radio => {
            radio.addEventListener('change', updateProductDisplay);
        });
    }

    // Sort dropdown
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            // Placeholder for sort functionality
            console.log('Sort by:', this.value);
        });
    }

    // Pagination
    const paginationButtons = document.querySelectorAll('.pagination-btn:not(:disabled), .pagination-number');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all
            document.querySelectorAll('.pagination-number').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button if it's a number
            if (this.classList.contains('pagination-number')) {
                this.classList.add('active');
            }
            
            // Placeholder for actual pagination
            console.log('Navigate to page:', this.textContent);
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards and product cards
    document.querySelectorAll('.feature-card, .product-card, .testimonial-card, .value-card').forEach(el => {
        observer.observe(el);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .product-card, .testimonial-card, .value-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav-menu.mobile-active {
            display: flex !important;
            position: fixed;
            top: 70px;
            right: 20px;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow-xl);
            border-radius: var(--radius-lg);
            z-index: 1000;
            gap: 1rem;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }
            
            .mobile-menu-toggle {
                display: flex !important;
            }
        }
    `;
    document.head.appendChild(style);
});

// Console Easter Egg
console.log('%c Welcome to Kaylie Labs! 🚀', 'color: #6366F1; font-size: 20px; font-weight: bold;');
console.log('%c We\'re hiring! Check out our careers page.', 'color: #10B981; font-size: 14px;');