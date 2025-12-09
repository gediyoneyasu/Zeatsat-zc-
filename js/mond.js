/**
 * ZETSAT CONSULTATION (ZS) - Advanced JavaScript Implementation
 * Professional Engineering Consultation Services
 * Version 2.0 - Enhanced with Advanced Features
 */

// ===== STRICT MODE & ERROR HANDLING =====
'use strict';

// ===== GLOBAL ERROR HANDLER =====
window.onerror = function (msg, url, lineNo, columnNo, error) {
    console.error('Error:', msg, 'URL:', url, 'Line:', lineNo, 'Column:', columnNo, 'Error object:', error);
    return false;
};

// ===== STATE MANAGEMENT WITH LOCALSTORAGE =====
class StateManager {
    constructor() {
        this.state = {
            isMenuOpen: false,
            isSearchOpen: false,
            language: localStorage.getItem('zs_language') || 'en',
            darkMode: JSON.parse(localStorage.getItem('zs_darkMode')) || false,
            visitedSections: JSON.parse(localStorage.getItem('zs_visitedSections')) || []
        };
    }

    saveState() {
        localStorage.setItem('zs_language', this.state.language);
        localStorage.setItem('zs_darkMode', JSON.stringify(this.state.darkMode));
        localStorage.setItem('zs_visitedSections', JSON.stringify(this.state.visitedSections));
    }

    updateVisitedSection(sectionId) {
        if (!this.state.visitedSections.includes(sectionId)) {
            this.state.visitedSections.push(sectionId);
            this.saveState();
        }
    }
}

const stateManager = new StateManager();
const state = stateManager.state;

// ===== CHAT WIDGET STATE WITH AI RESPONSES =====
class ChatManager {
    constructor() {
        this.state = {
            isOpen: false,
            unreadMessages: 0,
            messages: [],
            isTyping: false,
            sessionId: Date.now() + '_' + Math.random().toString(36).substr(2, 9)
        };
    }

    generateSessionId() {
        return 'zs_chat_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    saveChatHistory() {
        try {
            const chatData = {
                sessionId: this.state.sessionId,
                messages: this.state.messages,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem('zs_chat_history', JSON.stringify(chatData));
        } catch (e) {
            console.warn('Could not save chat history:', e);
        }
    }

    loadChatHistory() {
        try {
            const saved = localStorage.getItem('zs_chat_history');
            if (saved) {
                const data = JSON.parse(saved);
                // Load only recent messages (last 10)
                this.state.messages = data.messages.slice(-10);
            }
        } catch (e) {
            console.warn('Could not load chat history:', e);
        }
    }
}

const chatManager = new ChatManager();
const chatState = chatManager.state;

// ===== ADVANCED TRANSLATION SYSTEM =====
const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        services: "Services",
        projects: "Projects",
        testimonials: "Testimonials",
        contact: "Contact",

        // Hero Section
        welcome: "Professional Engineering Consultation Services",
        home_desc: "Zetsat Consultation (ZS) provides expert engineering solutions in construction, water projects, mining, roads, railways, and other infrastructure projects across Ethiopia and East Africa.",
        view_works: "View Our Projects",
        get_consultation: "Get Free Consultation",

        // Services
        service1: "Construction Consultation",
        service2: "Water Projects",
        service3: "Mining Engineering",
        service4: "Road & Railway Projects",
        service5: "Environmental Impact Assessment",
        service6: "Project Management",

        // Stats
        years_exp: "Years Experience",
        projects_completed: "Projects Completed",
        expert_consultants: "Expert Consultants",
        awards_won: "Awards Won",

        // About
        about_us: "About Zetsat Consultation",
        about_desc: "Founded in 2010 by Tesfaye Zegeye, Zetsat Consultation (ZS) has been at the forefront of engineering consultancy in Ethiopia for over 14 years. We provide comprehensive engineering solutions for government and private sector projects.",
        mission: "Our Mission",
        vision: "Our Vision",
        mission_text: "To provide innovative, sustainable, and cost-effective engineering solutions that drive development across Ethiopia.",
        vision_text: "To be East Africa's leading engineering consultancy firm by 2030.",
        founder: "Founder & Lead Consultant",

        // Features
        feature1: "ISO Certified Quality",
        feature2: "24/7 Project Support",
        feature3: "Multi-disciplinary Team",
        feature4: "Sustainable Solutions",
        feature5: "Budget Management",
        feature6: "Timely Delivery",

        // Projects
        our_projects: "Our Portfolio",
        view_all_projects: "View All Projects",
        project_location: "Location",
        project_client: "Client",
        project_duration: "Duration",
        project_status: "Status",
        status_completed: "Completed",
        status_ongoing: "Ongoing",
        status_upcoming: "Upcoming",

        // Testimonials
        client_testimonials: "What Our Clients Say",

        // Contact
        contact_us: "Get In Touch",
        get_in_touch: "Contact Information",
        working_hours: "Working Hours",
        hours_text: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed",
        send_message: "Send Message",
        request_consultation: "Request Consultation",
        full_name: "Full Name",
        email_address: "Email Address",
        phone_number: "Phone Number",
        select_service: "Select Service",
        project_details: "Project Details / Requirements",
        submit: "Submit Now",

        // Form Placeholders
        placeholder_name: "Enter your full name",
        placeholder_email: "Enter your email address",
        placeholder_phone: "Enter your phone number",
        placeholder_message: "Describe your project requirements...",

        // Form Services Options
        service_construction: "Construction Consultation",
        service_water: "Water Projects",
        service_mining: "Mining Engineering",
        service_road: "Road & Railway Projects",
        service_environmental: "Environmental Assessment",
        service_other: "Other Projects",

        // Footer
        about_company: "Zetsat Consultation (ZS)",
        footer_desc: "Leading engineering consultancy firm providing expert solutions in construction, water projects, mining, roads, and railways since 2010.",
        quick_links: "Quick Links",
        our_services: "Our Services",
        contact_info: "Contact Information",
        rights_reserved: "All rights reserved",
        developed_by: "Developed by Zetsat Team",
        privacy_policy: "Privacy Policy",
        terms_service: "Terms of Service",

        // Chat
        live_chat: "Live Chat Support",
        chat_welcome: "Hello! 👋 Welcome to Zetsat Consultation. How can we assist you today?",
        chat_subtitle: "Get instant answers from our engineering experts",
        typing: "Engineering expert is typing...",
        chat_via_phone: "For urgent matters, call us:",
        send: "Send",
        type_message: "Type your message here...",

        // Notifications
        success_message: "Message sent successfully! We'll contact you within 24 hours.",
        error_message: "Please fill all required fields correctly.",
        language_changed: "Language changed to English",
        form_submitted: "Consultation request submitted successfully!",

        // Search
        search_placeholder: "Search projects, services, or documents...",
        no_results: "No results found",
        search_results: "Search Results",

