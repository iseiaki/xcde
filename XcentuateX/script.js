
const closeNav = document.querySelector('.close-nav');
const navbarNav = document.querySelector('.navbar-nav');
const opener = document.querySelector('.menu-icon');

opener.addEventListener('click', () => {
  navbarNav.classList.remove('sj');
  navbarNav.classList.add('navbar-nav');
  $('.navbar').toggleClass('show-nav');
});

closeNav.addEventListener('click', () => {
  navbarNav.classList.remove('navbar-nav');
  navbarNav.classList.add('sj');
  $('.navbar').removeClass('show-nav');
});
  AOS.init();

  // Offset value for scrolling (customize as needed)
  var scrollOffset = 200;

  // Attach click event listener to navbar links
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior

      // Get the target section element
      var target = document.querySelector(this.getAttribute('href'));

      // Calculate the scroll position of the target section
      var targetPosition = target.offsetTop - scrollOffset;

      // Scroll to the calculated position
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
