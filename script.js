// Populate home page gallery using photos from localStorage (if any)
document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.getElementById('gallery');
  if (galleryContainer) {
    const photos = JSON.parse(localStorage.getItem('photos')) || [];
    photos.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.innerHTML = `
        <img src="${item.src}" alt="Photo ${index}">
        <p>${item.desc}</p>
      `;
      galleryContainer.appendChild(div);
    });
    // Reveal gallery items on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.gallery-item').forEach(item => {
      observer.observe(item);
    });
  }
});
