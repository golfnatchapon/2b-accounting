(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    fadeEls.forEach((el) => observer.observe(el));
  } else {
    fadeEls.forEach((el) => el.classList.add('visible'));
  }

  const scrollSteps = document.querySelectorAll('.scroll-step');
  if (scrollSteps.length && 'IntersectionObserver' in window) {
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrollSteps.forEach((s) => s.classList.remove('active'));
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.6, rootMargin: '-20% 0px -20% 0px' }
    );
    scrollSteps.forEach((step) => stepObserver.observe(step));
  } else if (scrollSteps.length) {
    scrollSteps[0].classList.add('active');
  }

  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.querySelector('.form-success');
  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.style.display = 'none';
      formSuccess.style.display = 'block';
    });
  }
})();
