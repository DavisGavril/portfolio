$(document).ready(function() {
    
    // 1. Theme Toggle Logic
    const toggleBtn = $('#theme-toggle');
    const body = $('body');
    const icon = toggleBtn.find('i');

    // Check Local Storage for saved preference
    if (localStorage.getItem('theme') === 'dark') {
        body.addClass('dark-mode');
        icon.removeClass('fa-moon').addClass('fa-sun');
    }

    toggleBtn.click(function() {
        body.toggleClass('dark-mode');
        
        if (body.hasClass('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            icon.removeClass('fa-moon').addClass('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            icon.removeClass('fa-sun').addClass('fa-moon');
        }
    });

    // 2. Mobile Menu
    $('.hamburger').click(function() {
        $('.nav-links').toggleClass('active');
    });

    // 3. Typing Effect
    const textArray = ["B.Tech Information Technology Student", "Software Developer", "Tech Enthusiast"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = $('.typing-text');

    function type() {
        if (!typingElement.length) return;
        let currentString = textArray[textIndex];
        if (isDeleting) {
            typingElement.text(currentString.substring(0, charIndex - 1));
            charIndex--;
        } else {
            typingElement.text(currentString.substring(0, charIndex + 1));
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

    // 4. Popups (SweetAlert)
    $('#contact-btn').click(function(e) {
        e.preventDefault();
        Swal.fire({
            title: 'Contact Details',
            html: `
                <div style="text-align: left; color: #333;">
                    <p><i class="fas fa-envelope"></i> davisgavril292006@gmail.com</p>
                    <p><i class="fab fa-linkedin"></i> LinkedIn Profile</p>
                </div>
            `,
            confirmButtonColor: '#d60000'
        });
    });

    $('.view-project').click(function() {
        let title = $(this).data('title');
        let desc = $(this).data('desc');
        let tech = $(this).data('tech');
        Swal.fire({
            title: title,
            html: `<p>${desc}</p><br><p><strong>Tech:</strong> ${tech}</p>`,
            confirmButtonColor: '#d60000'
        });
    });
});

