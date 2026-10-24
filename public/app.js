// Runtime metrics & client interactivity
document.addEventListener('DOMContentLoaded', () => {
  let seconds = 0;
  const counterElement = document.getElementById('uptime-counter');

  // Increment uptime counter
  if (counterElement) {
    setInterval(() => {
      seconds++;
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      counterElement.textContent = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
    }, 1000);
  }

  // Smooth scroll for nav anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  console.log('🚀 Apache Web Application carregada com sucesso a partir do container Docker!');
});
