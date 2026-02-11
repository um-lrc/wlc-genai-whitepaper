(() => {
  const container = document.getElementById('sidebar-container');
  if (!container) return;

  fetch('sidebar.html')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load sidebar.html: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      container.innerHTML = html;

      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      container.querySelectorAll('.nav-link').forEach((link) => {
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('active');
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
})();

