// Simple JS for chips + year + smooth scroll
document.getElementById('year').textContent = new Date().getFullYear();

const chips = document.querySelectorAll('.chip');
const field = document.getElementById('chipsField');
chips.forEach(ch => {
  ch.addEventListener('click', () => {
    ch.classList.toggle('active');
    const active = [...document.querySelectorAll('.chip.active')].map(c => c.dataset.tag);
    field.value = active.join(', ');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') === '#') return;
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
