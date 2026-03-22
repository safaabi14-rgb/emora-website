// ============================================
// DARK MODE / LIGHT MODE THEME SWITCHER
// ============================================
const themeToggle = document.getElementById('theme-toggle');
let currentTheme = localStorage.getItem('emoraTheme') || 'light';

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('emoraTheme', theme);
    
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        themeToggle.setAttribute('title', 'Switch to Light Mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggle.setAttribute('title', 'Switch to Dark Mode');
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    setTheme(currentTheme);
});

// Theme toggle button click handler
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
}

// ============================================
// TRANSLATIONS DATA
// ============================================
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_perfumes: "Perfumes",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        
        // Hero Section
        hero_tagline: "Unveil Your Signature Scent",
        btn_shop: "Shop Now",
        
        // About Section
        about_title: "The Essence of Elegance",
        about_desc1: "EMORA is a luxury perfume brand inspired by the timeless elegance of Paris and the sophistication of modern French craftsmanship. Each fragrance is meticulously created to tell a unique story of luxury, femininity, and refinement.",
        about_desc2: "Our collection combines the finest ingredients with artistic vision, creating scents that transcend time and captivate the senses. EMORA is more than a perfume—it's an expression of your unique personality and style.",
        placeholder_about: "✧ Signature Collection ✧",
        
        // Products Section
        products_title: "Our Perfumes",
        filter_all: "All",
        filter_edp: "EDP",
        filter_extrait: "Extrait",
        product_type_edp: "EDP",
        product_type_extrait: "EXTRAIT",
        btn_view_details: "View Details",
        
        // Product Descriptions
        product_belle_fleur: "A delicate blend of rose and jasmine that captures the essence of a blooming garden.",
        product_dots_vanille: "Warm vanilla notes blended with subtle spices create an irresistible, comforting fragrance.",
        product_lumer_citrus: "Fresh citrus notes with hints of bergamot and lemon, perfect for bright and vibrant days.",
        product_be_influencer: "A bold and empowering fragrance that makes a statement wherever you go.",
        product_royale_amber: "A luxurious extraction of amber and musk, the crown jewel of our collection.",
        product_nuit_elixir: "A mysterious nocturnal blend of dark woods and sensual florals for evening enchantment.",
        product_velvet_oud: "Rich oud combined with velvet florals, an exquisite masterpiece of sophistication.",
        
        // Testimonials Section
        testimonials_title: "What Our Customers Say",
        testimonial_1: '"EMORA perfumes are absolutely divine! The quality and elegance are unmatched. I\'ve never felt more confident wearing a fragrance."',
        testimonial_2: '"The attention to detail and sophistication in every perfume is remarkable. EMORA has become my daily indulgence and I couldn\'t ask for anything better."',
        testimonial_3: '"Investing in EMORA was the best decision for my fragrance collection. Each scent tells a beautiful story and lasts throughout the entire day."',
        
        // Social Section
        social_title: "Connect With Us",
        social_subtitle: "Follow EMORA for exclusive updates and special offers",
        
        // TikTok Modal
        tiktok_choose: "Choose TikTok Channel",
        tiktok_subtitle: "Select which channel you want to follow",
        tiktok_live: "Live Channel",
        tiktok_live_desc: "Watch live streaming & daily content",
        tiktok_store: "Official Store",
        tiktok_store_desc: "Shop our products & exclusive deals",
        
        // Footer
        footer_tagline: "Luxury Perfume Brand",
        footer_nav: "Navigation",
        footer_home: "Home",
        footer_about: "About",
        footer_perfumes: "Perfumes",
        footer_reviews: "Reviews",
        footer_follow: "Follow Us",
        footer_copyright: "© 2026 EMORA Perfume. All rights reserved."
    },
    id: {
        // Navigation
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_perfumes: "Parfum",
        nav_reviews: "Ulasan",
        nav_contact: "Kontak",
        
        // Hero Section
        hero_tagline: "Ungkap Aroma Tanda Tangan Anda",
        btn_shop: "Belanja Sekarang",
        
        // About Section
        about_title: "Esensi Elegance",
        about_desc1: "EMORA adalah merek parfum mewah yang terinspirasi dari keanggunan abadi Paris dan kecanggihan keahlian Prancis modern. Setiap wewangian dibuat dengan cermat untuk menceritakan kisah unik tentang kemewahan, feminitas, dan kesempurnaan.",
        about_desc2: "Koleksi kami menggabungkan bahan-bahan terbaik dengan visi artistik, menciptakan aromaterapi yang melampaui waktu dan memikat indra. EMORA bukan hanya parfum—ini adalah ekspresi kepribadian dan gaya unik Anda.",
        placeholder_about: "✧ Koleksi Tanda Tangan ✧",
        
        // Products Section
        products_title: "Parfum Kami",
        filter_all: "Semua",
        filter_edp: "Eau De Parfum",
        filter_extrait: "Extrait",
        product_type_edp: "Eau De Parfum",
        product_type_extrait: "EXTRAIT",
        btn_view_details: "Lihat Detail",
        
        // Product Descriptions
        product_belle_fleur: "Perpaduan halus mawar dan bunga melati yang menangkap esensi taman yang mekar.",
        product_dots_vanille: "Catatan vanilla hangat dipadukan dengan rempah halus menciptakan wewangian yang tak tertahankan dan menenangkan.",
        product_lumer_citrus: "Catatan sitrus segar dengan sentuhan bergamot dan lemon, sempurna untuk hari-hari cerah dan penuh semangat.",
        product_be_influencer: "Wewangian berani dan memberdayakan yang membuat pernyataan di mana pun Anda berada.",
        product_royale_amber: "Ekstraksi mewah amber dan musk, permata mahkota koleksi kami.",
        product_nuit_elixir: "Perpaduan nokturnal misterius dari kayu gelap dan bunga sensual untuk pesona malam.",
        product_velvet_oud: "Oud kaya dikombinasikan dengan bunga beludru, mahakarya kecanggihan yang luar biasa.",
        
        // Testimonials Section
        testimonials_title: "Apa Kata Pelanggan Kami",
        testimonial_1: '"Parfum EMORA benar-benar indah! Kualitas dan elegansinya tak tertandingi. Saya tidak pernah merasa lebih percaya diri mengenakan wewangian."',
        testimonial_2: '"Perhatian terhadap detail dan kecanggihan di setiap parfum luar biasa. EMORA telah menjadi kemewahan harian saya dan saya tidak bisa meminta lebih."',
        testimonial_3: '"Berinvestasi di EMORA adalah keputusan terbaik untuk koleksi wewangian saya. Setiap aroma menceritakan kisah indah dan bertahan sepanjang hari."',
        
        // Social Section
        social_title: "Hubungi Kami",
        social_subtitle: "Ikuti EMORA untuk penawaran eksklusif dan promosi spesial",
        
        // TikTok Modal
        tiktok_choose: "Pilih Channel TikTok",
        tiktok_subtitle: "Pilih channel mana yang ingin Anda ikuti",
        tiktok_live: "Channel Live",
        tiktok_live_desc: "Tonton live streaming & konten harian",
        tiktok_store: "Toko Resmi",
        tiktok_store_desc: "Belanja produk & penawaran eksklusif",
        
        // Footer
        footer_tagline: "Merek Parfum Mewah",
        footer_nav: "Navigasi",
        footer_home: "Beranda",
        footer_about: "Tentang",
        footer_perfumes: "Parfum",
        footer_reviews: "Ulasan",
        footer_follow: "Ikuti Kami",
        footer_copyright: "© 2026 EMORA Perfume. Semua hak dilindungi."
    }
};

