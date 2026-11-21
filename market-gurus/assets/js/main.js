document.addEventListener('DOMContentLoaded', () => {
    // 1. إعدادات تبديل اللغة
    const langToggleBtn = document.getElementById('lang-toggle');
    const htmlTag = document.documentElement;
    let currentLang = htmlTag.getAttribute('lang') || 'ar';

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            htmlTag.setAttribute('lang', currentLang);
            htmlTag.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            langToggleBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
            updateContent(currentLang);
        });
    }

    function updateContent(lang) {
        const elements = document.querySelectorAll('[data-ar][data-en]');
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
    }

    // 2. تفعيل قائمة الهواتف
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // 3. تحديد الصفحة النشطة في القائمة
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});