export function setupNavigation() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const desktopCoreButton = document.getElementById('desktop-core-button');
    const desktopDropdown = document.getElementById('desktop-dropdown');
  
    function toggleMobileMenu() {
      console.log('Toggling mobile menu');
      mobileMenu?.classList.toggle('hidden');
    }
  
    function toggleDesktopDropdown() {
      console.log('Toggling desktop dropdown');
      desktopDropdown?.classList.toggle('hidden');
    }
  
    mobileMenuToggle?.addEventListener('click', (event) => {
      console.log('Mobile menu toggle clicked');
      event.stopPropagation();
      toggleMobileMenu();
    });
  
    mobileMenuClose?.addEventListener('click', (event) => {
      console.log('Mobile menu close clicked');
      event.stopPropagation();
      toggleMobileMenu();
    });
  
    desktopCoreButton?.addEventListener('click', (event) => {
      console.log('Desktop core button clicked');
      event.stopPropagation();
      toggleDesktopDropdown();
    });
  
    document.addEventListener('click', (event) => {
      const target = event.target as Element;
      if (!target.closest('#mobile-menu') && !target.closest('#mobile-menu-toggle')) {
        console.log('Closing mobile menu');
        mobileMenu?.classList.add('hidden');
      }
      if (!target.closest('#desktop-core-button') && !target.closest('#desktop-dropdown')) {
        console.log('Closing desktop dropdown');
        desktopDropdown?.classList.add('hidden');
      }
    });
  
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 640) { // sm breakpoint
        console.log('Window resized, hiding mobile menu');
        mobileMenu?.classList.add('hidden');
      }
    });
  
    console.log('Navigation setup complete');
  }