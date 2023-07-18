document.lastScrollPosition = 0;

document.addEventListener('scroll', () => {
    const direction = window.pageYOffset > document.lastScrollPosition ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')];
    sections.forEach((section, index) => {
        if (window.pageYOffset >= section.offsetTop && window.pageYOffset < section.offsetTop + section.offsetHeight) {
          document.lastCentered = index;
          if (document.onWayTo === index) {
            document.onWayTo = null;
          }
        }
      });
    
      document.lastScrollPosition = window.pageYOffset;
  });
  

 
  document.lastScrollPosition = window.pageYOffset;