        // Common
        read_more: "Read More",
        learn_more: "Learn More",
        download_brochure: "Download Brochure",
        view_details: "View Details",
        close: "Close",
        loading: "Loading...",
        success: "Success!",
        error: "Error!",
        warning: "Warning!",
        info: "Information"
    },

    am: {
        // Navigation
        home: "መነሻ",
        about: "ስለኛ",
        services: "አገልግሎቶች",
        projects: "ፕሮጀክቶች",
        testimonials: "የደንበኞች አስተያየቶች",
        contact: "እውቂያ",

        // Hero Section
        welcome: "የምህንድስና እርዳታ አገልግሎቶች",
        home_desc: "ዘፀታት ኮንሳልቴሽን (ዘኤስ) በግንባታ፣ በውሃ ፕሮጀክቶች፣ በማዕድን፣ በመንገድ እና በባቡር ፕሮጀክቶች እና በሌሎች የመሠረተ ልማት ፕሮጀክቶች ልዩ የምህንድስና መፍትሄዎችን በሙሉ ኢትዮጵያ እና በምስራቅ አፍሪካ ያቀርባል።",
        view_works: "ፕሮጀክቶቻችንን ይመልከቱ",
        get_consultation: "ነፃ እርዳታ ያግኙ",

        // Services
        service1: "የግንባታ እርዳታ",
        service2: "የውሃ ፕሮጀክቶች",
        service3: "የማዕድን ምህንድስና",
        service4: "መንገድ እና ባቡር ፕሮጀክቶች",
        service5: "የአካባቢ ተጽእኖ ግምገማ",
        service6: "ፕሮጀክት አስተዳደር",

        // Stats
        years_exp: "ዓመታት ልምድ",
        projects_completed: "የተጠናቀቁ ፕሮጀክቶች",
        expert_consultants: "ባለሙያ አማካሪዎች",
        awards_won: "የተሸለሙ ሽልማቶች",

        // About
        about_us: "ስለ ዘፀታት ኮንሳልቴሽን",
        about_desc: "በ2010 ዓ.ም በተስፋየ ዘግየ የተመሠረተው ዘፀታት ኮንሳልቴሽን (ዘኤስ) ከ14 አመታት በላይ በኢትዮጵያ የምህንድስና እርዳታ ዘርፍ መሪ ነው። ለመንግሥት እና ለግል ዘርፍ ፕሮጀክቶች ሁሉን አቀፍ የምህንድስና መፍትሄዎችን እናቀርባለን።",
        mission: "ተልእኳችን",
        vision: "ራእያችን",
        mission_text: "በኢትዮጵያ ውስጥ ልማትን የሚያስተዋውቁ ሰለጠነ፣ ተዘላቂ እና ወጪ ቆጣቢ የምህንድስና መፍትሄዎችን ማቅረብ።",
        vision_text: "እስከ 2030 ዓ.ም በምስራቅ አፍሪካ አቀናባሪ የምህንድስና እርዳታ ድርጅት መሆን።",
        founder: "ማተኮሪያ እና ሊቀ መንበር",

        // Features
        feature1: "የአይኤስኦ የጥራት ዋስትና",
        feature2: "24/7 የፕሮጀክት ድጋፍ",
        feature3: "ባለብዙ ዘርፍ ቡድን",
        feature4: "ተዘላቂ መፍትሄዎች",
        feature5: "የበጀት አስተዳደር",
        feature6: "በጊዜ አቅርቦት",

        // Projects
        our_projects: "የእኛ ፖርትፎሊዮ",
        view_all_projects: "ሁሉንም ፕሮጀክቶች ይመልከቱ",
        project_location: "አካባቢ",
        project_client: "ደንበኛ",
        project_duration: "ጊዜ",
        project_status: "ሁኔታ",
        status_completed: "ተጠናቅቋል",
        status_ongoing: "በሂደት ላይ",
        status_upcoming: "የሚመጣ",

        // Testimonials
        client_testimonials: "ደንበኞቻችን ምን ይላሉ?",

        // Contact
        contact_us: "እውቂያ",
        get_in_touch: "የእውቂያ መረጃ",
        working_hours: "የሥራ ሰዓት",
        hours_text: "ሰኞ - ዓርብ: 8:00 ጥዋት - 6:00 ማታ\nቅዳሜ: 9:00 ጥዋት - 2:00 ከሰዓት\nእሁድ: ዕረፍት",
        send_message: "መልእክት ይላኩ",
        request_consultation: "እርዳታ ይጠይቁ",
        full_name: "ሙሉ ስም",
        email_address: "ኢሜይል አድራሻ",
        phone_number: "ስልክ ቁጥር",
        select_service: "አገልግሎት ይምረጡ",
        project_details: "የፕሮጀክት ዝርዝሮች / መስፈርቶች",
        submit: "አስገባ",

        // Form Placeholders
        placeholder_name: "ሙሉ ስምዎን ያስገቡ",
        placeholder_email: "ኢሜይል አድራሻዎን ያስገቡ",
        placeholder_phone: "ስልክ ቁጥርዎን ያስገቡ",
        placeholder_message: "የፕሮጀክትዎን መስፈርቶች ይግለጹ...",

        // Form Services Options
        service_construction: "የግንባታ እርዳታ",
        service_water: "የውሃ ፕሮጀክቶች",
        service_mining: "የማዕድን ምህንድስና",
        service_road: "መንገድ እና ባቡር ፕሮጀክቶች",
        service_environmental: "የአካባቢ ግምገማ",
        service_other: "ሌሎች ፕሮጀክቶች",

        // Footer
        about_company: "ዘፀታት ኮንሳልቴሽን (ዘኤስ)",
        footer_desc: "ከ2010 ዓ.ም ጀምሮ በግንባታ፣ የውሃ ፕሮጀክቶች፣ ማዕድን፣ መንገድ እና ባቡር ውስጥ ባለሙያ መፍትሄዎችን የሚያቀርብ አቀናባሪ የምህንድስና እርዳታ ድርጅት።",
        quick_links: "ፈጣን አገናኞች",
        our_services: "የኛ አገልግሎቶች",
        contact_info: "የእውቂያ መረጃ",
        rights_reserved: "ሁሉም መብቶች የተጠበቁ ናቸው",
        developed_by: "በዘፀታት ቡድን ተዘጋጅቷል",
        privacy_policy: "የግላዊነት ፖሊሲ",
        terms_service: "የአገልግሎት ውል",

        // Chat
        live_chat: "ቀጥታ የውይይት ድጋፍ",
        chat_welcome: "ሰላም! 👋 ወደ ዘፀታት ኮንሳልቴሽን እንኳን ደህና መጡ። ዛሬ እንዴት ልንርዳችሁ እንችላለን?",
        chat_subtitle: "ከምህንድስና ባለሙያዎቻችን ቅጣት መልስ ያግኙ",
        typing: "ምህንድስና ባለሙያ እየተወያየ ነው...",
        chat_via_phone: "ለአስቸኳይ ጉዳዮች፡ ይደውሉልን፡",
        send: "ላክ",
        type_message: "መልእክትዎን እዚህ ይፃፉ...",

        // Notifications
        success_message: "መልእክትዎ በሚገባ ተልኳል! በ24 ሰዓታት ውስጥ እናገኝዎታለን።",
        error_message: "እባክዎ ሁሉንም አስፈላጊ መስኮች በትክክል ይሙሉ።",
        language_changed: "ቋንቋ ወደ አማርኛ ተቀይሯል",
        form_submitted: "የእርዳታ ጥያቄዎ በሚገባ ተልኳል!",

        // Search
        search_placeholder: "ፕሮጀክቶች፣ አገልግሎቶች ወይም ሰነዶችን ይፈልጉ...",
        no_results: "ምንም ውጤት አልተገኘም",
        search_results: "የፍለጋ ውጤቶች",

        // Common
        read_more: "ተጨማሪ ያንብቡ",
        learn_more: "ተጨማሪ ይወቁ",
        download_brochure: "ቡሩሽር ያውርዱ",
        view_details: "ዝርዝሮችን ይመልከቱ",
        close: "ገጠመ",
        loading: "በመጫን ላይ...",
        success: "ተሳክቷል!",
        error: "ስህተት!",
        warning: "ማስጠንቀቂያ!",
        info: "መረጃ"
    }
};

