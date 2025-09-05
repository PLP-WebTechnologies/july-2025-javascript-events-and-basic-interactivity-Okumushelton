// Navigation and Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Part 1: JavaScript Event Handling

// Click event example
const clickButton = document.getElementById('clickButton');
const clickFeedback = document.getElementById('clickFeedback');
let clickCount = 0;

clickButton.addEventListener('click', function() {
    clickCount++;
    clickFeedback.textContent = `Button clicked ${clickCount} time(s)`;
    
    // Add visual feedback
    clickButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        clickButton.style.transform = '';
    }, 100);
});

// Mouse event example
const mouseArea = document.getElementById('mouseArea');
const mousePosition = document.getElementById('mousePosition');

mouseArea.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    mousePosition.textContent = `Mouse position: (${x}, ${y})`;
    
    // Change background color based on position
    const red = Math.floor((x / window.innerWidth) * 100);
    const blue = Math.floor((y / window.innerHeight) * 100);
    mouseArea.style.backgroundColor = `rgb(${red}, 150, ${blue})`;
});

mouseArea.addEventListener('mouseleave', function() {
    mouseArea.style.backgroundColor = '';
    mousePosition.textContent = 'Mouse position: (0, 0)';
});

// Keyboard event example
const keyboardInput = document.getElementById('keyboardInput');
const keyboardFeedback = document.getElementById('keyboardFeedback');

keyboardInput.addEventListener('keyup', function(e) {
    keyboardFeedback.textContent = `Last key pressed: ${e.key} (Key code: ${e.keyCode})`;
});

// Part 2: Interactive Elements

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
});

// Counter functionality
const counterValue = document.getElementById('counterValue');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const incrementBtn = document.getElementById('incrementBtn');
let count = 0;

incrementBtn.addEventListener('click', function() {
    count++;
    counterValue.textContent = count;
});

decrementBtn.addEventListener('click', function() {
    if (count > 0) {
        count--;
        counterValue.textContent = count;
    }
});

resetBtn.addEventListener('click', function() {
    count = 0;
    counterValue.textContent = count;
});

// FAQ functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('span');
        
        // Toggle the open class
        answer.classList.toggle('open');
        
        // Change the icon
        if (answer.classList.contains('open')) {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
    });
});

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show corresponding tab pane
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Part 3: Form Validation
const form = document.getElementById('validationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const phoneError = document.getElementById('phoneError');
const successMessage = document.getElementById('successMessage');

// Validate name
nameInput.addEventListener('blur', function() {
    if (this.value.length < 2) {
        nameError.style.display = 'block';
        this.style.borderColor = '#e74c3c';
    } else {
        nameError.style.display = 'none';
        this.style.borderColor = '#2ecc71';
    }
});

// Validate email
emailInput.addEventListener('blur', function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(this.value)) {
        emailError.style.display = 'block';
        this.style.borderColor = '#e74c3c';
    } else {
        emailError.style.display = 'none';
        this.style.borderColor = '#2ecc71';
    }
});

// Validate password
passwordInput.addEventListener('blur', function() {
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    
    if (!passwordPattern.test(this.value)) {
        passwordError.style.display = 'block';
        this.style.borderColor = '#e74c3c';
    } else {
        passwordError.style.display = 'none';
        this.style.borderColor = '#2ecc71';
    }
});

// Validate phone
phoneInput.addEventListener('blur', function() {
    const phonePattern = /^\d{10}$/;
    
    if (!phonePattern.test(this.value)) {
        phoneError.style.display = 'block';
        this.style.borderColor = '#e74c3c';
    } else {
        phoneError.style.display = 'none';
        this.style.borderColor = '#2ecc71';
    }
});

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate all fields
    let isValid = true;
    
    if (nameInput.value.length < 2) {
        nameError.style.display = 'block';
        nameInput.style.borderColor = '#e74c3c';
        isValid = false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block';
        emailInput.style.borderColor = '#e74c3c';
        isValid = false;
    }
    
    const passwordPattern = /^(?=.*[0-9])(何=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(passwordInput.value)) {
        passwordError.style.display = 'block';
        passwordInput.style.borderColor = '#e74c3c';
        isValid = false;
    }
    
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
        phoneError.style.display = 'block';
        phoneInput.style.borderColor = '#e74c3c';
        isValid = false;
    }
    
    // If form is valid, show success message
    if (isValid) {
        successMessage.style.display = 'block';
        
        // Reset form after 3 seconds
        setTimeout(() => {
            form.reset();
            successMessage.style.display = 'none';
            
            // Reset border colors
            const inputs = form.querySelectorAll('input');
            inputs.forEach(input => {
                input.style.borderColor = '#ddd';
            });
        }, 3000);
    }
});