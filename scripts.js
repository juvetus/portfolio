document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message envoyé !');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
        
    aboutSection.animate([
            { opacity: 0, transform: 'translateX(-100px)' },
            { opacity: 1, transform: 'translateX(0)' }
    ], {
        duration: 2000,
            easing: 'ease-in-out',
            fill: 'forwards'
        });
});



function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}