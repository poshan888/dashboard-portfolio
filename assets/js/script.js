const tabs = document.querySelectorAll('[role="tab"]');

tabs.forEach((tab, index) => {
  tab.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') tabs[(index + 1) % tabs.length].focus();
    if (e.key === 'ArrowLeft') tabs[(index - 1 + tabs.length) % tabs.length].focus();
  });
});
