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

// Application form: 3 steps, then sends the answers.
const apply = document.getElementById('apply-form');
if (apply) {
  const steps = [...apply.querySelectorAll('.apply-step')];
  const bar = apply.querySelector('.apply-bar');
  const count = apply.querySelector('.apply-n');
  const counter = apply.querySelector('.apply-count');
  const error = apply.querySelector('.apply-error');
  const done = apply.querySelector('.apply-done');
  let current = 0;

  const show = (i) => {
    steps.forEach((s, n) => { s.hidden = n !== i; });
    current = i;
    count.textContent = i + 1;
    bar.style.width = `${((i + 1) / steps.length) * 100}%`;
    error.textContent = '';
    const first = steps[i].querySelector('input:not([type=hidden])');
    first?.focus({ preventScroll: true });
  };

  const valid = (step) => {
    let msg = '';
    step.querySelectorAll('input[required]').forEach((input) => {
      if (input.type === 'radio') {
        if (!step.querySelector(`input[name="${input.name}"]:checked`)) msg ||= 'Please choose one option.';
        return;
      }
      const ok = input.checkValidity() && input.value.trim() !== '';
      input.setAttribute('aria-invalid', String(!ok));
      if (!ok) msg ||= input.type === 'email' ? 'Please enter a valid email address.' : 'Please fill in every field.';
    });
    const group = step.querySelector('[data-group="help"]');
    if (group && !group.querySelector('input:checked')) msg ||= 'Please pick at least one thing you need help with.';
    error.textContent = msg;
    return !msg;
  };

  apply.addEventListener('click', (e) => {
    if (e.target.closest('[data-next]') && valid(steps[current])) show(current + 1);
    if (e.target.closest('[data-back]')) show(current - 1);
  });

  // Auto-advance after picking a single-choice answer, like Typeform.
  apply.addEventListener('change', (e) => {
    if (e.target.type === 'radio') setTimeout(() => valid(steps[current]) && show(current + 1), 250);
  });

  // Enter moves to the next step instead of submitting early.
  apply.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT' && current < steps.length - 1) {
      e.preventDefault();
      if (valid(steps[current])) show(current + 1);
    }
  });

  apply.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!valid(steps[current])) return;
    const data = new FormData(apply);
    data.set('help', data.getAll('help').join(', '));
    const endpoint = apply.dataset.endpoint;
    const btn = apply.querySelector('button[type=submit]');
    btn.disabled = true;
    try {
      const res = endpoint
        ? await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        : await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data).toString() });
      if (!res.ok) throw new Error(res.status);
      steps.forEach((s) => { s.hidden = true; });
      counter.hidden = true;
      bar.style.width = '100%';
      done.hidden = false;
      done.focus();
    } catch {
      error.textContent = 'Sorry, your application did not go through. Please try again in a moment.';
    } finally {
      btn.disabled = false;
    }
  });
}