// ============================================
// LANGUAGE SWITCHER FUNCTIONALITY
// ============================================
let currentLanguage = localStorage.getItem('emoraLanguage') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('emoraLanguage', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
});

// Language button event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});


window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ============================================
// NAVIGATION BAR - Mobile Menu Toggle
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// TIKTOK MODAL FUNCTIONALITY
// ============================================
const tiktokBtn = document.getElementById('tiktok-modal-btn');
const tiktokModal = document.getElementById('tiktok-modal');
const modalClose = document.getElementById('modal-close');

if (tiktokBtn && tiktokModal) {
    // Open modal on TikTok button click
    tiktokBtn.addEventListener('click', () => {
        tiktokModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // Close modal on X button click
    modalClose.addEventListener('click', () => {
        tiktokModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside the modal content
    tiktokModal.addEventListener('click', (e) => {
        if (e.target === tiktokModal) {
            tiktokModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && tiktokModal.classList.contains('show')) {
            tiktokModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
}

// ============================================
// PRODUCT FILTER FUNCTIONALITY
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        productCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filterValue === 'all' || filterValue === category) {
                // Show card with animation
                card.classList.remove('hidden');
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = 'slideUp 0.6s ease-out';
                }, 10);
            } else {
                // Hide card
                card.classList.add('hidden');
            }
        });
    });
});

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    testimonialCards[index].classList.add('active');
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    });

    // Auto-rotate testimonials (optional)
    // setInterval(() => {
    //     currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    //     showTestimonial(currentTestimonial);
    // }, 5000);
}

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: Remove observer to prevent re-triggering
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards and other fade-in elements
document.querySelectorAll('.product-card, .about-text, .about-image, .testimonial-card').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// ENHANCED BUTTON INTERACTIONS
// ============================================
const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ============================================
// PARALLAX EFFECT (Optional)
// ============================================
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const scrollPosition = window.scrollY;
        const parallaxElements = heroSection.querySelectorAll('.hero::before, .hero::after');
        heroSection.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ============================================
