(() => {
  const filters = document.querySelector('.note-filters');
  if (!filters) return;

  const buttons = filters.querySelectorAll('[data-note-filter]');
  const groups = document.querySelectorAll('[data-note-topic]');
  const status = document.querySelector('.note-filter-status');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const topic = button.dataset.noteFilter;
      let count = 0;

      groups.forEach((group) => {
        group.hidden = topic !== 'all' && group.dataset.noteTopic !== topic;
        if (!group.hidden) count += group.querySelectorAll('.note-row').length;
      });

      buttons.forEach((item) => {
        item.setAttribute('aria-pressed', String(item === button));
      });
      status.textContent = `${button.textContent}：显示 ${count} 篇笔记`;
    });
  });

  filters.hidden = false;
})();
