// ===== STATE MANAGEMENT =====
const state = {
    isMenuOpen: false,
    isSearchOpen: false,
    language: 'en'
};

// ===== CHAT WIDGET STATE =====
const chatState = {
    isOpen: false,
    unreadMessages: 0,
    messages: [],
    isTyping: false
};

// ===== TRANSLATION DATA =====
const translations = {
    en: {
        home: "Home",
        about: "About",
        services: "Services",
        projects: "Projects",
        testimonials: "Testimonials",
        contact: "Contact",
        welcome: "Professional Engineering Consultation Services",
        home_desc: "Zetsat Consultation (ZS) provides expert engineering solutions in construction, water projects, mining, roads, railways, and other infrastructure projects.",
        service1: "Construction Consultation",
        service2: "Water Projects",
        service3: "Mining Engineering",
        service4: "Road & Railway Projects",
        view_works: "View Our Projects",
        years_exp: "Years Experience",
        projects_completed: "Projects Completed",
        team_members: "Expert Consultants",
        awards_won: "Awards Won",
        about_us: "About Zetsat Consultation",
        about_desc: "Founded by Tesfaye Zegeye, Zetsat Consultation (ZS) has been delivering exceptional engineering solutions for over 14 years. We specialize in providing expert consultation for construction, water projects, mining, roads, railways, and other major infrastructure projects.",
        feature1: "Expert Engineering Consultation",
        feature2: "Infrastructure Development",
        feature3: "3D Visualization",
        feature4: "Project Management",
        founder: "Founder & Lead Consultant",
        our_projects: "Our Projects",
        contact_us: "Contact Us",
        email: "Email",
        phone: "Phone",
        address: "Address",
        address_text: "Addis Ababa, Saresi Parsi G+2, Shashimeni",
        hours: "Working Hours",
        hours_text: "Mon - Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM",
        send_message: "Request Consultation",
        attach_files: "Attach Files (Images/Videos)",
        about_company: "About Zetsat Consultation",
        footer_desc: "Professional engineering consultation services with 14+ years of experience in construction, water projects, mining, roads, and railways.",
        quick_links: "Quick Links",
        services_list: "Our Services",
        contact_info: "Contact Info",
        rights_reserved: "All rights reserved.",
        // Chat translations
        live_chat: "Live Chat",
        chat_welcome: "Hello! How can we assist with your project today?",
        chat_subtitle: "Get expert consultation for your engineering needs",
        typing: "ZS Consultant is typing...",
        chat_via_telegram: "For immediate assistance:"
    },
    am: {
        home: "መነሻ",
        about: "ስለኛ",
        services: "አገልግሎቶች",
        projects: "ፕሮጀክቶች",
        testimonials: "የደንበኞች አስተያየቶች",
        contact: "እውቂያ",
        welcome: "የምህንድስና እርዳታ አገልግሎቶች",
        home_desc: "ዘፀታት ኮንሳልቴሽን (ዘኤስ) በግንባታ፣ በውሃ ፕሮጀክቶች፣ በማዕድን፣ በመንገድ እና በባቡር ፕሮጀክቶች እና በሌሎች የመሠረተ ልማት ፕሮጀክቶች ልዩ የምህንድስና መፍትሄዎችን ይሰጣል።",
        service1: "የግንባታ እርዳታ",
        service2: "የውሃ ፕሮጀክቶች",
        service3: "የማዕድን ምህንድስና",
        service4: "መንገድ እና ባቡር ፕሮጀክቶች",
        view_works: "ፕሮጀክቶቻችንን ይመልከቱ",
        years_exp: "ዓመታት ልምድ",
        projects_completed: "የተጠናቀቁ ፕሮጀክቶች",
        team_members: "ባለሙያ አማካሪዎች",
        awards_won: "የተሸለሙ ሽልማቶች",
        about_us: "ስለ ዘፀታት ኮንሳልቴሽን",
        about_desc: "በተስፋየ ዘግየ የተመሠረተው ዘፀታት ኮንሳልቴሽን (ዘኤስ) ከ14 አመታት በላይ ልዩ የምህንድስና መፍትሄዎችን እያቀረበ ነው። በግንባታ፣ የውሃ ፕሮጀክቶች፣ ማዕድን፣ መንገድ፣ ባቡር እና ሌሎች ዋና ዋና የመሠረተ ልማት ፕሮጀክቶች ልዩ እርዳታ እንሰጣለን።",
        feature1: "ባለሙያ የምህንድስና እርዳታ",
        feature2: "የመሠረተ ልማት ፕሮጀክቶች",
        feature3: "3D ምስላዊ አሳያ",
        feature4: "ፕሮጀክት አስተዳደር",
        founder: "ማተኮሪያ እና ሊቀ መንበር",
        our_projects: "የኛ ፕሮጀክቶች",
        contact_us: "አግኙን",
        email: "ኢሜይል",
        phone: "ስልክ",
        address: "አድራሻ",
        address_text: "አዲስ አበባ፣ ሳሬሲ ፓርሲ ጂ+2፣ ሻሺመኒ",
        hours: "የሥራ ሰዓት",
        hours_text: "ሰኞ - ዓርብ: 8:00 ጥዋት - 6:00 ማታ, ቅዳሜ: 9:00 ጥዋት - 2:00 ከሰዓት",
        send_message: "እርዳታ ይጠይቁ",
        attach_files: "ፋይሎችን ያያይዙ (ምስሎች/ቪዲዮዎች)",
        about_company: "ስለ ዘፀታት ኮንሳልቴሽን",
        footer_desc: "በግንባታ፣ ውሃ ፕሮጀክቶች፣ ማዕድን፣ መንገድ እና ባቡር ፕሮጀክቶች ከ14 አመታት በላይ ልምድ ያላቸው ፕሮፌሽናል የምህንድስና እርዳታ አገልግሎቶች።",
        quick_links: "ፈጣን አገናኞች",
        services_list: "የኛ አገልግሎቶች",
        contact_info: "የእውቂያ መረጃ",
        rights_reserved: "ሁሉም መብቶች የተጠበቁ ናቸው።",
        // Chat translations
        live_chat: "ቀጥታ ውይይት",
        chat_welcome: "ሰላም! ዛሬ እንዴት ልንርዳችሁ እንችላለን?",
        chat_subtitle: "ለምህንድስና ፍላጎቶችዎ ባለሙያ እርዳታ ያግኙ",
        typing: "ዘኤስ አማካሪ እየተወያየ ነው...",
        chat_via_telegram: "ለቅጣት እርዳታ:"
    }
};

