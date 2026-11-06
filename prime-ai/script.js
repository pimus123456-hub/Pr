// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
toggle?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
links?.addEventListener('click', (e) => {
  if (e.target.closest('a')) { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
});

document.getElementById('year').textContent = new Date().getFullYear();

// Contact form: opens the visitor's email app with the details filled in.
// Swap for a form service (e.g. Formspree) to receive submissions directly.
const form = document.getElementById('contact-form');
form?.addEventListener('submit', (e) => {
  const to = form.dataset.mailto;
  if (!to) return; // a real `action` is set; let the browser submit normally
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  const body = [
    `Name: ${d.name}`, `Email: ${d.email}`, `Academy: ${d.academy}`,
    `Location: ${d.location}`, `Sport: ${d.sport}`, '', d.message || ''
  ].join('\n');
  window.location.href = `mailto:${to}?subject=${encodeURIComponent('AI visibility audit request: ' + d.academy)}&body=${encodeURIComponent(body)}`;
  form.querySelector('.form-status').textContent = 'Your email app should open with your request ready to send.';
});