// ===== ENHANCED TESTIMONIALS DATA =====
const testimonials = [
    {
        id: 1,
        name: "Ministry of Construction",
        role: "Government Department",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        content: "ZS Consultation provided exceptional expertise on our national infrastructure projects. Their team demonstrated remarkable technical proficiency and delivered results beyond expectations.",
        rating: 5,
        project: "National Infrastructure Development",
        date: "2023-11-15"
    },
    {
        id: 2,
        name: "Ethiopian Railways Corporation",
        role: "Transport Authority",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
        content: "Professional consultation for our railway expansion projects across the country. Their strategic planning and execution capabilities are truly commendable.",
        rating: 5,
        project: "Addis-Djibouti Railway Expansion",
        date: "2023-09-22"
    },
    {
        id: 3,
        name: "Water Resources Ministry",
        role: "Government Agency",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        content: "Expert guidance on water resource management and large-scale irrigation projects. Their sustainable solutions have transformed agricultural productivity in the region.",
        rating: 4,
        project: "Blue Nile Irrigation Project",
        date: "2023-08-10"
    },
    {
        id: 4,
        name: "National Mining Corporation",
        role: "Private Company",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        content: "Comprehensive mining engineering consultation and environmental assessment. Their attention to safety protocols and environmental compliance is outstanding.",
        rating: 5,
        project: "Tigray Mining Complex",
        date: "2023-07-05"
    },
    {
        id: 5,
        name: "Ethiopian Roads Authority",
        role: "Government Agency",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        content: "Professional team with excellent project management skills for highway projects. Their timely delivery and budget management are exemplary.",
        rating: 4,
        project: "Addis Ring Road Phase 2",
        date: "2023-06-18"
    },
    {
        id: 6,
        name: "Green Valley Developers",
        role: "Real Estate Company",
        image: "https://randomuser.me/api/portraits/women/26.jpg",
        content: "Reliable partner for all construction consultation needs. Their innovative designs and cost-effective solutions have significantly improved our project outcomes.",
        rating: 5,
        project: "Commercial Complex Development",
        date: "2023-05-12"
    }
];

// ===== ENHANCED PROJECTS DATA =====
const projects = [
    {
        id: 1,
        title: "Addis Ababa Industrial Park",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Comprehensive engineering consultation for 50,000 sqm industrial park with modern manufacturing facilities.",
        category: "construction",
        location: "Addis Ababa, Ethiopia",
        client: "Ethiopian Investment Commission",
        duration: "18 months",
        status: "completed",
        year: 2023
    },
    {
        id: 2,
        title: "Blue Nile Water Supply Project",
        image: "https://images.unsplash.com/photo-1508317465403-56f3a6cbdbb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Large-scale water supply system design serving 2 million residents across three regions.",
        category: "water",
        location: "Amhara Region, Ethiopia",
        client: "Water Resources Ministry",
        duration: "24 months",
        status: "ongoing",
        year: 2024
    },
    {
        id: 3,
        title: "Ethio-Djibouti Railway Corridor",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Railway infrastructure consultation for 756km international transport corridor.",
        category: "railway",
        location: "Dire Dawa to Djibouti",
        client: "Ethiopian Railways",
        duration: "36 months",
        status: "completed",
        year: 2022
    },
    {
        id: 4,
        title: "Tigray Mining Complex",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Mining engineering consultation with environmental impact assessment.",
        category: "mining",
        location: "Tigray Region, Ethiopia",
        client: "National Mining Corporation",
        duration: "12 months",
        status: "completed",
        year: 2023
    },
    {
        id: 5,
        title: "Addis Ring Road Phase 3",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Highway design and construction supervision for 45km urban expansion project.",
        category: "road",
        location: "Addis Ababa, Ethiopia",
        client: "Ethiopian Roads Authority",
        duration: "30 months",
        status: "ongoing",
        year: 2024
    },
    {
        id: 6,
        title: "Awash River Irrigation System",
        image: "https://images.unsplash.com/photo-1534278931827-8a259344abe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Large-scale irrigation system consultation for agricultural development.",
        category: "water",
        location: "Oromia Region, Ethiopia",
        client: "Agriculture Ministry",
        duration: "20 months",
        status: "upcoming",
        year: 2024
    }
];

// ===== ADVANCED SEARCH DATA =====
const searchData = [
    // Home Section
    { id: 1, title: "Home", description: "Main page with featured content", section: "home", category: "navigation" },

    // About Section
    { id: 2, title: "About Us", description: "Learn about our mission and team", section: "about", category: "company" },
    { id: 3, title: "Our Mission", description: "Company mission and vision", section: "about", category: "company" },
    { id: 4, title: "Our Team", description: "Meet our expert consultants", section: "about", category: "company" },

    // Services
    { id: 5, title: "Construction Consultation", description: "Expert construction advice and project management", section: "services", category: "services" },
    { id: 6, title: "Water Projects", description: "Water resource management and infrastructure", section: "services", category: "services" },
    { id: 7, title: "Mining Engineering", description: "Mining consultation and environmental assessment", section: "services", category: "services" },
    { id: 8, title: "Road & Railway Projects", description: "Transportation infrastructure design", section: "services", category: "services" },
    { id: 9, title: "Environmental Assessment", description: "Environmental impact studies", section: "services", category: "services" },
    { id: 10, title: "Project Management", description: "Complete project management services", section: "services", category: "services" },

    // Projects
    { id: 11, title: "Our Projects", description: "View our portfolio and case studies", section: "projects", category: "portfolio" },
    { id: 12, title: "Industrial Park", description: "Industrial infrastructure projects", section: "projects", category: "portfolio" },
    { id: 13, title: "Water Supply Systems", description: "Water infrastructure projects", section: "projects", category: "portfolio" },
    { id: 14, title: "Railway Projects", description: "Rail transportation projects", section: "projects", category: "portfolio" },
    { id: 15, title: "Mining Projects", description: "Mining and extraction projects", section: "projects", category: "portfolio" },

    // Testimonials
    { id: 16, title: "Testimonials", description: "Client reviews and feedback", section: "testimonials", category: "reviews" },
    { id: 17, title: "Client Feedback", description: "What our clients say about us", section: "testimonials", category: "reviews" },

    // Contact
    { id: 18, title: "Contact Us", description: "Get in touch with our team", section: "contact", category: "contact" },
    { id: 19, title: "Request Consultation", description: "Request free consultation", section: "contact", category: "contact" },
    { id: 20, title: "Get Quote", description: "Request project quotation", section: "contact", category: "contact" }
];

// ===== ELEMENT MANAGER =====
class ElementManager {
    constructor() {
        this.elements = {};
        this.cacheElements();
    }