// ===== TESTIMONIALS DATA =====
const testimonials = [
    {
        name: "Ministry of Construction",
        role: "Government Department",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        content: "ZS Consultation provided exceptional expertise on our national infrastructure projects."
    },
    {
        name: "Ethiopian Railways",
        role: "Transport Authority",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
        content: "Professional consultation for our railway expansion projects."
    },
    {
        name: "Water Resources Ministry",
        role: "Government Agency",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        content: "Expert guidance on water resource management and irrigation projects."
    },
    {
        name: "Mining Corporation",
        role: "Private Company",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        content: "Comprehensive mining engineering consultation and environmental assessment."
    },
    {
        name: "Road Authority",
        role: "Government Agency",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        content: "Professional team with excellent project management skills for highway projects."
    },
    {
        name: "Private Developer",
        role: "Real Estate Company",
        image: "https://randomuser.me/api/portraits/women/26.jpg",
        content: "Reliable partner for all construction consultation needs."
    },
    {
        name: "International Contractor",
        role: "Construction Company",
        image: "https://randomuser.me/api/portraits/men/81.jpg",
        content: "Outstanding technical expertise for complex infrastructure projects."
    },
    {
        name: "Environmental Agency",
        role: "Government Department",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        content: "Sustainable solutions and environmental compliance expertise."
    }
];

