document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. THEME TOGGLE ---
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = toggleBtn.querySelector('i');

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // --- 2. MOBILE MENU ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if(hamburger) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    // --- 3. TYPING EFFECT ---
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const textArray = ["B.Tech IT Student", "Software Developer", "Problem Solver"];
        let textIndex = 0, charIndex = 0, isDeleting = false;

        function type() {
            const currentString = textArray[textIndex];
            if (isDeleting) {
                typingElement.textContent = currentString.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentString.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentString.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 50 : 100);
            }
        }
        type();
    }

    // --- 4. POPUPS ---
    
    // Contact Me
    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            Swal.fire({
                title: 'Contact Details',
                html: `<p>davisgavril292006@gmail.com</p>`,
                confirmButtonColor: '#d60000'
            });
        });
    }

    // Project Details
    document.querySelectorAll('.view-project').forEach(btn => {
        btn.addEventListener('click', function() {
            Swal.fire({
                title: this.dataset.title,
                html: `<p>${this.dataset.desc}</p><br><p><strong>Tech:</strong> ${this.dataset.tech}</p>`,
                confirmButtonColor: '#d60000'
            });
        });
    });

    // --- NEW: Certificate Image Popup ---
    document.querySelectorAll('.view-credential').forEach(btn => {
        btn.addEventListener('click', function() {
            Swal.fire({
                title: this.dataset.title,
                imageUrl: this.dataset.image,
                imageAlt: 'Certificate Image',
                width: 600,
                confirmButtonText: 'Verify on LinkedIn',
                confirmButtonColor: '#d60000',
                showCancelButton: true,
                cancelButtonText: 'Close'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open(this.dataset.link, '_blank');
                }
            });
        });
    });
});

