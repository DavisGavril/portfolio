$(document).ready(function() {
    
    // 1. SweetAlert for 'Contact' - Updated with GitHub & LinkedIn
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
            confirmButtonColor: '#4a90e2'
        });
    });

    // 2. SweetAlert for 'Hire Me' - Updates Mailto link
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
                // Directs to your specific email
                window.location.href = "mailto:davisgavril292006@gmail.com";
            }
        });
    });

    // 3. Project Details Popup (Same as before)
    $('.view-project').click(function() {
        let title = $(this).data('title');
        let tech = $(this).data('tech');
        let desc = $(this).data('desc');

        Swal.fire({
            title: title,
            html: `
                <div style="text-align: left;">
                    <p><strong>Description:</strong><br>${desc}</p>
                    <br>
                    <p><strong>Tech Stack:</strong> <span style="color:#4a90e2">${tech}</span></p>
                </div>
            `,
            width: 600,
            confirmButtonColor: '#4a90e2'
        });
    });

    // 4. Verification Placeholder
    $('.view-cert').click(function() {
        let certName = $(this).data('name');
        Swal.fire({
            title: certName,
            text: 'Certificate credential viewing is currently simulated.',
            icon: 'success',
            confirmButtonColor: '#4a90e2'
        });
    });

    // Mobile Menu Toggle
    $('.hamburger').click(function() {
        $('.nav-links').toggleClass('active');
    });
});

