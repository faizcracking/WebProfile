// ID card flip
const card = document.getElementById('idCard');
const flip = () => card.classList.toggle('flipped');
card.addEventListener('click', flip);
card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });

// Folder toggle
document.querySelectorAll('[data-folder]').forEach(f => {
  f.addEventListener('click', () => f.classList.toggle('open'));
});

// Scroll reveal + stamp animation
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      const stamp = entry.target.querySelector('.stamp-mark');
      if (stamp) stamp.classList.add('stamp-anim');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Active tab highlight
const sections = document.querySelectorAll('section[id]');
const tabLinks = document.querySelectorAll('#tabs a');
const navIo = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const link = document.querySelector('#tabs a[href="#' + entry.target.id + '"]');
    if (!link) return;
    if (entry.isIntersecting) {
      tabLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => navIo.observe(s));
