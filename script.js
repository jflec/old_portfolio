document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show');
    hamburger.classList.toggle('show');
  });
  document.addEventListener('mousemove', parallax);
  function parallax(e) {
    this.querySelectorAll('.layer').forEach((layer) => {
      const speed = layer.getAttribute('data-speed');
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 420 ||
      document.documentElement.scrollTop > 420
    ) {
      document.getElementById('navbar-container').style.backgroundColor =
        '#141414';
      document.getElementById('navbar-container').style.borderBottom =
        '2px solid #03f5ca';
    } else {
      document.getElementById('navbar-container').style.backgroundColor =
        'transparent';
      document.getElementById('navbar-container').style.borderBottom = 'none';
    }
  }
});
