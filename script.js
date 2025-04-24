document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

const skills = [
    { name: 'C++', level: 85, icon: 'fas fa-code' },
    { name: 'Python', level: 80, icon: 'fab fa-python' },
    { name: 'SQL', level: 80, icon: 'fas fa-database' },
    { name: 'MongoDB', level: 75, icon: 'fas fa-leaf' },
    { name: 'Express.js', level: 78, icon: 'fab fa-node-js' },
    { name: 'React.js', level: 85, icon: 'fab fa-react' },
    { name: 'Node.js', level: 70, icon: 'fab fa-node' },
    { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', level: 80, icon: 'fab fa-js' }
];

    const skillsGrid = document.querySelector('.skills-grid');
    skills.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
        `;
        skillCard.style.animationDelay = `${index * 0.1}s`;
        skillsGrid.appendChild(skillCard);
    });

const projects = [
    { 
        title: 'YouTube Comment Sentiment Analysis Tool',
        desc: 'Python-based tool to analyze sentiments of YouTube comments',
        tech: ['Python', 'NLP', 'TextBlob', 'Matplotlib', 'YouTube API'],
        features: [
            'Sentiment classification (Positive/Negative/Neutral)',
            'Comment data visualization',
            'YouTube API integration'
        ]
    },
    { 
        title: 'Login Page Backend using C++',
        desc: 'Authentication system implementation in C++',
        tech: ['C++'],
        features: [
            'User credential validation',
            'Basic authentication system',
            'Local storage handling'
        ]
    },
    { 
        title: 'Tic-Tac-Toe App',
        desc: 'Interactive game with mobile conversion',
        tech: ['JavaScript', 'HTML', 'CSS', 'WebIntoApp'],
        features: [
            'Responsive UI/UX design',
            'Multi-device compatibility',
            'Web-to-mobile conversion'
        ]
    }
];

const projectGallery = document.querySelector('.project-gallery');
projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <div class="project-header">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
        </div>
        <div class="project-tech">
            ${project.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
        <div class="project-features">
            <h4>Key Features:</h4>
            <ul>
                ${project.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
    `;
    projectCard.style.animationDelay = `${index * 0.1}s`;
    projectGallery.appendChild(projectCard);
});

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('.nav-links').classList.remove('active');
    });
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    const heroHeight = hero.offsetHeight;
    const scrollPercent = Math.min(window.scrollY / heroHeight, 1);
    
    navbar.style.setProperty('--shadow-intensity', scrollPercent);
    
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.documentElement.style.setProperty('--shadow-intensity', 0);

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const heroHeight = document.querySelector('.hero').offsetHeight;
    const scrollPercent = Math.min(window.scrollY / heroHeight, 1);
    
    document.documentElement.style.setProperty(
        '--shadow-intensity', 
        scrollPercent * 0.3 
    );
    
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=raj200520@gmail.com&su=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
        this.reset();
    }, 1000);
});

// Update hamburger menu code
document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.classList.toggle('no-scroll');
});

// Update in script.js
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Close mobile menu
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('.nav-links').classList.remove('active');
        document.body.classList.remove('no-scroll');

        // Get target section
        const target = document.querySelector(link.getAttribute('href'));
        
        // Smooth scroll with offset for fixed header
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Fix
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle active class
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Toggle body scroll
    document.body.classList.toggle('no-scroll');
});

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});