    cacheElements() {
        // Navigation Elements
        this.elements.searchToggle = document.getElementById('searchToggle');
        this.elements.menuToggle = document.getElementById('menuToggle');
        this.elements.closeMenu = document.getElementById('closeMenu');
        this.elements.searchBar = document.getElementById('searchBar');
        this.elements.mobileMenu = document.getElementById('mobileMenu');
        this.elements.menuBackdrop = document.getElementById('menuBackdrop');

        // Search Elements
        this.elements.searchInput = document.getElementById('searchInput');
        this.elements.searchResults = document.getElementById('searchResults');
        this.elements.searchButton = document.getElementById('searchButton');

        // Language Elements
        this.elements.languageSelect = document.getElementById('languageSelect');
        this.elements.mobileLanguageSelect = document.getElementById('mobileLanguageSelect');

        // Content Elements
        this.elements.contactForm = document.getElementById('contactForm');
        this.elements.testimonialsSlider = document.querySelector('.swiper-wrapper');
        this.elements.projectsGrid = document.querySelector('.projects-grid');

        // Lightbox Elements
        this.elements.lightbox = document.getElementById('lightbox');
        this.elements.closeLightbox = document.querySelector('.close-lightbox');
        this.elements.lightboxImage = document.querySelector('.lightbox-image');
        this.elements.lightboxTitle = document.querySelector('.lightbox-title');
        this.elements.lightboxDescription = document.querySelector('.lightbox-description');

        // Desktop Navigation
        this.elements.desktopNav = document.querySelector('.desktop-nav');

        // Chat Elements
        this.elements.chatWidget = document.getElementById('liveChatWidget');
        this.elements.chatToggle = document.getElementById('chatToggle');
        this.elements.chatClose = document.getElementById('chatClose');
        this.elements.chatContainer = document.getElementById('chatContainer');
        this.elements.chatMessages = document.getElementById('chatMessages');
        this.elements.chatInput = document.getElementById('chatInput');
        this.elements.chatSend = document.getElementById('chatSend');
        this.elements.chatBadge = document.getElementById('messageBadge');
        this.elements.typingIndicator = document.getElementById('typingIndicator');
    }

    get(elementName) {
        return this.elements[elementName];
    }

    exists(elementName) {
        return !!this.elements[elementName];
    }
}

const elementManager = new ElementManager();

// ===== ANIMATION CONTROLLER =====
class AnimationController {
    constructor() {
        this.observer = null;
        this.initIntersectionObserver();
    }

    initIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    if (entry.target.classList.contains('stats-section')) {
                        this.animateStats();
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
    }

    observeElements(elements) {
        elements.forEach(el => {
            if (el) this.observer.observe(el);
        });
    }

    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + '+';
                }
            }, 16);
        });
    }

    fadeIn(element, duration = 300) {
        element.style.opacity = 0;
        element.style.display = 'block';

        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.min(progress / duration, 1);

            element.style.opacity = opacity;

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }

    fadeOut(element, duration = 300) {
        let start = null;
        const initialOpacity = parseFloat(window.getComputedStyle(element).opacity);

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.max(initialOpacity - (progress / duration), 0);

            element.style.opacity = opacity;

            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        };
        requestAnimationFrame(animate);
    }
}

const animationController = new AnimationController();

// ===== NOTIFICATION SYSTEM =====
class NotificationSystem {
    constructor() {
        this.notificationQueue = [];
        this.isShowing = false;
    }

    show(message, type = 'info', duration = 3000) {
        const notification = {
            id: Date.now(),
            message,
            type,
            duration
        };

        this.notificationQueue.push(notification);
        this.processQueue();
    }

    processQueue() {
        if (this.isShowing || this.notificationQueue.length === 0) return;

        this.isShowing = true;
        const notification = this.notificationQueue.shift();
        this.displayNotification(notification);
    }

    displayNotification(notification) {
        const notificationElement = document.createElement('div');
        notificationElement.className = `notification notification-${notification.type}`;
        notificationElement.innerHTML = `
            <div class="notification-content">
                <i class="fas ${this.getIconForType(notification.type)}"></i>
                <span>${notification.message}</span>
            </div>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        `;

        notificationElement.setAttribute('role', 'alert');
        notificationElement.setAttribute('aria-live', 'assertive');

        // Add styles
        notificationElement.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--surface);
            color: var(--text);
            padding: 16px 20px;
            border-radius: var(--radius);
            box-shadow: var(--shadow-lg);
            z-index: 9999;
            min-width: 300px;
            max-width: 400px;
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border-left: 4px solid ${this.getColorForType(notification.type)};
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;

        document.body.appendChild(notificationElement);

        // Animate in
        setTimeout(() => {
            notificationElement.style.transform = 'translateX(0)';
            notificationElement.style.opacity = '1';
        }, 10);

        // Close button
        notificationElement.querySelector('.notification-close').addEventListener('click', () => {
            this.closeNotification(notificationElement);
        });

        // Auto close
        const autoClose = setTimeout(() => {
            this.closeNotification(notificationElement);
        }, notification.duration);

        // Hover behavior
        notificationElement.addEventListener('mouseenter', () => {
            clearTimeout(autoClose);
        });

        notificationElement.addEventListener('mouseleave', () => {
            setTimeout(() => {
                this.closeNotification(notificationElement);
            }, 1000);
        });
    }

    closeNotification(element) {
        element.style.transform = 'translateX(100%)';
        element.style.opacity = '0';

        setTimeout(() => {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
            this.isShowing = false;
            this.processQueue();
        }, 300);
    }

    getIconForType(type) {
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };
        return icons[type] || icons.info;
    }

    getColorForType(type) {
        const colors = {
            success: '#2ecc71',
            error: '#e74c3c',
            warning: '#f39c12',
            info: '#3498db'
        };
        return colors[type] || colors.info;
    }
}

const notificationSystem = new NotificationSystem();

