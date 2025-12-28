document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. THEME TOGGLE (Dark/Light Mode) ---
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = toggleBtn ? toggleBtn.querySelector('i') : null;

    // Check if user previously selected dark mode
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if(icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    if(toggleBtn) {
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
    }

    // --- 2. MOBILE MENU TOGGLE ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- 3. TYPING EFFECT (Home Page) ---
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const textArray = ["B.Tech IT Student", "Software Developer", "Problem Solver"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

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

    // --- 4. CONTACT POPUP ---
    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            Swal.fire({
                title: 'Contact Details',
                html: `
                    <div style="text-align:left; color:#333;">
                        <p><i class="fas fa-envelope"></i> davisgavril292006@gmail.com</p>
                        <p><i class="fab fa-linkedin"></i> LinkedIn Profile</p>
                    </div>`,
                confirmButtonColor: '#d60000'
            });
        });
    }

    // --- 5. EXPERIENCE & CERTIFICATE POPUPS (Crucial for Experience Page) ---
    
    // A. Project Details Button
    document.querySelectorAll('.view-project').forEach(btn => {
        btn.addEventListener('click', function() {
            Swal.fire({
                title: this.dataset.title,
                html: `<p>${this.dataset.desc}</p><br><p><strong>Tech:</strong> ${this.dataset.tech}</p>`,
                confirmButtonColor: '#d60000'
            });
        });
    });

    // B. Certificate Image Popup (For AICTE Internship)
    document.querySelectorAll('.view-credential').forEach(btn => {
        btn.addEventListener('click', function() {
            Swal.fire({
                title: this.dataset.title,
                imageUrl: this.dataset.image,       // Reads 'aicte-cert.jpg' from HTML
                imageAlt: 'Certificate Image',
                width: 600,
                confirmButtonText: 'Verify on LinkedIn',
                confirmButtonColor: '#d60000',
                showCancelButton: true,
                cancelButtonText: 'Close'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open(this.dataset.link, '_blank'); // Opens LinkedIn link
                }
            });
        });
    });

});

