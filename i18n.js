document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-lang') === 'ko' ? 'en' : 'ko';
      document.documentElement.setAttribute('data-lang', next);
      document.documentElement.lang = next;
      localStorage.setItem('site-lang', next);
    });
  });
});