// ===== FORM VALIDATOR =====
class FormValidator {
    constructor() {
        this.rules = {
            name: { required: true, minLength: 2, maxLength: 50, pattern: /^[a-zA-Z\s]+$/ },
            email: { required: false, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
            phone: { required: true, pattern: /^[\d\s\-\+\(\)]{10,20}$/ },
            message: { required: true, minLength: 10, maxLength: 1000 }
        };
    }

    validateField(field, value) {
        const rule = this.rules[field];
        if (!rule) return { valid: true, message: '' };

        if (rule.required && !value.trim()) {
            return {
                valid: false,
                message: state.language === 'en'
                    ? `This field is required`
                    : `ይህ መስክ አስፈላጊ ነው`
            };
        }

        if (rule.minLength && value.length < rule.minLength) {
            return {
                valid: false,
                message: state.language === 'en'
                    ? `Minimum ${rule.minLength} characters required`
                    : `ከ${rule.minLength} በላይ ፊደሎች ያስፈልጋሉ`
            };
        }

        if (rule.maxLength && value.length > rule.maxLength) {
            return {
                valid: false,
                message: state.language === 'en'
                    ? `Maximum ${rule.maxLength} characters allowed`
                    : `ከ${rule.maxLength} በላይ ፊደሎች አይፈቀዱም`
            };
        }

        if (rule.pattern && !rule.pattern.test(value)) {
            return {
                valid: false,
                message: state.language === 'en'
                    ? `Please enter a valid ${field}`
                    : `እባክዎ ትክክለኛ ${field} ያስገቡ`
            };
        }

        return { valid: true, message: '' };
    }

    validateForm(formData) {
        const errors = {};
        let isValid = true;

        Object.keys(formData).forEach(field => {
            const validation = this.validateField(field, formData[field]);
            if (!validation.valid) {
                errors[field] = validation.message;
                isValid = false;
            }
        });

        return { isValid, errors };
    }

    showFieldError(field, message) {
        const fieldElement = document.getElementById(field);
        if (!fieldElement) return;

        // Remove existing error
        const existingError = fieldElement.parentElement.querySelector('.field-error');
        if (existingError) existingError.remove();

        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: #e74c3c;
            font-size: 0.85rem;
            margin-top: 5px;
            display: flex;
            align-items: center;
            gap: 5px;
        `;

        fieldElement.parentElement.appendChild(errorElement);
        fieldElement.style.borderColor = '#e74c3c';

        // Remove error on input
        fieldElement.addEventListener('input', () => {
            errorElement.remove();
            fieldElement.style.borderColor = '';
        }, { once: true });
    }

    clearErrors() {
        document.querySelectorAll('.field-error').forEach(el => el.remove());
        document.querySelectorAll('input, textarea, select').forEach(el => {
            el.style.borderColor = '';
        });
    }
}

const formValidator = new FormValidator();

// ===== ADVANCED TRANSLATION MANAGER =====
class TranslationManager {
    constructor() {
        this.currentLanguage = state.language;
        this.translations = translations;
        this.initializeLanguage();
    }

    initializeLanguage() {
        const savedLanguage = localStorage.getItem('zs_language');
        if (savedLanguage && this.translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
            state.language = savedLanguage;
        }
        this.applyLanguage();
    }

    applyLanguage() {
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage;

        // Update all translatable elements
        this.updateTranslatableElements();

        // Update placeholders and form elements
        this.updateFormElements();

        // Update chat
        this.updateChatElements();

        // Update direction for RTL languages
        this.updateTextDirection();

        // Save language preference
        localStorage.setItem('zs_language', this.currentLanguage);
        state.language = this.currentLanguage;

        // Show notification
        const message = this.currentLanguage === 'en'
            ? "Language changed to English"
            : "ቋንቋ ወደ አማርኛ ተቀይሯል";
        notificationSystem.show(message, 'success');
    }

    updateTranslatableElements() {
        // Update data-translate elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[this.currentLanguage][key]) {
                element.textContent = this.translations[this.currentLanguage][key];
            }
        });

        // Update data-translate-title elements
        document.querySelectorAll('[data-translate-title]').forEach(element => {
            const key = element.getAttribute('data-translate-title');
            if (this.translations[this.currentLanguage][key]) {
                element.title = this.translations[this.currentLanguage][key];
            }
        });

        // Update data-translate-placeholder elements
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (this.translations[this.currentLanguage][key]) {
                element.placeholder = this.translations[this.currentLanguage][key];
            }
        });
    }

    updateFormElements() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        const serviceSelect = document.getElementById('service');

        if (this.currentLanguage === 'am') {
            // Update placeholders
            if (nameInput) nameInput.placeholder = this.translations.am.placeholder_name;
            if (emailInput) emailInput.placeholder = this.translations.am.placeholder_email;
            if (phoneInput) phoneInput.placeholder = this.translations.am.placeholder_phone;
            if (messageInput) messageInput.placeholder = this.translations.am.placeholder_message;

            // Update service select options
            if (serviceSelect) {
                serviceSelect.innerHTML = `
                    <option value="">${this.translations.am.select_service}</option>
                    <option value="construction">${this.translations.am.service_construction}</option>
                    <option value="water">${this.translations.am.service_water}</option>
                    <option value="mining">${this.translations.am.service_mining}</option>
                    <option value="road">${this.translations.am.service_road}</option>
                    <option value="environmental">${this.translations.am.service_environmental}</option>
                    <option value="other">${this.translations.am.service_other}</option>
                `;
            }
        } else {
            // English
            if (nameInput) nameInput.placeholder = this.translations.en.placeholder_name;
            if (emailInput) emailInput.placeholder = this.translations.en.placeholder_email;
            if (phoneInput) phoneInput.placeholder = this.translations.en.placeholder_phone;
            if (messageInput) messageInput.placeholder = this.translations.en.placeholder_message;

            if (serviceSelect) {
                serviceSelect.innerHTML = `
                    <option value="">${this.translations.en.select_service}</option>
                    <option value="construction">${this.translations.en.service_construction}</option>
                    <option value="water">${this.translations.en.service_water}</option>
                    <option value="mining">${this.translations.en.service_mining}</option>
                    <option value="road">${this.translations.en.service_road}</option>
                    <option value="environmental">${this.translations.en.service_environmental}</option>
                    <option value="other">${this.translations.en.service_other}</option>
                `;
            }
        }
    }

    updateChatElements() {
        const chatInput = elementManager.get('chatInput');
        if (chatInput) {
            chatInput.placeholder = this.currentLanguage === 'am'
                ? this.translations.am.type_message
                : this.translations.en.type_message;
        }
    }

    updateTextDirection() {
        // Amharic uses LTR like English
        document.body.classList.remove('rtl', 'ltr');
        document.body.classList.add('ltr');

        if (this.currentLanguage === 'am') {
            document.body.classList.add('amharic');
            document.body.classList.remove('english');
        } else {
            document.body.classList.add('english');
            document.body.classList.remove('amharic');
        }
    }

    changeLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            this.applyLanguage();

            // Update language selectors
            const languageSelect = elementManager.get('languageSelect');
            const mobileLanguageSelect = elementManager.get('mobileLanguageSelect');

            if (languageSelect) languageSelect.value = lang;
            if (mobileLanguageSelect) mobileLanguageSelect.value = lang;

            return true;
        }
        return false;
    }

    getTranslation(key, lang = this.currentLanguage) {
        return this.translations[lang]?.[key] || key;
    }
}

const translationManager = new TranslationManager();

// ===== ENHANCED SWIPER INITIALIZATION =====
function initSwiper() {
    if (!elementManager.get('testimonialsSlider')) return null;

    const swiper = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 800,
        effect: 'slide',
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        on: {
            init: function () {
                console.log('Swiper initialized successfully');
            }
        }
    });

    return swiper;
}

// ===== ENHANCED TESTIMONIALS LOADER =====
function loadTestimonials() {
    const slider = elementManager.get('testimonialsSlider');
    if (!slider) return;

    slider.innerHTML = '';
    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide testimonial-slide';
        slide.setAttribute('data-testimonial-id', testimonial.id);
        slide.innerHTML = `
            <div class="testimonial-content">
                <div class="testimonial-text">"${testimonial.content}"</div>
                <div class="testimonial-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
                    ${testimonial.rating < 5 ? '<i class="far fa-star"></i>'.repeat(5 - testimonial.rating) : ''}
                </div>
            </div>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="author-image" loading="lazy">
                <div class="author-info">
                    <h4 class="author-name">${testimonial.name}</h4>
                    <p class="author-role">${testimonial.role}</p>
                    <p class="author-project"><small>${testimonial.project}</small></p>
                </div>
            </div>
        `;
        slider.appendChild(slide);
    });

    // Re-initialize swiper after loading testimonials
    setTimeout(() => {
        const swiper = initSwiper();
        if (swiper) {
            swiper.update();
        }
    }, 100);
}

// ===== ENHANCED PROJECTS LOADER =====
function loadProjects() {
    const grid = elementManager.get('projectsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-project-id', project.id);
        projectCard.setAttribute('data-category', project.category);

        projectCard.innerHTML = `
            <div class="project-card-inner">
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
                    <div class="project-status ${project.status}">
                        <span>${translationManager.getTranslation(`status_${project.status}`)}</span>
                    </div>
                    <div class="project-overlay">
                        <div class="overlay-content">
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-description">${project.description}</p>
                            <div class="project-meta">
                                <div class="meta-item">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>${project.location}</span>
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-calendar-alt"></i>
                                    <span>${project.year}</span>
                                </div>
                            </div>
                            <button class="view-project-btn" data-project-id="${project.id}">
                                ${translationManager.getTranslation('view_details')}
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-category">${translationManager.getTranslation(`service_${project.category}`)}</div>
                </div>
            </div>
        `;

        grid.appendChild(projectCard);
    });

    // Add click event to view project buttons
    document.querySelectorAll('.view-project-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const projectId = this.getAttribute('data-project-id');
            viewProjectDetails(projectId);
        });
    });

    // Add click event to project cards for lightbox
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function () {
            const projectId = this.getAttribute('data-project-id');
            const project = projects.find(p => p.id == projectId);
            if (project) {
                openProjectLightbox(project);
            }
        });
    });
}

// ===== PROJECT LIGHTBOX =====
function openProjectLightbox(project) {
    const lightbox = elementManager.get('lightbox');
    const lightboxImage = elementManager.get('lightboxImage');
    const lightboxTitle = elementManager.get('lightboxTitle');
    const lightboxDescription = elementManager.get('lightboxDescription');

    if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxDescription) return;

    lightboxImage.src = project.image;
    lightboxImage.alt = project.title;
    lightboxTitle.textContent = project.title;

    lightboxDescription.innerHTML = `
        <p><strong>${translationManager.getTranslation('project_description')}:</strong> ${project.description}</p>
        <p><strong>${translationManager.getTranslation('project_location')}:</strong> ${project.location}</p>
        <p><strong>${translationManager.getTranslation('project_client')}:</strong> ${project.client}</p>
        <p><strong>${translationManager.getTranslation('project_duration')}:</strong> ${project.duration}</p>
        <p><strong>${translationManager.getTranslation('project_status')}:</strong> 
            <span class="status ${project.status}">${translationManager.getTranslation(`status_${project.status}`)}</span>
        </p>
    `;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = elementManager.get('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function viewProjectDetails(projectId) {
    const project = projects.find(p => p.id == projectId);
    if (project) {
        openProjectLightbox(project);
    }
}

// ===== ADVANCED FORM HANDLER =====
async function handleFormSubmit(e) {
    e.preventDefault();

    if (!elementManager.get('contactForm')) return;

    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        service: document.getElementById('service').value,
        message: document.getElementById('message').value.trim()
    };

    // Clear previous errors
    formValidator.clearErrors();

    // Validate form
    const validation = formValidator.validateForm(formData);
    if (!validation.isValid) {
        Object.keys(validation.errors).forEach(field => {
            formValidator.showFieldError(field, validation.errors[field]);
        });
        notificationSystem.show(
            translationManager.getTranslation('error_message'),
            'error'
        );
        return;
    }

    // Show loading state
    const submitButton = elementManager.get('contactForm').querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${translationManager.getTranslation('loading')}`;
    submitButton.disabled = true;

    try {
        // Simulate API call
        await simulateAPIRequest(formData);

        // Show success message
        notificationSystem.show(
            translationManager.getTranslation('success_message'),
            'success'
        );

        // Reset form
        elementManager.get('contactForm').reset();

        // Track form submission
        trackFormSubmission(formData);

    } catch (error) {
        notificationSystem.show(
            state.language === 'en'
                ? 'Failed to submit form. Please try again.'
                : 'ቅጹን መላክ አልተቻለም። እባክዎ እንደገና ይሞክሩ።',
            'error'
        );
        console.error('Form submission error:', error);
    } finally {
        // Restore button state
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
}

function simulateAPIRequest(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate 90% success rate
            Math.random() < 0.9 ? resolve(data) : reject(new Error('Network error'));
        }, 1500);
    });
}

