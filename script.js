const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', mainNav.classList.contains('open') ? 'true' : 'false');
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => mainNav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

const phone = '918318452442';
document.querySelectorAll('.order-category').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    const message = `Namaste Ajay Stationary Shop, mujhe ${category} chahiye. Kripya price aur availability batayein.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
});
