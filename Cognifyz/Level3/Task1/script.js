const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('closeBtn');
    gallery.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
        lightboxImg.src = e.target.src.replace('400', '800'); 
        lightbox.classList.add('active');
      }
    });
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
