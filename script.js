   //  Menu Toggle
   const menuToggle = document.getElementById('menuToggle');
   const nav = document.querySelector('nav');
   
   menuToggle.addEventListener('click', () => {
       nav.classList.toggle('active');
   });

   // Smooth Scrolling
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();
           nav.classList.remove('active');
           document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth'
           });
       });
   });

   // Dark Mode Toggle
   const darkModeToggle = document.getElementById('darkModeToggle');
   const body = document.body;
   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

   // Check for saved theme preference or system preference
   const savedTheme = localStorage.getItem('theme');
   if (savedTheme === 'dark' || (!savedTheme && prefersDark.matches)) {
       body.classList.add('dark-mode');
       darkModeToggle.textContent = '☀️';
   }

   darkModeToggle.addEventListener('click', () => {
       body.classList.toggle('dark-mode');
       const isDark = body.classList.contains('dark-mode');
       darkModeToggle.textContent = isDark ? '☀️' : '🌙';
       localStorage.setItem('theme', isDark ? 'dark' : 'light');
   });

   // Form Validation
   const contactForm = document.getElementById('contactForm');
   const errorMessage = document.getElementById('errorMessage');

   contactForm.addEventListener('submit', function(e) {
       e.preventDefault();
       
       const name = document.getElementById('name').value.trim();
       const email = document.getElementById('email').value.trim();
       const message = document.getElementById('message').value.trim();
       
       if (!name || !email || !message) {
           errorMessage.textContent = 'Please fill in all fields.';
           return;
       }

       if (!isValidEmail(email)) {
           errorMessage.textContent = 'Please enter a valid email address.';
           return;
       }

       // Success
       errorMessage.textContent = 'Thank you for contacting us, Marwan!';
       errorMessage.style.color = '#34c759';
       contactForm.reset();

       // Clear success message after 3 seconds
       setTimeout(() => {
           errorMessage.textContent = '';
           errorMessage.style.color = '#ff3b30';
       }, 3000);
   });

   function isValidEmail(email) {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   }

   // Active 
   const sections = document.querySelectorAll('section');
   const navLinks = document.querySelectorAll('nav ul li a');

   window.addEventListener('scroll', () => {
       let current = '';
       sections.forEach(section => {
           const sectionTop = section.offsetTop - 100;
           const sectionHeight = section.offsetHeight;
           if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
               current = section.getAttribute('id');
           }
       });

       navLinks.forEach(link => {
           link.classList.remove('active');
           if (link.getAttribute('href') === `#${current}`) {
               link.classList.add('active');
           }
       });
   });