function trackFormSubmission(data) {
    // In a real application, you would send this to your analytics
    console.log('Form submitted:', {
        ...data,
        timestamp: new Date().toISOString(),
        language: state.language,
        userAgent: navigator.userAgent
    });

    // Save to localStorage for demo purposes
    const submissions = JSON.parse(localStorage.getItem('zs_form_submissions') || '[]');
    submissions.push({
        ...data,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('zs_form_submissions', JSON.stringify(submissions.slice(-50))); // Keep last 50
}

// ===== ADVANCED CHAT SYSTEM =====
class AdvancedChatSystem {
    constructor() {
        this.aiResponses = {
            en: [
                "Thank you for reaching out to Zetsat Consultation! Our engineering experts will review your inquiry and get back to you within 24 hours.",
                "We specialize in construction, water projects, mining, and transportation infrastructure. Could you specify which area you need assistance with?",
                "For immediate assistance with urgent projects, please call our hotline at +251 99 260 0682.",
                "Would you like us to schedule a free consultation meeting to discuss your project requirements in detail?",
                "We have extensive experience with government and private sector projects across Ethiopia. Can you share more details about your specific needs?",
                "Our team is available to provide on-site assessment and project evaluation. Would you like to arrange a site visit?"
            ],
            am: [
                "ዘፀታት ኮንሳልቴሽን እንደገና እንኳን በደህና መጡ! የኛ የምህንድስና ባለሙያዎች ጥያቄዎን ያጣራሉ እና በ24 ሰዓታት ውስጥ ከእርስዎ ጋር ይገናኛሉ።",
                "በግንባታ፣ በውሃ ፕሮጀክቶች፣ በማዕድን እና በትራንስፖርት መሠረተ ልማት ልዩ ነን። እባክዎ በየትኛው አካባቢ እርዳታ እንደሚያስፈልግዎ ይግለጹ?",
                "ለአስቸኳይ ፕሮጀክቶች ቅጣት እርዳታ እባክዎን የኛ የቀጥታ ስልክ ቁጥር +251 99 260 0682 ይደውሉ።",
                "የፕሮጀክትዎን መስፈርቶች በዝርዝር ለመወያየት ነፃ የእርዳታ ስብሰባ ለመያዝ ይፈልጋሉ?",
                "በሙሉ ኢትዮጵያ ውስጥ ከመንግሥት እና ከግል ዘርፍ ፕሮጀክቶች ጋር ከፍተኛ ልምድ አለን። ስለ የተለየ ፍላጎትዎ ተጨማሪ ዝርዝር ሊያካፍሉን ይችላሉ?",
                "የኛ ቡድን በቦታው ላይ ግምገማ እና የፕሮጀክት ግምገማ ለመስጠት ዝግጁ ነው። የቦታ ጉብኝት ለማዘጋጀት ይፈልጋሉ?"
            ]
        };
    }

    generateAIResponse() {
        const responses = this.aiResponses[state.language];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    sendMessage() {
        const chatInput = elementManager.get('chatInput');
        if (!chatInput) return;

        const text = chatInput.value.trim();
        if (!text) return;

        // Add user message
        this.addMessage(text, 'user');
        chatInput.value = '';

        // Show typing indicator
        this.showTypingIndicator(true);

        // Generate AI response after delay
        setTimeout(() => {
            this.showTypingIndicator(false);
            const aiResponse = this.generateAIResponse();
            this.addMessage(aiResponse, 'bot');
            chatManager.saveChatHistory();
        }, 1500 + Math.random() * 1000);
    }

    addMessage(text, sender) {
        const chatMessages = elementManager.get('chatMessages');
        if (!chatMessages) return;

        const message = {
            text,
            sender,
            timestamp: new Date(),
            id: Date.now() + '_' + Math.random().toString(36).substr(2, 9)
        };

        chatState.messages.push(message);

        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${sender}`;
        messageElement.setAttribute('data-message-id', message.id);

        const timeString = message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

        messageElement.innerHTML = `
            <div class="message-content">
                <div class="message-text">${this.escapeHTML(text)}</div>
                <div class="message-time">${timeString}</div>
            </div>
        `;

        chatMessages.appendChild(messageElement);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // If chat is closed, increment badge
        if (!chatState.isOpen && sender === 'bot') {
            chatState.unreadMessages++;
            this.updateChatBadge();
        }

        // Save chat history
        chatManager.saveChatHistory();
    }

    showTypingIndicator(show = true) {
        chatState.isTyping = show;
        const typingIndicator = elementManager.get('typingIndicator');
        if (typingIndicator) {
            typingIndicator.style.display = show ? 'block' : 'none';
            if (show) {
                typingIndicator.textContent = translationManager.getTranslation('typing');
            }
        }
    }

    updateChatBadge() {
        const chatBadge = elementManager.get('chatBadge');
        if (chatBadge) {
            chatBadge.textContent = chatState.unreadMessages;
            chatBadge.style.display = chatState.unreadMessages > 0 ? 'flex' : 'none';
        }
    }

    escapeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    loadInitialMessages() {
        // Add welcome message
        this.addMessage(
            translationManager.getTranslation('chat_welcome'),
            'bot'
        );
    }
}

const chatSystem = new AdvancedChatSystem();

// ===== EVENT HANDLER =====
class EventHandler {
    constructor() {
        this.debounceTimers = {};
    }

    debounce(func, wait = 300) {
        return (...args) => {
            clearTimeout(this.debounceTimers[func.name]);
            this.debounceTimers[func.name] = setTimeout(() => func.apply(this, args), wait);
        };
    }

    throttle(func, limit = 300) {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    initializeEvents() {
        // Menu events
        if (elementManager.get('menuToggle')) {
            elementManager.get('menuToggle').addEventListener('click', () => this.toggleMenu());
        }

        if (elementManager.get('closeMenu')) {
            elementManager.get('closeMenu').addEventListener('click', () => this.closeMenu());
        }

        if (elementManager.get('menuBackdrop')) {
            elementManager.get('menuBackdrop').addEventListener('click', () => this.closeMenu());
        }

        // Search events
        if (elementManager.get('searchToggle')) {
            elementManager.get('searchToggle').addEventListener('click', () => this.toggleSearch());
        }

        if (elementManager.get('searchButton')) {
            elementManager.get('searchButton').addEventListener('click', () => this.performSearch());
        }

        if (elementManager.get('searchInput')) {
            elementManager.get('searchInput').addEventListener('input',
                this.debounce(this.performSearch, 300)
            );

            elementManager.get('searchInput').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.performSearch();
                }
            });
        }

        // Language selection
        if (elementManager.get('languageSelect')) {
            elementManager.get('languageSelect').addEventListener('change', (e) => {
                translationManager.changeLanguage(e.target.value);
            });
        }

        if (elementManager.get('mobileLanguageSelect')) {
            elementManager.get('mobileLanguageSelect').addEventListener('change', (e) => {
                translationManager.changeLanguage(e.target.value);
            });
        }

        // Form submission
        if (elementManager.get('contactForm')) {
            elementManager.get('contactForm').addEventListener('submit', (e) => handleFormSubmit(e));
        }

        // Lightbox
        if (elementManager.get('closeLightbox')) {
            elementManager.get('closeLightbox').addEventListener('click', closeLightbox);
        }

        if (elementManager.get('lightbox')) {
            elementManager.get('lightbox').addEventListener('click', (e) => {
                if (e.target === elementManager.get('lightbox')) {
                    closeLightbox();
                }
            });
        }

        // Chat events
        if (elementManager.get('chatToggle')) {
            elementManager.get('chatToggle').addEventListener('click', () => this.toggleChat());
        }

        if (elementManager.get('chatClose')) {
            elementManager.get('chatClose').addEventListener('click', () => this.closeChat());
        }

        if (elementManager.get('chatInput')) {
            elementManager.get('chatInput').addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    chatSystem.sendMessage();
                }
            });
        }

        if (elementManager.get('chatSend')) {
            elementManager.get('chatSend').addEventListener('click', () => chatSystem.sendMessage());
        }

        // Global events
        this.initializeGlobalEvents();
    }

    toggleMenu() {
        state.isMenuOpen = !state.isMenuOpen;

        const mobileMenu = elementManager.get('mobileMenu');
        const menuBackdrop = elementManager.get('menuBackdrop');
        const menuToggle = elementManager.get('menuToggle');

        if (mobileMenu) mobileMenu.classList.toggle('active', state.isMenuOpen);
        if (menuBackdrop) menuBackdrop.classList.toggle('active', state.isMenuOpen);
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', state.isMenuOpen);
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        }

        document.body.style.overflow = state.isMenuOpen ? 'hidden' : '';
    }

    closeMenu() {
        if (state.isMenuOpen) {
            this.toggleMenu();
        }
    }

    toggleSearch() {
        state.isSearchOpen = !state.isSearchOpen;

        const searchBar = elementManager.get('searchBar');
        const searchToggle = elementManager.get('searchToggle');

        if (searchBar) searchBar.classList.toggle('active', state.isSearchOpen);
        if (searchToggle) searchToggle.setAttribute('aria-expanded', state.isSearchOpen);

        if (state.isSearchOpen) {
            const searchInput = elementManager.get('searchInput');
            if (searchInput) {
                searchInput.focus();
            }
            this.closeMenu();
        } else {
            if (elementManager.get('searchInput')) {
                elementManager.get('searchInput').value = '';
            }
            if (elementManager.get('searchResults')) {
                elementManager.get('searchResults').innerHTML = '';
            }
        }
    }

    closeSearch() {
        if (state.isSearchOpen) {
            this.toggleSearch();
        }
    }

    performSearch() {
        const searchInput = elementManager.get('searchInput');
        const searchResults = elementManager.get('searchResults');

        if (!searchInput || !searchResults) return;

        const query = searchInput.value.toLowerCase().trim();

        if (!query) {
            searchResults.innerHTML = '';
            return;
        }

        const filtered = searchData.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>${translationManager.getTranslation('no_results')} "${query}"</p>
                </div>
            `;
            return;
        }

        searchResults.innerHTML = `
            <div class="search-header">
                <h4>${translationManager.getTranslation('search_results')} (${filtered.length})</h4>
            </div>
            ${filtered.map(item => `
                <div class="result-item" role="button" tabindex="0" onclick="navigateToSection('${item.section}'); closeSearch();">
                    <div class="result-content">
                        <strong class="result-title">${item.title}</strong>
                        <p class="result-description">${item.description}</p>
                        <span class="result-category">${item.category}</span>
                    </div>
                    <i class="fas fa-chevron-right"></i>
                </div>
            `).join('')}
        `;
    }

    toggleChat() {
        chatState.isOpen = !chatState.isOpen;

        const chatContainer = elementManager.get('chatContainer');
        const chatToggle = elementManager.get('chatToggle');

        if (chatContainer) chatContainer.classList.toggle('active', chatState.isOpen);
        if (chatToggle) chatToggle.setAttribute('aria-expanded', chatState.isOpen);

        if (chatState.isOpen) {
            const chatInput = elementManager.get('chatInput');
            if (chatInput) {
                chatInput.focus();
            }
            // Reset unread count when chat opens
            chatState.unreadMessages = 0;
            chatSystem.updateChatBadge();
        }
    }

    closeChat() {
        if (chatState.isOpen) {
            this.toggleChat();
        }
    }

    initializeGlobalEvents() {
        // Close search when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-bar') &&
                !e.target.closest('.search-icon') &&
                state.isSearchOpen) {
                this.closeSearch();
            }

            // Close chat when clicking outside
            if (elementManager.get('chatWidget') &&
                !e.target.closest('.chat-container') &&
                !e.target.closest('.chat-toggle') &&
                chatState.isOpen) {
                this.closeChat();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K for search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.toggleSearch();
            }

            // Escape key closes modals
            if (e.key === 'Escape') {
                if (state.isSearchOpen) this.closeSearch();
                if (state.isMenuOpen) this.closeMenu();
                if (elementManager.get('lightbox') && elementManager.get('lightbox').classList.contains('active')) closeLightbox();
                if (chatState.isOpen) this.closeChat();
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

        // Desktop navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const sectionId = this.getAttribute('href').substring(1);
                navigateToSection(sectionId);
            });
        });

        // Scroll events
        window.addEventListener('scroll', this.throttle(this.handleScroll, 100));

        // Resize handler
        window.addEventListener('resize', this.debounce(this.handleResize, 250));

        // Online/offline detection
        window.addEventListener('online', () => {
            notificationSystem.show(
                state.language === 'en'
                    ? 'You are back online'
                    : 'ከኢንተርኔት ጋር ተገናኝተዋል',
                'success'
            );
        });

        window.addEventListener('offline', () => {
            notificationSystem.show(
                state.language === 'en'
                    ? 'You are offline. Some features may not work.'
                    : 'ከኢንተርኔት ተለይተዋል። አንዳንድ ባህሪያት ላይሰሩ ይችላሉ።',
                'warning'
            );
        });
    }

    handleScroll() {
        // Header scroll effect
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

        // Scroll spy for active menu items
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = sectionId;
                stateManager.updateVisitedSection(sectionId);
            }
        });

        // Update active state for both desktop and mobile menus
        document.querySelectorAll('.nav-link, .menu-link').forEach(link => {
            link.classList.remove('active');
            const linkSection = link.getAttribute('href').substring(1);
            if (linkSection === currentSection) {
                link.classList.add('active');
            } else if (!currentSection && linkSection === 'home') {
                link.classList.add('active');
            }
        });
    }

    handleResize() {
        // Update language select text for small screens
        const langSelect = elementManager.get('languageSelect');
        const mobileLangSelect = elementManager.get('mobileLanguageSelect');

        if (window.innerWidth <= 320) {
            if (langSelect) {
                langSelect.querySelector('option[value="en"]').textContent = 'ENG';
                langSelect.querySelector('option[value="am"]').textContent = 'AM';
            }
            if (mobileLangSelect) {
                mobileLangSelect.querySelector('option[value="en"]').textContent = 'ENG';
                mobileLangSelect.querySelector('option[value="am"]').textContent = 'AM';
            }
        } else {
            if (langSelect) {
                langSelect.querySelector('option[value="en"]').textContent = 'English';
                langSelect.querySelector('option[value="am"]').textContent = 'አማርኛ';
            }
            if (mobileLangSelect) {
                mobileLangSelect.querySelector('option[value="en"]').textContent = 'English';
                mobileLangSelect.querySelector('option[value="am"]').textContent = 'አማርኛ';
            }
        }

        // Close mobile menu on large screens
        if (window.innerWidth >= 1024 && state.isMenuOpen) {
            this.closeMenu();
        }
    }
}

