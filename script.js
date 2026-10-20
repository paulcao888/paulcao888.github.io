(() => {
  const filters = document.querySelector('.filters');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('[data-category]')];
  const count = document.querySelector('.project-count');
  if (filters && count && buttons.length && projects.length) {
    filters.hidden = false;
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.filter;
        buttons.forEach(item => {
          const selected = item === button;
          item.classList.toggle('active', selected);
          item.setAttribute('aria-pressed', String(selected));
        });
        let visible = 0;
        projects.forEach(project => {
          project.hidden = category !== 'all' && project.dataset.category !== category;
          if (!project.hidden) visible += 1;
        });
        count.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
      });
    });
  }
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
