// Grand Slam Tennisshop

// Sidebar Toggle
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');

if (sidebarToggle && sidebar) {
  const toggleSidebar = () => {
    const isOpen = sidebar.classList.toggle('open');
    sidebarToggle.setAttribute('aria-expanded', isOpen);
  };

  sidebarToggle.addEventListener('click', toggleSidebar);
  sidebarToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSidebar();
    }
  });

  // Close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      sidebarToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      sidebarToggle.setAttribute('aria-expanded', 'false');
      sidebarToggle.focus();
    }
  });
}

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
    { selector: '.team-header', class: 'reveal' },
    { selector: '.team-cta-card', class: 'reveal-scale' },
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
    { selector: '.equipment-list li', delay: 0.05 },
    { selector: '.team-cards .team-card', delay: 0.2 }
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

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      header.style.background = 'rgba(6, 6, 9, 0.95)';
      header.style.backdropFilter = 'blur(12px)';
      header.style.borderBottom = '1px solid rgba(201, 169, 110, 0.08)';
    } else {
      header.style.background = 'linear-gradient(to bottom, rgba(6,6,9,0.92), transparent)';
      header.style.backdropFilter = 'none';
      header.style.borderBottom = 'none';
    }
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

// ===== 3D TILT CARDS =====
const initTiltCards = () => {
  const cards = document.querySelectorAll('[data-tilt]');

  cards.forEach(card => {
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      const rotateX = y * -5;
      const rotateY = x * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.style.transition = 'transform 0.15s ease-out';
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
    initTiltCards();
  }

  initSmoothScroll();
  initFlipCards();
});
