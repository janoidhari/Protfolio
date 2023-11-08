// Use JavaScript to apply transitions when navigating
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        document.body.classList.add('transition-page');
        setTimeout(() => {
            window.location.href = link.href;
        }, 500); // Adjust the duration as needed
    });
});

// Add this JavaScript to make the navigation bar sticky
const nav = document.querySelector('nav');
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    if (window.scrollY >= header.offsetHeight) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});
// Include a library like ScrollReveal for animations
<script src="https://unpkg.com/scrollreveal@4.0.8/dist/scrollreveal.min.js"></script>

// Use ScrollReveal in your script.js
const sr = ScrollReveal();

// Add animations to elements
sr.reveal('.project', {
    duration: 1000,
    origin: 'left',
    distance: '30px',
    viewFactor: 0.5
});

sr.reveal('.testimonial', {
    duration: 1000,
    origin: 'right',
    distance: '30px',
    viewFactor: 0.5
});

// Add this to your script.js
function openImageModal(imagePath) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const image = document.createElement('img');
    image.src = imagePath;
    modal.appendChild(image);
    document.body.appendChild(modal);

    modal.addEventListener('click', function () {
        document.body.removeChild(modal);
    });
}

// Add form validation and submission handling in your script.js

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate form inputs here and provide feedback to the user

    if (valid) {
        // If the form is valid, submit the data to the server
        fetch('backend.php', {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => response.text())
        .then(data => {
            // Display a success message to the user
            form.reset();
            alert('Thank you for contacting me!');
        })
        .catch(error => {
            // Display an error message if the submission fails
            alert('An error occurred. Please try again later.');
        });
    }
});

// Add this to your script.js to toggle dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});

// Add JavaScript to move the custom cursor
const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
});

// Use JavaScript to apply custom page transitions
const pageTransition = {
    enterActive: 'page-transition-enter-active',
    enter: 'page-transition-enter',
    exit: 'page-transition-exit'
};

export default {
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.$root.$emit('startPageTransition');
        });
    },
    methods: {
        async beforeRouteLeave(to, from, next) {
            this.$root.$once('startPageTransition', () => {
                next();
            });
        }
    }
};

// Use Particles.js in your script.js
particlesJS('particles', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#007BFF' // Set your preferred color
        },
        // Add more particle options as needed
    }
});
