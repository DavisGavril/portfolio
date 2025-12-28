$(document).ready(function() {
    
    // 1. SweetAlert for 'Contact' in Navbar
    $('#contact-btn').click(function(e) {
        e.preventDefault(); // Prevent default anchor link behavior
        Swal.fire({
            title: 'Contact Me',
            html: `
                <p>Email: student@example.com</p>
                <p>LinkedIn: linkedin.com/in/student</p>
            `,
            icon: 'info',
            confirmButtonText: 'Great!',
            confirmButtonColor: '#4a90e2'
        });
    });

    // 2. SweetAlert for 'Hire Me' button
    $('#hire-me-btn').click(function() {
        Swal.fire({
            title: 'Thank you for your interest!',
            text: 'I am currently available for internships and freelance work.',
            icon: 'success',
            confirmButtonText: 'Send Email',
            confirmButtonColor: '#4a90e2',
            showCancelButton: true,
            cancelButtonText: 'Close'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "mailto:student@example.com";
            }
        });
    });

    // 3. SweetAlert for Project Details
    $('.view-project').click(function() {
        let projectTitle = $(this).data('title');
        Swal.fire({
            title: projectTitle,
            text: 'This is a placeholder for detailed project information. You can add more description, tech stack used, and links here.',
            imageUrl: 'https://via.placeholder.com/300x150',
            imageWidth: 300,
            imageHeight: 150,
            imageAlt: 'Project Image',
            confirmButtonColor: '#4a90e2'
        });
    });

    // 4. SweetAlert for Certificate Verification
    $('.view-cert').click(function() {
        let certName = $(this).data('name');
        Swal.fire({
            title: 'Verify Certificate',
            text: `Redirecting to verification page for ${certName}...`,
            icon: 'warning',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false
        });
    });
});

// Simple function for CV Download (Mock)
function downloadCV() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });

    Toast.fire({
        icon: 'success',
        title: 'CV Downloading started...'
    });
}