// FEATURED PRODUCT ANIMATION
// ============================================
const featuredProduct = document.querySelector('.featured-product');
if (featuredProduct) {
    // Add floating animation
    const floatingAnimation = setInterval(() => {
        const randomY = Math.sin(Date.now() / 1000) * 10;
        featuredProduct.style.transform = `translateY(${randomY}px)`;
    }, 50);

    // Add glow effect on featured product
    featuredProduct.style.animation = 'glow 3s ease-in-out infinite';
}

// ============================================
// CTA BUTTON SCROLL TO PRODUCTS
// ============================================
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const productsSection = document.querySelector('#products');
        if (productsSection) {
            const offsetTop = productsSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// ============================================
// LOADING ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================================
// DYNAMIC HOVER EFFECTS ON PRODUCT CARDS
// ============================================
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.webkitFilter = 'drop-shadow(0 20px 40px rgba(200, 162, 122, 0.3))';
    });

    card.addEventListener('mouseleave', function() {
        this.style.webkitFilter = 'drop-shadow(0 5px 20px rgba(62, 44, 35, 0.1))';
    });
});

// ============================================
// FORM VALIDATION (if contact form exists)
// ============================================
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
        this.reset();
        // Show success message
        alert('Thank you for your message!');
    });
});

// ============================================
// ACTIVE NAVIGATION LINK HIGHLIGHT
// ============================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
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

// ============================================
// ACCESSIBILITY - FOCUS MANAGEMENT
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    }
});

// ============================================
// PERFORMANCE - DEBOUNCE SCROLL
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// PAGE INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    console.log('EMORA Website Loaded Successfully');

    // Animate elements on page load
    const elementsToAnimate = document.querySelectorAll('.animate-fade-in, .animate-fade-in-delay, .animate-fade-in-delay-2');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '1';
    });

    // Add loading animation completion
    document.body.style.opacity = '1';
    document.body.style.animation = 'fadeIn 0.5s ease-out';
});

// ============================================
// TRACK USER INTERACTIONS (Analytics)
// ============================================
document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        const targetText = target.textContent || target.getAttribute('href') || 'Button';
        console.log('User interaction:', targetText);
    }
});

// ============================================
// RESPONSIVE NAVBAR ADJUSTMENTS
// ============================================
window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768) {
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    }
}, 250));

// ============================================
// SERVICE WORKER REGISTRATION (Optional PWA)
// ============================================
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('sw.js').catch(() => {
//         console.log('Service Worker not registered');
//     });
// }

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Function to toggle class
function toggleClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

// Function to add scroll listener
function onScroll(callback) {
    window.addEventListener('scroll', debounce(callback, 100));
}

// Function to get element position
function getElementPosition(element) {
    return element.getBoundingClientRect();
}

// ============================================
// GLOBAL ERROR HANDLING
// ============================================
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

// ============================================
// CONSOLE BRANDING
// ============================================
console.log('%cEMORA Luxury Perfume Brand', 'font-size: 20px; font-weight: bold; color: #C8A27A; font-family: Playfair Display, serif;');
console.log('%cUnveil Your Signature Scent', 'font-size: 14px; color: #D4AF37; font-family: Poppins, sans-serif;');
