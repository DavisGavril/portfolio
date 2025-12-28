$(document).ready(function() {
    
    // --- 1. Typing Effect for Hero Section ---
    const textArray = ["B.Tech Information Technology Student", "Software Developer", "Tech Enthusiast", "Problem Solver"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    const typingElement = $('.typing-text');

    function type() {
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
            setTimeout(type, newTextDelay);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? erasingDelay : typingDelay);
        }
    }
    
    // Start the typing loop
    if(typingElement.length) type();


    // --- 2. Scroll Reveal Animation ---
    $(window).scroll(function() {
        $('.reveal').each(function() {
            var elementTop = $(this).offset().top;
            var windowHeight = $(window).height();
            var elementVisible = 150; // trigger distance

            if (elementTop < (window.scrollTop() + windowHeight - elementVisible)) {
                $(this).addClass('active');
            }
        });
    });
    // Trigger once on load in case elements are already in view
    $(window).scroll();


    // --- 3. Existing SweetAlert Code ---
    
    $('#contact-btn').click(function(e) {
        e.preventDefault(); 
        Swal.fire({
            title: 'Get In Touch',
            html: `
                <div style="text-align: left; line-height: 2;">
                    <p><i class="fas fa-envelope" style="color: #4a90e2; width: 20px;"></i> 
                        <a href="mailto:davisgavril292006@gmail.com" style="text-decoration:none; color:#333;">davisgavril292006@gmail.com</a>
                    </p>
                    <p><i class="fab fa-github" style="color: #333; width: 20px;"></i> 
                        <a href="https://github.com/DavisGavril" target="_blank" style="text-decoration:none; color:#333;">github.com/DavisGavril</a>
                    </p>
                    <p><i class="fab fa-linkedin" style="color: #0077b5; width: 20px;"></i> 
                        <a href="https://www.linkedin.com/in/davis-gavril-t-7a6949290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" style="text-decoration:none; color:#333;">LinkedIn Profile</a>
                    </p>
                    <p><i class="fas fa-phone" style="color: #28a745; width: 20px;"></i> +91 9363015224</p>
                </div>
            `,
            showConfirmButton: true,
            confirmButtonText: 'Close',
            confirmButtonColor: '#4a90e2',
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' }
        });
    });

    $('#hire-me-btn').click(function() {
        Swal.fire({
            title: 'Interested in working with me?',
            text: 'I am available for internships and development roles.',
            icon: 'question',
            confirmButtonText: 'Send Email',
            confirmButtonColor: '#4a90e2',
            showCancelButton: true,
            cancelButtonText: 'Close'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "mailto:davisgavril292006@gmail.com";
            }
        });
    });

    $('.view-project').click(function() {
        let title = $(this).data('title');
        let tech = $(this).data('tech');
        let desc = $(this).data('desc');

        Swal.fire({
            title: title,
            html: `<div style="text-align: left;"><p><strong>Description:</strong><br>${desc}</p><br><p><strong>Tech Stack:</strong> <span style="color:#4a90e2">${tech}</span></p></div>`,
            width: 600,
            confirmButtonColor: '#4a90e2',
            backdrop: `rgba(0,0,123,0.4) left top no-repeat` // Cool backdrop effect
        });
    });

    $('.view-cert').click(function() {
        let certName = $(this).data('name');
        Swal.fire({
            title: certName,
            text: 'Certificate credential viewing is currently simulated.',
            icon: 'success',
            confirmButtonColor: '#4a90e2'
        });
    });

    $('.hamburger').click(function() {
        $('.nav-links').toggleClass('active');
    });
});

