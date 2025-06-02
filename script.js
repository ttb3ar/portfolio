// Language translations
const translations = {
  en: {
    // Navigation
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    
    // Hero Section
    'hero-greeting': 'Hello, I\'m',
    'hero-subtitle': 'Full-Stack Developer & Security Enthusiast',
    'hero-description': 'I create secure, elegant web applications with a focus on user experience and modern technologies.',
    'hero-projects-btn': 'My Projects',
    'hero-contact-btn': 'Get In Touch',
    
    // About Section
    'about-title': 'About Me',
    'about-text-1': 'I\'m a passionate developer who loves creating secure, user-friendly applications. My expertise spans across web development, cryptography, and modern JavaScript frameworks.',
    'about-text-2': 'I believe in writing clean, maintainable code and designing intuitive user interfaces that provide exceptional user experiences across all devices and platforms.',
    'skills-title': 'Technical Skills',
    'skill-crypto': 'Cryptography',
    'skill-responsive': 'Responsive Design',
    'skill-security': 'Security',
    'stat-projects': 'Projects',
    'stat-secure': 'Secure',
    'stat-learning': 'Learning',
    
    // Projects Section
    'projects-title': 'Featured Projects',
    'project-1-title': 'AES Encryption Tool',
    'project-1-desc': 'Secure client-side text encryption and decryption tool with modern UI and multilingual support.',
    'project-1-live': 'Live Demo',
    'project-2-title': 'Coming Soon',
    'project-2-desc': 'More exciting projects are in development. Stay tuned for updates!',
    'project-2-coming': 'In Development',
    
    // Contact Section
    'contact-title': 'Get In Touch',
    'contact-text': 'I\'m always interested in new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!',
    'contact-email': 'Email',
    
    // Footer
    'footer-text': '© 2025 TTB3AR. Built with passion and security in mind.',
    'footer-top': 'Back to Top'
  },
  jp: {
    // Navigation
    'nav-home': 'ホーム',
    'nav-about': '自己紹介',
    'nav-projects': 'プロジェクト',
    'nav-contact': 'お問い合わせ',
    
    // Hero Section
    'hero-greeting': 'こんにちは、私は',
    'hero-subtitle': 'フルスタック開発者・セキュリティ愛好家',
    'hero-description': 'ユーザーエクスペリエンスと最新技術に焦点を当てた、安全でエレガントなWebアプリケーションを作成しています。',
    'hero-projects-btn': 'プロジェクト',
    'hero-contact-btn': 'お問い合わせ',
    
    // About Section
    'about-title': '自己紹介',
    'about-text-1': '私は安全でユーザーフレンドリーなアプリケーションの作成を愛する情熱的な開発者です。Web開発、暗号化、現代のJavaScriptフレームワークに渡る専門知識を持っています。',
    'about-text-2': 'クリーンで保守可能なコードを書き、すべてのデバイスとプラットフォームで優れたユーザーエクスペリエンスを提供する直感的なユーザーインターフェースを設計することを信じています。',
    'skills-title': '技術スキル',
    'skill-crypto': '暗号化',
    'skill-responsive': 'レスポンシブデザイン',
    'skill-security': 'セキュリティ',
    'stat-projects': 'プロジェクト',
    'stat-secure': '安全',
    'stat-learning': '学習',
    
    // Projects Section
    'projects-title': '注目プロジェクト',
    'project-1-title': 'AES暗号化ツール',
    'project-1-desc': 'モダンUIと多言語サポートを備えた安全なクライアントサイドテキスト暗号化・復号化ツール。',
    'project-1-live': 'ライブデモ',
    'project-2-title': '近日公開',
    'project-2-desc': 'より興味深いプロジェクトが開発中です。アップデートをお待ちください！',
    'project-2-coming': '開発中',
    
    // Contact Section
    'contact-title': 'お問い合わせ',
    'contact-text': '新しい機会やコラボレーションには常に興味があります。プロジェクトのアイデアがあるか、単に繋がりたい場合は、お気軽にご連絡ください！',
    'contact-email': 'メール',
    
    // Footer
    'footer-text': '© 2025 TTB3AR. 情熱とセキュリティを念頭に構築。',
    'footer-top': 'トップに戻る'
  }
};

