/**
 * WEBELY — Exact Hormozi Interaction Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('discovery-form');
  const success = document.getElementById('form-success');
  const btn = document.getElementById('submit-btn');

  const modal = document.getElementById('video-modal');
  const playTrigger = document.getElementById('play-video-trigger');
  const closeBtn = document.getElementById('close-video-modal');

  // 1. Form Validation & Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputs = form.querySelectorAll('.sr-input');
      let isValid = true;

      inputs.forEach((input) => {
        const val = input.value.trim();
        if (!val) {
          input.classList.add('error');
          isValid = false;
        } else {
          input.classList.remove('error');
        }
      });

      if (!isValid) {
        return;
      }

      btn.disabled = true;
      btn.textContent = 'VALIDATION EN COURS...';

      const data = Object.fromEntries(new FormData(form).entries());
      data.submittedAt = new Date().toISOString();

      try {
        localStorage.setItem('webely_discovery_lead', JSON.stringify(data));
      } catch (_) {}

      setTimeout(() => {
        form.style.display = 'none';
        if (success) {
          success.style.display = 'block';
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    });

    // Remove red error outline on typing
    form.addEventListener('input', (e) => {
      if (e.target.classList.contains('sr-input')) {
        e.target.classList.remove('error');
      }
    });
  }

  // 2. Video Modal Controls
  const openModal = () => {
    if (modal) {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (playTrigger) {
    playTrigger.addEventListener('click', openModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});