// ===== PROJECTS DATA =====
const projects = [
    {
        title: "Addis Industrial Park",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Industrial park construction consultation - 50,000 sqm complex with modern facilities."
    },
    {
        title: "Blue Nile Water Project",
        image: "https://images.unsplash.com/photo-1508317465403-56f3a6cbdbb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Water supply system design and implementation for regional development."
    },
    {
        title: "Ethio-Djibouti Railway",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Railway infrastructure consultation for international transport corridor."
    },
    {
        title: "Tigray Mining Complex",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        content: "Mining engineering and environmental assessment for resource extraction."
    },
    {
        title: "Addis Ring Road",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Highway design and construction supervision for urban expansion."
    },
    {
        title: "Awash Irrigation Project",
        image: "https://images.unsplash.com/photo-1534278931827-8a259344abe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Large-scale irrigation system consultation for agricultural development."
    }
];

// ===== SEARCH DATA =====
const searchData = [
    { title: "Home", description: "Main page with featured content", section: "home" },
    { title: "About", description: "Learn about our mission and team", section: "about" },
    { title: "Services", description: "Our consultation services", section: "services" },
    { title: "Projects", description: "View our portfolio and case studies", section: "projects" },
    { title: "Testimonials", description: "Client reviews and feedback", section: "testimonials" },
    { title: "Contact", description: "Get in touch with our team", section: "contact" },
    { title: "Construction Consultation", description: "Expert construction advice", section: "services" },
    { title: "Water Projects", description: "Water resource management", section: "services" },
    { title: "Mining Engineering", description: "Mining consultation services", section: "services" },
    { title: "Road & Railway", description: "Transportation infrastructure", section: "services" }
];

// ===== ELEMENTS =====
const elements = {
    searchToggle: document.getElementById('searchToggle'),
    menuToggle: document.getElementById('menuToggle'),
    closeMenu: document.getElementById('closeMenu'),
    searchBar: document.getElementById('searchBar'),
    mobileMenu: document.getElementById('mobileMenu'),
    menuBackdrop: document.getElementById('menuBackdrop'),
    searchInput: document.getElementById('searchInput'),
    searchResults: document.getElementById('searchResults'),
    searchButton: document.getElementById('searchButton'),
    languageSelect: document.getElementById('languageSelect'),
    mobileLanguageSelect: document.getElementById('mobileLanguageSelect'),
    contactForm: document.getElementById('contactForm'),
    testimonialsSlider: document.querySelector('.swiper-wrapper'),
    projectsGrid: document.querySelector('.projects-grid'),
    lightbox: document.getElementById('lightbox'),
    closeLightbox: document.querySelector('.close-lightbox'),
    lightboxImage: document.querySelector('.lightbox-image'),
    lightboxTitle: document.querySelector('.lightbox-title'),
    lightboxDescription: document.querySelector('.lightbox-description'),
    desktopNav: document.querySelector('.desktop-nav')
};

// ===== CHAT ELEMENTS =====
const chatElements = {
    widget: document.getElementById('liveChatWidget'),
    toggle: document.getElementById('chatToggle'),
    close: document.getElementById('chatClose'),
    container: document.getElementById('chatContainer'),
    messages: document.getElementById('chatMessages'),
    input: document.getElementById('chatInput'),
    send: document.getElementById('chatSend'),
    badge: document.getElementById('messageBadge'),
    typingIndicator: document.getElementById('typingIndicator')
};

