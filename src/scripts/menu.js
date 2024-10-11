document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
  });

  // menu.js
export function initializeMenuListeners() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('menu-close');
  const coreButton = document.getElementById('core-button');
  const dropdown = document.getElementById('dropdown');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
    });
  }

  if (closeIcon) {
    closeIcon.addEventListener('click', () => {
      menu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
    });
  }

  if (coreButton && dropdown) {
    coreButton.addEventListener('mouseenter', () => dropdown.classList.remove('hidden'));
    dropdown.addEventListener('mouseenter', () => dropdown.classList.remove('hidden'));
    coreButton.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!dropdown.matches(':hover')) dropdown.classList.add('hidden');
      }, 100);
    });
    dropdown.addEventListener('mouseleave', () => dropdown.classList.add('hidden'));
  }
}
