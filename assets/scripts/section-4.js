//coded with help from ChatGPT
document.addEventListener('DOMContentLoaded', function() {;
  const fish = document.querySelector('.fish');
  const microplastics = document.querySelectorAll('.microplastic');

  function checkCollision() {
    microplastics.forEach(microplastic => {
      const fishRect = fish.getBoundingClientRect();
      const microRect = microplastic.getBoundingClientRect();

      if (fishRect.right > microRect.left &&
          fishRect.left < microRect.right &&
          fishRect.bottom > microRect.top &&
          fishRect.top < microRect.bottom) {
        if (microplastic.style.visibility !== 'hidden') {
          microplastic.style.visibility = 'hidden';

          // Increase the timeout duration here
          setTimeout(() => {
            microplastic.style.visibility = 'visible';
          }, 2000);
        }
      }
    });
    requestAnimationFrame(checkCollision); // Continue the loop
  }

  requestAnimationFrame(checkCollision); // Start the collision detection loop
});
