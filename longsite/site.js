window.addEventListener('DOMContentLoaded', function() {
    const fadeEffect = document.getElementById('fade-effect');
    fadeEffect.addEventListener('animationend', function() {
      document.getElementById('premium-btn').style.visibility = 'visible';
    });
  
    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  });
  
  function redirectToPremium() {
    window.location.href = 'premium.html';
  }
  
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }
  