// ===== RESPONSIVE UTILITIES =====
function updateForScreenSize() {
    // Update language select text for small screens
    const langSelect = elements.languageSelect;
    const mobileLangSelect = elements.mobileLanguageSelect;

    if (window.innerWidth <= 320) {
        langSelect.querySelector('option[value="en"]').textContent = 'ENG';
        langSelect.querySelector('option[value="am"]').textContent = 'AM';
        mobileLangSelect.querySelector('option[value="en"]').textContent = 'ENG';
        mobileLangSelect.querySelector('option[value="am"]').textContent = 'AM';
    } else {
        langSelect.querySelector('option[value="en"]').textContent = 'English';
        langSelect.querySelector('option[value="am"]').textContent = 'አማርኛ';
        mobileLangSelect.querySelector('option[value="en"]').textContent = 'English';
        mobileLangSelect.querySelector('option[value="am"]').textContent = 'አማርኛ';
    }
}

// ===== MENU FUNCTIONS =====
function toggleMenu() {
    state.isMenuOpen = !state.isMenuOpen;

    elements.mobileMenu.classList.toggle('active', state.isMenuOpen);
    elements.menuBackdrop.classList.toggle('active', state.isMenuOpen);
    elements.menuToggle.setAttribute('aria-expanded', state.isMenuOpen);

    // Toggle menu icon
    const icon = elements.menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');

    // Toggle body scroll
    document.body.style.overflow = state.isMenuOpen ? 'hidden' : '';
}

function closeMenu() {
    if (state.isMenuOpen) {
        toggleMenu();
    }
}

// ===== SEARCH FUNCTIONS =====
function toggleSearch() {
    state.isSearchOpen = !state.isSearchOpen;

    elements.searchBar.classList.toggle('active', state.isSearchOpen);
    elements.searchToggle.setAttribute('aria-expanded', state.isSearchOpen);

    if (state.isSearchOpen) {
        elements.searchInput.focus();
        closeMenu(); // Close menu if open
    }
}

function closeSearch() {
    if (state.isSearchOpen) {
        toggleSearch();
        elements.searchInput.value = '';
        elements.searchResults.innerHTML = '';
    }
}

function performSearch() {
    const query = elements.searchInput.value.toLowerCase().trim();

    if (!query) {
        elements.searchResults.innerHTML = '';
        return;
    }

    const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        elements.searchResults.innerHTML = `
            <div class="no-results">
                <p>${state.language === 'en' ? 'No results found for "' : 'ምንም ውጤት አልተገኘም "'}${query}"</p>
            </div>
        `;
        return;
    }

    elements.searchResults.innerHTML = filtered.map(item => `
        <div class="result-item" role="button" tabindex="0" onclick="navigateToSection('${item.section}')">
            <strong>${item.title}</strong>
            <div style="font-size: 0.9em; color: var(--text-light); margin-top: 4px;">${item.description}</div>
        </div>
    `).join('');
}

// ===== TRANSLATION FUNCTIONS =====
function updateContent() {
    const htmlElement = document.documentElement;

    // Set HTML lang attribute
    htmlElement.lang = state.language;

    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[state.language][key]) {
            element.textContent = translations[state.language][key];
        }
    });

    // Update placeholder attributes
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const serviceSelect = document.getElementById('service');

    // Update chat input placeholder
    const chatInput = document.getElementById('chatInput');

    if (state.language === 'am') {
        nameInput.placeholder = "ስምዎ";
        emailInput.placeholder = "ኢሜይልዎ";
        phoneInput.placeholder = "ስልክ ቁጥር";
        messageInput.placeholder = "የፕሮጀክት ዝርዝሮች / መስፈርቶች";
        serviceSelect.innerHTML = `
            <option value="">አገልግሎት ይምረጡ</option>
            <option value="construction">የግንባታ እርዳታ</option>
            <option value="water">የውሃ ፕሮጀክቶች</option>
            <option value="mining">የማዕድን ምህንድስና</option>
            <option value="road">መንገድ እና ባቡር ፕሮጀክቶች</option>
            <option value="other">ሌሎች ፕሮጀክቶች</option>
        `;
        chatInput.placeholder = "መልእክትዎን ይፃፉ...";

        // Amharic is LTR, NOT RTL
        document.body.classList.add('amharic');
        document.body.classList.remove('english');
        document.body.dir = 'ltr'; // Important: Keep LTR direction
    } else {
        nameInput.placeholder = "Your Name";
        emailInput.placeholder = "Your Email";
        phoneInput.placeholder = "Phone Number";
        messageInput.placeholder = "Project Details / Requirements";
        serviceSelect.innerHTML = `
            <option value="">Select Service</option>
            <option value="construction">Construction Consultation</option>
            <option value="water">Water Projects</option>
            <option value="mining">Mining Engineering</option>
            <option value="road">Road & Railway Projects</option>
            <option value="other">Other Projects</option>
        `;
        chatInput.placeholder = "Type your message...";

        document.body.classList.add('english');
        document.body.classList.remove('amharic');
        document.body.dir = 'ltr';
    }
}

