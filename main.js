/* ==========================================================================
   GrowthAnalytica Interactive Client Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeaderScroll();
  initChartAnimation();
  initNewsletterForm();
  initScrollSpy();
});

/**
 * Mobile Navigation Menu Logic
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!menuToggle || !navMenu) return;

  // Toggle menu open/close state
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });

  // Close menu when clicking links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.classList.remove('active');
    });
  });

  // Close menu when clicking anywhere outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      navMenu.classList.remove('open');
      menuToggle.classList.remove('active');
    }
  });
}

/**
 * Scroll listener for sticky header styling adjustments
 */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      header.style.backgroundColor = 'rgba(11, 15, 16, 0.95)';
      header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
      header.classList.remove('scrolled');
      header.style.backgroundColor = 'rgba(16, 20, 21, 0.75)';
      header.style.boxShadow = 'none';
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
}

/**
 * Animates the accuracy bar chart values when the element becomes visible in viewport
 */
function initChartAnimation() {
  const chart = document.getElementById('accuracy-chart');
  if (!chart) return;

  const barItems = chart.querySelectorAll('.bar-item');

  const animateBars = () => {
    barItems.forEach((item, index) => {
      const fill = item.querySelector('.bar-fill');
      const targetValue = item.getAttribute('data-value');
      
      // Delay each bar slightly to create a wave-like staggering animation
      setTimeout(() => {
        if (fill) {
          fill.style.height = targetValue;
        }
      }, index * 100);
    });
  };

  // Trigger animation using IntersectionObserver
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateBars();
        observerInstance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  observer.observe(chart);
}

/**
 * Handle form submit and validation for the newsletter CTA
 */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletter-email');
    const submitBtn = document.getElementById('newsletter-submit-btn');
    
    if (!emailInput || !submitBtn) return;

    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
      alert('Please enter a valid business email address.');
      return;
    }

    // Interactive button state update
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = 'var(--brand-slate-border)';
    submitBtn.style.color = 'var(--brand-slate-text)';
    submitBtn.innerHTML = 'SUBSCRIBING...';

    // Simulate server response delay
    setTimeout(() => {
      // Replace form contents with a beautiful, high-fidelity success card
      const parent = form.parentElement;
      if (parent) {
        // Fade transition out
        parent.style.transition = 'opacity 0.3s ease';
        parent.style.opacity = '0';
        
        setTimeout(() => {
          parent.innerHTML = `
            <div class="newsletter-success" style="text-align: center; padding: 20px 0;">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--brand-green-growth)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 16px;">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3 class="title-md" style="color: var(--brand-off-white); margin-bottom: 8px;">Welcome to the Inner Circle</h3>
              <p class="body-md text-muted">A confirmation email has been dispatched to <strong>${escapeHtml(email)}</strong>.<br>Prepare for your first strategic breakdown this Sunday.</p>
            </div>
          `;
          parent.style.opacity = '1';
        }, 300);
      }
    }, 1500);
  });
}

/**
 * Standard email validator
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Escapes characters to prevent potential XSS injection in dynamic text template
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

/**
 * ScrollSpy to keep navbar links highlighted based on view position
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const options = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Focus threshold for active section
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));
}
