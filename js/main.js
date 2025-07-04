document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        mobileMenu.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });

    // Add solutions grid items dynamically (only if the grid exists)
    const solutionsGrid = document.querySelector('.solutions-grid');
    if (solutionsGrid) {
        const solutions = [
            { 
                title: 'Spatial Data Management',
                icon: '<i class="fas fa-database"></i>',
                description: 'Efficient storage and organization of geographic information with advanced spatial indexing.'
            },
            { 
                title: 'GIS Database Systems',
                icon: '<i class="fas fa-globe"></i>',
                description: 'Robust geographic information systems for complex spatial data analysis and mapping.'
            },
            { 
                title: 'Remote Sensing Data Processing',
                icon: '<i class="fas fa-satellite"></i>',
                description: 'Advanced processing of satellite and aerial imagery for actionable insights.'
            },
            { 
                title: 'Data Analytics & Visualization',
                icon: '<i class="fas fa-chart-line"></i>',
                description: 'Transform complex spatial data into clear, actionable visualizations and insights.'
            },
            { 
                title: 'Real-time Data Systems',
                icon: '<i class="fas fa-clock"></i>',
                description: 'Live monitoring and analysis of spatial data streams for immediate decision making.'
            },
            { 
                title: 'Cloud Data Infrastructure',
                icon: '<i class="fas fa-cloud"></i>',
                description: 'Scalable cloud solutions for storing and processing large spatial datasets.'
            },
            { 
                title: 'Data Integration Services',
                icon: '<i class="fas fa-sync"></i>',
                description: 'Seamless integration of multiple data sources into unified spatial information systems.'
            },
            { 
                title: 'Spatial Data Mining',
                icon: '<i class="fas fa-search"></i>',
                description: 'Extract valuable patterns and insights from large spatial datasets.'
            },
            { 
                title: 'Custom Data Solutions',
                icon: '<i class="fas fa-cogs"></i>',
                description: 'Tailored spatial data solutions designed for your specific business needs.'
            },
            { 
                title: 'Data Quality Control',
                icon: '<i class="fas fa-check-circle"></i>',
                description: 'Ensure accuracy and reliability of spatial data through rigorous quality checks.'
            },
            { 
                title: 'Data Security & Compliance',
                icon: '<i class="fas fa-shield-alt"></i>',
                description: 'Protect sensitive spatial data with industry-leading security measures.'
            },
            { 
                title: 'API & Web Services',
                icon: '<i class="fas fa-code"></i>',
                description: 'Access spatial data and functionality through modern, well-documented APIs.'
            }
        ];

        solutions.forEach(solution => {
            const card = document.createElement('div');
            card.className = 'solution-card';
            card.innerHTML = `
                <div class="solution-icon">${solution.icon}</div>
                <h3>${solution.title}</h3>
                <p class="solution-description">${solution.description}</p>
                <button class="learn-more">LEARN MORE</button>
            `;
            solutionsGrid.appendChild(card);
        });
    }

    // Handle contact buttons
    const contactButtons = document.querySelectorAll('.contact-btn, .cta-btn');
    contactButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Replace with actual contact form or mailto link
            window.location.href = 'mailto:contact@spatiosds.com';
        });
    });

    // Add scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    document.querySelectorAll('.solution-card, .value-prop').forEach(el => {
        observer.observe(el);
    });
});
