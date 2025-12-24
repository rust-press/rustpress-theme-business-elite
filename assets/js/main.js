/**
 * Business Elite Theme - Main JavaScript
 */

(function() {
  'use strict';

  // ==========================================================================
  // DOM Ready
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', function() {
    initHeader();
    initMobileMenu();
    initScrollAnimations();
    initCounters();
    initFAQ();
    initBackToTop();
    initForms();
    initDarkMode();
  });

  // ==========================================================================
  // Header
  // ==========================================================================
  function initHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      // Add scrolled class
      if (currentScroll > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Hide/show on scroll
      if (currentScroll > scrollThreshold) {
        if (currentScroll > lastScroll) {
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ==========================================================================
  // Mobile Menu
  // ==========================================================================
  function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (!toggle || !menu) return;

    toggle.addEventListener('click', function() {
      this.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('menu-open');
    });

    // Close menu on link click
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });

    // Close menu on escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menu.classList.contains('active')) {
        toggle.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
  }

  // ==========================================================================
  // Scroll Animations
  // ==========================================================================
  function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-animate]');
    if (!elements.length) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(function(el) {
        el.classList.add('animated');
      });
      return;
    }

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(function() {
            entry.target.classList.add('animated');
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(function(el) {
      observer.observe(el);
    });
  }

  // ==========================================================================
  // Counter Animation
  // ==========================================================================
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function(counter) {
      observer.observe(counter);
    });
  }

  function animateCounter(element) {
    const target = parseFloat(element.dataset.counter);
    const suffix = element.dataset.suffix || '';
    const prefix = element.dataset.prefix || '';
    const duration = parseInt(element.dataset.duration) || 2000;
    const decimals = (target % 1 !== 0) ? 1 : 0;

    let startTime = null;
    const startValue = 0;

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function update(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = startValue + (target - startValue) * easedProgress;

      element.textContent = prefix + currentValue.toFixed(decimals) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ==========================================================================
  // FAQ Accordion
  // ==========================================================================
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(function(item) {
      const question = item.querySelector('.faq-question');
      if (!question) return;

      question.addEventListener('click', function() {
        const isActive = item.classList.contains('active');

        // Close all items
        faqItems.forEach(function(i) {
          i.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  // ==========================================================================
  // Back to Top
  // ==========================================================================
  function initBackToTop() {
    const button = document.querySelector('.back-to-top');
    if (!button) return;

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 500) {
        button.classList.add('visible');
      } else {
        button.classList.remove('visible');
      }
    }, { passive: true });

    button.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================================================
  // Forms
  // ==========================================================================
  function initForms() {
    const forms = document.querySelectorAll('form[data-ajax]');

    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        // Simulate form submission
        setTimeout(function() {
          submitBtn.textContent = 'Sent!';
          form.reset();

          setTimeout(function() {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }, 2000);
        }, 1500);
      });
    });

    // Input focus effects
    const inputs = document.querySelectorAll('.form-input, .form-textarea, .form-select');
    inputs.forEach(function(input) {
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
      });
      input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
      });
    });
  }

  // ==========================================================================
  // Dark Mode
  // ==========================================================================
  function initDarkMode() {
    const toggle = document.querySelector('[data-theme-toggle]');
    if (!toggle) return;

    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    toggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // ==========================================================================
  // Utility Functions
  // ==========================================================================

  // Debounce
  function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    };
  }

  // Throttle
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const context = this;
      const args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function() {
          inThrottle = false;
        }, limit);
      }
    };
  }

})();