function changeLanguage(lang) {
    state.language = lang;

    // Update both language selects
    elements.languageSelect.value = lang;
    elements.mobileLanguageSelect.value = lang;

    updateContent();

    const messages = {
        en: "Language changed to English",
        am: "ቋንቋ ወደ አማርኛ ተቀይሯል"
    };

    showNotification(messages[lang] || messages.en);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--surface);
        color: var(--text);
        padding: 12px 20px;
        border-radius: var(--radius);
        box-shadow: var(--shadow-lg);
        z-index: 2000;
        animation: fadeInUp 0.3s ease;
        border: 1px solid var(--primary);
        max-width: 90vw;
        text-align: center;
    `;
    notification.textContent = message;
    notification.setAttribute('role', 'alert');

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeInUp 0.3s ease reverse forwards';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ===== NAVIGATION FUNCTIONS =====
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
        closeSearch();

        // Update active menu link in mobile menu
        document.querySelectorAll('.menu-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });

        // Update active menu link in desktop menu
        if (elements.desktopNav) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    }
}

// ===== DESKTOP MENU FUNCTIONS =====
function initializeDesktopMenu() {
    const desktopMenu = document.querySelector('.desktop-menu');
    if (!desktopMenu) return;

    // Set active state on desktop menu items
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            navigateToSection(sectionId);
        });
    });

    // Scroll spy for active menu items
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = sectionId;
            }
        });

        // Update active state
        document.querySelectorAll('.nav-link, .menu-link').forEach(link => {
            link.classList.remove('active');
            const linkSection = link.getAttribute('href').substring(1);
            if (linkSection === currentSection) {
                link.classList.add('active');
            } else if (!currentSection && linkSection === 'home') {
                link.classList.add('active');
            }
        });
    });
}

// ===== TESTIMONIALS FUNCTIONS =====
function initSwiper() {
    const swiper = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

function loadTestimonials() {
    if (!elements.testimonialsSlider) return;

    elements.testimonialsSlider.innerHTML = '';
    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide testimonial-slide';
        slide.innerHTML = `
            <div class="testimonial-content">"${testimonial.content}"</div>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="author-image">
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `;
        elements.testimonialsSlider.appendChild(slide);
    });
    initSwiper();
}

// ===== PROJECTS FUNCTIONS =====
function loadProjects() {
    if (!elements.projectsGrid) return;

    elements.projectsGrid.innerHTML = '';
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
            <div class="project-overlay">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        projectCard.addEventListener('click', () => {
            elements.lightboxImage.src = project.image;
            elements.lightboxImage.alt = project.title;
            elements.lightboxTitle.textContent = project.title;
            elements.lightboxDescription.textContent = project.description;

            elements.lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        elements.projectsGrid.appendChild(projectCard);
    });
}

function closeLightbox() {
    elements.lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== STATS ANIMATION =====
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + '+';
            }
        }, 30);
    });
}

// ===== FORM SUBMISSION =====
function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Prepare data for submission
    const formData = {
        name,
        email,
        phone,
        service,
        message,
        timestamp: new Date().toISOString()
    };

    // In a real application, you would send this data to a server
    console.log('Consultation Request:', formData);

    // Show success message
    showNotification(state.language === 'en'
        ? 'Thank you for your consultation request! We will contact you within 24 hours.'
        : 'ለእርዳታ ጥያቄዎ እናመሰግናለን! በ24 ሰዓታት ውስጥ እናገኝዎታለን።');

    // Reset form
    elements.contactForm.reset();
}

// ===== CHAT FUNCTIONS =====
function toggleChat() {
    chatState.isOpen = !chatState.isOpen;

    chatElements.container.classList.toggle('active', chatState.isOpen);
    chatElements.toggle.setAttribute('aria-expanded', chatState.isOpen);

    if (chatState.isOpen) {
        chatElements.input.focus();
        // Reset unread count when chat opens
        chatState.unreadMessages = 0;
        updateChatBadge();
    }
}

function closeChat() {
    if (chatState.isOpen) {
        toggleChat();
    }
}

function updateChatBadge() {
    if (!chatElements.badge) return;
    chatElements.badge.textContent = chatState.unreadMessages;
    chatElements.badge.style.display = chatState.unreadMessages > 0 ? 'flex' : 'none';
}

function addMessage(text, sender, timestamp = new Date()) {
    if (!chatElements.messages) return;

    const message = {
        text,
        sender,
        timestamp
    };

    chatState.messages.push(message);

    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message';

    const timeString = timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messageElement.innerHTML = `
        <div class="message-content ${sender}">${text}</div>
        <div class="message-time ${sender}">${timeString}</div>
    `;

    chatElements.messages.appendChild(messageElement);

    // Scroll to bottom
    chatElements.messages.scrollTop = chatElements.messages.scrollHeight;

    // If chat is closed, increment badge
    if (!chatState.isOpen && sender === 'bot') {
        chatState.unreadMessages++;
        updateChatBadge();
    }
}

function showTypingIndicator(show = true) {
    chatState.isTyping = show;
    if (chatElements.typingIndicator) {
        chatElements.typingIndicator.classList.toggle('active', show);
    }
}

function sendMessage() {
    const text = chatElements.input.value.trim();

    if (!text) return;

    // Add user message
    addMessage(text, 'user');
    chatElements.input.value = '';

    // Show typing indicator
    showTypingIndicator(true);

    // Simulate bot response after delay
    setTimeout(() => {
        showTypingIndicator(false);

        const responses = {
            en: [
                "Thanks for your message! Our consultation team will get back to you shortly.",
                "We've received your inquiry. For immediate assistance, please call +251 99 260 0682.",
                "Great question! One of our engineering consultants will assist you soon.",
                "We're here to help! Please provide more details about your project requirements."
            ],
            am: [
                "መልእክትዎን እናመሰግናለን! የኛ እርዳታ ቡድን በቅርቡ ከእርስዎ ጋር ይገናኛል።",
                "ጥያቄዎን ተቀብለናል። ለቅጣት እርዳታ እባክዎን +251 99 260 0682 ይደውሉ።",
                "ታላቅ ጥያቄ! ከቅርብ ጊዜ በኋላ አንዱ ከምህንድስና አማካሪዎቻችን ይርዳዎታል።",
                "ለመርዳት እዚህ ነን! እባክዎን ስለ ፕሮጀክትዎ መስፈርቶች ተጨማሪ ዝርዝሮችን ያቅርቡ።"
            ]
        };

        const randomResponse = responses[state.language][Math.floor(Math.random() * responses[state.language].length)];
        addMessage(randomResponse, 'bot');

    }, 1500 + Math.random() * 1000);
}

// ===== INITIALIZE CHAT =====
function initializeChat() {
    // Only initialize if chat elements exist
    if (!chatElements.widget) return;

    // Add initial welcome message
    addMessage(
        state.language === 'am'
            ? "ሰላም! ዛሬ እንዴት ልንርዳችሁ እንችላለን?"
            : "Hello! How can we assist with your project today?",
        'bot'
    );
}

// ===== EVENT LISTENERS =====
function initializeEventListeners() {
    // Menu and Search
    if (elements.searchToggle) {
        elements.searchToggle.addEventListener('click', toggleSearch);
    }

    if (elements.menuToggle) {
        elements.menuToggle.addEventListener('click', toggleMenu);
    }

    if (elements.closeMenu) {
        elements.closeMenu.addEventListener('click', closeMenu);
    }

    if (elements.menuBackdrop) {
        elements.menuBackdrop.addEventListener('click', closeMenu);
    }

    // Search functionality
    if (elements.searchButton) {
        elements.searchButton.addEventListener('click', performSearch);
    }

    if (elements.searchInput) {
        elements.searchInput.addEventListener('input', performSearch);
        elements.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
    }

    // Language selection
    if (elements.languageSelect) {
        elements.languageSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
            if (elements.mobileLanguageSelect) {
                elements.mobileLanguageSelect.value = e.target.value;
            }
        });
    }

    if (elements.mobileLanguageSelect) {
        elements.mobileLanguageSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
            if (elements.languageSelect) {
                elements.languageSelect.value = e.target.value;
            }
        });
    }

    // Form submission
    if (elements.contactForm) {
        elements.contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Lightbox
    if (elements.closeLightbox) {
        elements.closeLightbox.addEventListener('click', closeLightbox);
    }

    if (elements.lightbox) {
        elements.lightbox.addEventListener('click', (e) => {
            if (e.target === elements.lightbox) {
                closeLightbox();
            }
        });
    }

    // Chat events (only if chat elements exist)
    if (chatElements.toggle) {
        chatElements.toggle.addEventListener('click', toggleChat);
    }

    if (chatElements.close) {
        chatElements.close.addEventListener('click', closeChat);
    }

    if (chatElements.input) {
        chatElements.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }

    if (chatElements.send) {
        chatElements.send.addEventListener('click', sendMessage);
    }

    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar') &&
            !e.target.closest('.search-icon') &&
            state.isSearchOpen) {
            closeSearch();
        }

        // Close chat when clicking outside (only if chat is open)
        if (chatElements.widget &&
            !e.target.closest('.chat-container') &&
            !e.target.closest('.chat-toggle') &&
            chatState.isOpen) {
            closeChat();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            toggleSearch();
        }

        if (e.key === 'Escape') {
            if (state.isSearchOpen) closeSearch();
            if (state.isMenuOpen) closeMenu();
            if (elements.lightbox && elements.lightbox.classList.contains('active')) closeLightbox();
            if (chatState.isOpen) closeChat();
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            navigateToSection(targetId.substring(1));
        });
    });

    // Menu link clicks
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            navigateToSection(sectionId);
        });
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                if (entry.target.classList.contains('stats-section')) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });

    // Observe all feature cards and sections
    document.querySelectorAll('.feature-card, section').forEach(el => observer.observe(el));

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(26, 26, 26, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
                header.style.backdropFilter = 'none';
            }
        }
    });

    // Resize handler
    window.addEventListener('resize', updateForScreenSize);
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Set default language
    state.language = 'en';
    document.body.classList.add('english');

    // Initialize components
    loadTestimonials();
    loadProjects();
    updateContent();
    updateForScreenSize();
    initializeDesktopMenu();

    // Initialize chat
    initializeChat();

    // Initialize event listeners
    initializeEventListeners();

    // PWA Support
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').catch(console.error);
        });
    }

    // Install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        console.log('PWA install prompt available');
    });
});

// ===== GLOBAL FUNCTIONS =====
window.navigateToSection = navigateToSection;
window.performSearch = performSearch;
window.toggleMenu = toggleMenu;
window.toggleSearch = toggleSearch;
window.changeLanguage = changeLanguage;
window.closeLightbox = closeLightbox;
