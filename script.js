$(document).ready(function() {
    
    // 1. Mobile Menu Toggle
    $('.hamburger').click(function() {
        $('.nav-links').toggleClass('active');
    });

    // 2. Typing Effect
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

    // 3. Contact Popups (SweetAlert)
    $('#contact-btn').click(function(e) {
        e.preventDefault();
        Swal.fire({
            title: 'Contact Details',
            html: `
                <div style="text-align: left;">
                    <p><i class="fas fa-envelope"></i> davisgavril292006@gmail.com</p>
                    <p><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/davis-gavril-t-7a6949290" target="_blank">LinkedIn Profile</a></p>
                    <p><i class="fab fa-github"></i> <a href="https://github.com/DavisGavril" target="_blank">GitHub Profile</a></p>
                </div>
            `,
            confirmButtonColor: '#4a90e2'
        });
    });

    // 4. Project Details Popup
    $('.view-project').click(function() {
        let title = $(this).data('title');
        let desc = $(this).data('desc');
        let tech = $(this).data('tech');
        Swal.fire({
            title: title,
            html: `<p>${desc}</p><br><p><strong>Tech:</strong> ${tech}</p>`,
            confirmButtonColor: '#4a90e2'
        });
    });
});