const eventHandler = new EventHandler();

// ===== NAVIGATION FUNCTION =====
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        eventHandler.closeMenu();
        eventHandler.closeSearch();
        stateManager.updateVisitedSection(sectionId);
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('Zetsat Consultation (ZS) - Initializing...');

    // Initialize components in order
    try {
        // 1. Load translations
        translationManager.applyLanguage();

        // 2. Load content
        loadTestimonials();
        loadProjects();

        // 3. Initialize chat
        chatSystem.loadInitialMessages();
        chatManager.loadChatHistory();

        // 4. Initialize animations
        animationController.observeElements(document.querySelectorAll('.feature-card, section, .service-card'));

        // 5. Initialize events
        eventHandler.initializeEvents();

        // 6. Animate stats when visible
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animationController.animateStats();
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            statsObserver.observe(statsSection);
        }

        // 7. PWA Support
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('ServiceWorker registration successful:', registration);
                    })
                    .catch(err => {
                        console.log('ServiceWorker registration failed:', err);
                    });
            });
        }

        // 8. Install prompt
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            console.log('PWA install prompt available');
            // You can save this event for later use
            window.deferredPrompt = e;
        });

        console.log('Zetsat Consultation (ZS) - Initialization complete!');

    } catch (error) {
        console.error('Initialization error:', error);
        notificationSystem.show(
            state.language === 'en'
                ? 'Error initializing application. Please refresh the page.'
                : 'መተግበሪያውን ለማስጀመር ስህተት። እባክዎ ገጹን ያድሱ።',
            'error'
        );
    }
});

// ===== GLOBAL FUNCTIONS =====
window.navigateToSection = navigateToSection;
window.closeLightbox = closeLightbox;
window.changeLanguage = (lang) => translationManager.changeLanguage(lang);
window.toggleMenu = () => eventHandler.toggleMenu();
window.toggleSearch = () => eventHandler.toggleSearch();
window.toggleChat = () => eventHandler.toggleChat();

// ===== PERFORMANCE MONITORING =====
if (typeof PerformanceObserver !== 'undefined') {
    const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach(entry => {
            console.log(`${entry.name}: ${entry.duration}ms`);
        });
    });

    observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });
}

// ===== ERROR BOUNDARY =====
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    notificationSystem.show(
        state.language === 'en'
            ? 'An unexpected error occurred. Please try again.'
            : 'ያልተጠበቀ ስህተት ተከስቷል። እባክዎ እንደገና ይሞክሩ።',
        'error'
    );
});

console.log('Zetsat Consultation (ZS) JavaScript loaded successfully!');