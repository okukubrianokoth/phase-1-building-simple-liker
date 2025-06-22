// Symbols for hearts
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Hide modal by default
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

// Select all hearts
const hearts = document.querySelectorAll('.like-glyph');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        // Toggle heart
        if (heart.innerText === EMPTY_HEART) {
          heart.innerText = FULL_HEART;
          heart.classList.add('activated-heart');
        } else {
          heart.innerText = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        // Show error
        errorModal.classList.remove('hidden');
        document.getElementById('modal-message').innerText = error;
        
        // Hide after 3 seconds
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
});