// DOM Elements
const themeToggle = document.getElementById('checkbox');
const languageToggle = document.getElementById('language-checkbox');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
  initializeLanguage();
  initializeNavigation();
  initializeAnimations();
  initializeScrollEffects();
});

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const html = document.documentElement;
  
  html.setAttribute('data-theme', savedTheme);
  themeToggle.checked = savedTheme === 'dark';
  
  themeToggle.addEventListener('change', function() {
    const newTheme = this.checked ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// Language Management
function initializeLanguage() {
  const savedLanguage = localStorage.getItem('language') || 'en';
  const html = document.documentElement;
  
  html.setAttribute('data-language', savedLanguage);
  languageToggle.checked = savedLanguage === 'jp';
  updateLanguage(savedLanguage);
  
  languageToggle.addEventListener('change', function() {
    const newLanguage = this.checked ? 'jp' : 'en';
    html.setAttribute('data-language', newLanguage);
    localStorage.setItem('language', newLanguage);
    updateLanguage(newLanguage);
  });
}

function updateLanguage(language) {
  const elements = document.querySelectorAll('[id]');
  
  elements.forEach(element => {
    const key = element.id;
    if (translations[language] && translations[language][key]) {
      if (element.tagName === 'INPUT' && element.type === 'text') {
        element.placeholder = translations[language][key];
      } else if (element.tagName === 'SPAN' && element.parentElement.classList.contains('btn')) {
        element.textContent = translations[language][key];
      } else {
        element.textContent = translations[language][key];
      }
    }
  });
}

// Navigation Management
function initializeNavigation() {
  // Mobile menu toggle
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    const icon = this.querySelector('i');
    
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close mobile menu when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      const icon = navToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove('active');
      const icon = navToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Active nav link highlighting
  window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const correspondingNavLink = document.querySelector(`.nav-link[href="#${id}"]`);

    if (scrollPos >= top && scrollPos <= bottom) {
      // Remove active class from all nav links
      navLinks.forEach(link => link.classList.remove('active'));
      // Add active class to current nav link
      if (correspondingNavLink) {
        correspondingNavLink.classList.add('active');
      }
    }
  });
}

// Animation Management
function initializeAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        
        // Add staggered animation for skills grid
        if (entry.target.classList.contains('skills-grid')) {
          const skillItems = entry.target.querySelectorAll('.skill-item');
          skillItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('slide-in-left');
            }, index * 100);
          });
        }
        
        // Add staggered animation for project cards
        if (entry.target.classList.contains('projects-grid')) {
          const projectCards = entry.target.querySelectorAll('.project-card');
          projectCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('fade-in');
            }, index * 200);
          });
        }
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.about-content, .skills-grid, .projects-grid, .contact-content');
  animatedElements.forEach(el => {
    el.classList.add('loading');
    observer.observe(el);
  });
}

// Scroll Effects
function initializeScrollEffects() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Hide/show navigation on scroll
  let lastScrollTop = 0;
  const nav = document.querySelector('.nav');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      nav.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      nav.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Parallax effect for hero section
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual && scrolled < window.innerHeight) {
      heroVisual.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
}

// Utility Functions
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

// Add loading class removal after page load
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
  
  // Remove loading class from animated elements after a short delay
  setTimeout(() => {
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(el => el.classList.remove('loading'));
  }, 100);
});

// Handle form submissions (if any forms are added later)
function handleFormSubmission(form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add form handling logic here
    console.log('Form submitted');
  });
}

// Error handling for missing elements
function safeAddEventListener(element, event, handler) {
  if (element) {
    element.addEventListener(event, handler);
  } else {
    console.warn(`Element not found for event: ${event}`);
  }
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
  // ESC key closes mobile menu
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    const icon = navToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Handle resize events
window.addEventListener('resize', debounce(function() {
  // Close mobile menu on resize to desktop
  if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    const icon = navToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
}, 250));

// Performance optimization: Lazy load images (if any are added)
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);
