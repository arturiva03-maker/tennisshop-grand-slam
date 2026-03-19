// Grand Slam Tennisshop

// Sidebar Toggle
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

if (mobileMenuToggle && navLinks) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu on window resize (if switching to desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      mobileMenuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ===== SCROLL REVEAL ANIMATIONS =====
const initScrollReveal = () => {

  // Add reveal classes to elements
  const revealElements = [
    { selector: '.welcome-image', class: 'reveal-left' },
    { selector: '.welcome-text', class: 'reveal-right' },
    { selector: '.string-go-banner', class: 'reveal' },
    { selector: '.partners', class: 'reveal' },
    { selector: '.service-container', class: 'reveal' },
    { selector: '.equipment-container', class: 'reveal' },
    { selector: '.equipment-service', class: 'reveal-scale' },
    { selector: '.players-section h2', class: 'reveal' },
    { selector: '.team-text', class: 'reveal' },
  ];

  revealElements.forEach(({ selector, class: className }) => {
    document.querySelectorAll(selector).forEach(el => {
      if (!el.classList.contains('reveal') &&
          !el.classList.contains('reveal-left') &&
          !el.classList.contains('reveal-right') &&
          !el.classList.contains('reveal-scale')) {
        el.classList.add(className);
      }
    });
  });

  // Add stagger animation to grid items
  const staggerContainers = [
    { selector: '.team-gallery img', delay: 0.1 },
    { selector: '.players-grid .player-card-flip', delay: 0.15 },
    { selector: '.partners-container .partner', delay: 0.05 },
    { selector: '.equipment-list li', delay: 0.05 }
  ];

  staggerContainers.forEach(({ selector, delay }) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.classList.add('stagger-item');
      el.style.transitionDelay = `${index * delay}s`;
    });
  });

  // Intersection Observer for reveal animations
  const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  // Observe all reveal elements and check if already visible
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-item').forEach(el => {
    // Check if element is already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('revealed');
    } else {
      revealObserver.observe(el);
    }
  });
};

// ===== PARALLAX EFFECT (Desktop only) =====
const initParallax = () => {
  // Only run on desktop
  if (window.innerWidth <= 768) return;

  const heroImage = document.querySelector('.hero-image');
  if (!heroImage) return;

  let ticking = false;

  const updateParallax = () => {
    const scrollY = window.scrollY;
    const heroHeight = document.querySelector('.hero')?.offsetHeight || 600;

    if (scrollY < heroHeight) {
      const parallaxValue = scrollY * 0.4;
      heroImage.style.transform = `translateY(${parallaxValue}px) scale(1.1)`;
    }
    ticking = false;
  };

  // Initial scale
  heroImage.style.transform = 'scale(1.1)';
  heroImage.style.transition = 'transform 0.1s linear';

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
};

// ===== HEADER REVEAL ON SCROLL =====
const initHeaderReveal = () => {
  const header = document.querySelector('.header:not(.header-solid)');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      header.style.background = 'rgba(6, 6, 9, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
      header.style.borderBottom = '1px solid rgba(201, 169, 110, 0.1)';
    } else {
      header.style.background = 'linear-gradient(to bottom, rgba(6,6,9,0.9), transparent)';
      header.style.backdropFilter = 'none';
      header.style.borderBottom = 'none';
    }
    lastScroll = scrollY;
  }, { passive: true });
};

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

// ===== FLIP CARDS (Mobile tap support) =====
const initFlipCards = () => {
  const flipCards = document.querySelectorAll('.player-card-flip');

  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      // Only toggle on mobile/tablet
      if (window.innerWidth <= 768) {
        card.classList.toggle('flipped');
      }
    });
  });
};

// ===== INITIALIZE ALL =====
document.addEventListener('DOMContentLoaded', () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    initScrollReveal();
    initParallax();
    initHeaderReveal();
  }

  initSmoothScroll();
  initFlipCards();
});
