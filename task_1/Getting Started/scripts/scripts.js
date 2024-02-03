document.addEventListener("DOMContentLoaded", function () {
    const introSection = document.getElementById('intro');
    introSection.style.opacity = 0;

    setTimeout(function () {
        introSection.style.opacity = 1;
    }, 500);

    const emailSpan = document.getElementById('email');
    const phoneSpan = document.getElementById('phone');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'scale(1.02)';
            } else {
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    window.addEventListener('scroll', toggleScrollToTopButton);

    scrollToTopButton.addEventListener('click', scrollToTop);

    function copyToClipboard(element) {
        const textToCopy = element.getAttribute('data-clipboard-text');
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        element.classList.add('copied');
        setTimeout(() => {
            element.classList.remove('copied');
        }, 1000);
    }

    emailSpan.addEventListener('click', function () {
        copyToClipboard(emailSpan);
    });

    phoneSpan.addEventListener('click', function () {
        copyToClipboard(phoneSpan);
    });

    function toggleScrollToTopButton() {
        const scrollTopButton = document.getElementById('scroll-to-top');
        if (window.scrollY > window.innerHeight / 2) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    }
});
