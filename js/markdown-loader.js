(() => {
  const container = document.getElementById('markdown-content');
  if (!container || typeof marked === 'undefined') {
    return;
  }

  const explicitPath = container.dataset.md;
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const baseName = currentPath.replace(/\.html$/, '');
  const mdPath = explicitPath || `docs/${baseName}.md`;

  const wrapTables = () => {
    const tables = container.querySelectorAll('table');
    tables.forEach((table) => {
      const parent = table.parentElement;
      if (parent && parent.classList.contains('table-container')) {
        return;
      }
      const wrapper = document.createElement('div');
      wrapper.className = 'table-container';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  };

  fetch(mdPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${mdPath}: ${response.status}`);
      }
      return response.text();
    })
    .then((markdown) => {
      container.innerHTML = marked.parse(markdown);
      wrapTables();
    })
    .catch((error) => {
      console.error(error);
      container.innerHTML = `
        <h1>Content unavailable</h1>
        <p>We could not load this section. Please confirm the file exists at <code>${mdPath}</code>.</p>
      `;
    });
})();
