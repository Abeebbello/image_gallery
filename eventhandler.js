
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.getElementById('close');

    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
      if (e.target !== modalImg) {
        modal.style.display = 'none';
      }
    });

