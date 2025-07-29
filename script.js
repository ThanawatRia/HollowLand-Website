// Fairy Dust Effect
class FairyDustEffect {
    constructor() {
        this.container = document.getElementById('fairy-dust-container');
        this.isActive = false;
        this.particles = [];
        this.init();
    }

    init() {
        // Add mouse move listener for fairy dust
        document.addEventListener('mousemove', (e) => this.createFairyDust(e));
        
        // Add hover listeners to fairy-hover elements
        document.querySelectorAll('.fairy-hover').forEach(element => {
            element.addEventListener('mouseenter', () => this.startContinuousDust(element));
            element.addEventListener('mouseleave', () => this.stopContinuousDust());
        });
    }

    createFairyDust(e) {
        const dust = document.createElement('div');
        dust.className = 'fairy-dust';
        
        // Random position around mouse cursor
        const x = e.clientX + (Math.random() - 0.5) * 20;
        const y = e.clientY + (Math.random() - 0.5) * 20;
        
        dust.style.left = x + 'px';
        dust.style.top = y + 'px';
        
        // Random size and color variation
        const size = Math.random() * 4 + 2;
        dust.style.width = size + 'px';
        dust.style.height = size + 'px';
        
        // Random color from fairy palette
        const colors = ['#ffd700', '#ff69b4', '#9370db', '#00bfff', '#32cd32'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        dust.style.background = `radial-gradient(circle, ${randomColor}, transparent)`;
        dust.style.boxShadow = `0 0 6px ${randomColor}`;
        
        this.container.appendChild(dust);
        
        // Remove particle after animation
        setTimeout(() => {
            if (dust.parentNode) {
                dust.parentNode.removeChild(dust);
            }
        }, 3000);
    }

    startContinuousDust(element) {
        this.isActive = true;
        this.continuousDustInterval = setInterval(() => {
            if (this.isActive) {
                const rect = element.getBoundingClientRect();
                const x = rect.left + Math.random() * rect.width;
                const y = rect.top + Math.random() * rect.height;
                
                this.createFairyDust({ clientX: x, clientY: y });
            }
        }, 100);
    }

    stopContinuousDust() {
        this.isActive = false;
        if (this.continuousDustInterval) {
            clearInterval(this.continuousDustInterval);
        }
    }
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Parallax Effect for Hero Section
function initParallax() {
    const hero = document.querySelector('.hero');
    const orbs = document.querySelectorAll('.magical-orb');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
        
        orbs.forEach((orb, index) => {
            const speed = 0.3 + (index * 0.1);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Intersection Observer for Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections
    document.querySelectorAll('.story-card, .character-showcase, .product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Floating Elements Animation
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-fairy');
    
    floatingElements.forEach(element => {
        // Add random animation delay
        const delay = Math.random() * 2;
        element.style.animationDelay = delay + 's';
        
        // Add click interaction
        element.addEventListener('click', () => {
            element.style.transform = 'scale(1.2) rotate(360deg)';
            setTimeout(() => {
                element.style.transform = '';
            }, 500);
        });
    });
}

// Navigation Active State
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Add click handlers for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Magical Cursor Effect
function initMagicalCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'magical-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.8), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: screen;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = (e.clientX - 10) + 'px';
        cursor.style.top = (e.clientY - 10) + 'px';
    });
    
    // Scale cursor on hover
    document.querySelectorAll('.fairy-hover').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
        });
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Store Button Interactions
function initStoreButtons() {
    const buyButtons = document.querySelectorAll('.buy-button');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create sparkle effect
            const sparkles = [];
            for (let i = 0; i < 20; i++) {
                const sparkle = document.createElement('div');
                sparkle.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: #ffd700;
                    border-radius: 50%;
                    pointer-events: none;
                    animation: sparkleExplode 1s ease-out forwards;
                `;
                
                const rect = button.getBoundingClientRect();
                sparkle.style.left = (rect.left + rect.width / 2) + 'px';
                sparkle.style.top = (rect.top + rect.height / 2) + 'px';
                
                document.body.appendChild(sparkle);
                sparkles.push(sparkle);
                
                // Random direction for sparkle
                const angle = (Math.PI * 2 * i) / 20;
                const velocity = 50 + Math.random() * 50;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                
                sparkle.style.setProperty('--vx', vx + 'px');
                sparkle.style.setProperty('--vy', vy + 'px');
            }
            
            // Clean up sparkles
            setTimeout(() => {
                sparkles.forEach(sparkle => {
                    if (sparkle.parentNode) {
                        sparkle.parentNode.removeChild(sparkle);
                    }
                });
            }, 1000);
            
            // Show purchase message (placeholder)
            alert('✨ Thank you for your interest! Payment system coming soon! ✨');
        });
    });
    
    // Add sparkle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleExplode {
            0% {
                opacity: 1;
                transform: translate(0, 0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(var(--vx), var(--vy)) scale(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Dynamic Background Stars
function initBackgroundStars() {
    const starsContainer = document.createElement('div');
    starsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(starsContainer);
    
    // Create stars
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #ffd700;
            border-radius: 50%;
            opacity: ${Math.random() * 0.8 + 0.2};
            animation: twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate;
        `;
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        
        starsContainer.appendChild(star);
    }
    
    // Add twinkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0% { opacity: 0.2; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.2); }
        }
    `;
    document.head.appendChild(style);
}

// Character Modal Functionality
const characterData = {
    'Luna Moonwhisper': { magic: 90, wisdom: 85 },
    'Stella Starweaver': { magic: 95, wisdom: 80 },
    'Crystal Gemheart': { magic: 88, wisdom: 92 },
    'Flora Greenvine': { magic: 82, wisdom: 95 },
    'Aurora Skylight': { magic: 93, wisdom: 78 },
    'Shadow Mysticveil': { magic: 97, wisdom: 88 }
};

function openModal(imageSrc, characterName) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const magicStat = document.getElementById('modalMagicStat');
    const wisdomStat = document.getElementById('modalWisdomStat');
    
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalTitle.textContent = characterName;
    
    // Set character stats
    const stats = characterData[characterName];
    if (stats) {
        magicStat.style.width = stats.magic + '%';
        wisdomStat.style.width = stats.wisdom + '%';
    }
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Add click outside to close
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🧚‍♀️ Welcome to Hollow Land! ✨');
    
    // Initialize all effects
    new FairyDustEffect();
    initParallax();
    initScrollAnimations();
    initFloatingElements();
    initNavigation();
    initMagicalCursor();
    initStoreButtons();
    initBackgroundStars();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add some extra magical interactions
document.addEventListener('keydown', (e) => {
    // Easter egg: Press 'M' for magic
    if (e.key.toLowerCase() === 'm') {
        // Create a burst of fairy dust at center of screen
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const angle = (Math.PI * 2 * i) / 30;
                const radius = 100;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;
                
                const dust = document.createElement('div');
                dust.className = 'fairy-dust';
                dust.style.left = x + 'px';
                dust.style.top = y + 'px';
                dust.style.background = 'radial-gradient(circle, #ff69b4, transparent)';
                dust.style.boxShadow = '0 0 10px #ff69b4';
                
                document.getElementById('fairy-dust-container').appendChild(dust);
                
                setTimeout(() => {
                    if (dust.parentNode) {
                        dust.parentNode.removeChild(dust);
                    }
                }, 3000);
            }, i * 50);
        }
    }
}); 