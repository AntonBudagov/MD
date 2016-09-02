(function (appl) {
  'use strict';

    var speed = 2000;
    var container =  $('.display-animation');
    container.each(function() {
        var elements = $(this).children();
        elements.each(function() {
            var elementOffset = $(this).offset();
            var offset = elementOffset.left*0.8 + elementOffset.top;
            var delay = parseFloat(offset/speed).toFixed(2);
            $(this)
                .css("-webkit-animation-delay", delay+'s')
                .css("-o-animation-delay", delay+'s')
                .css("animation-delay", delay+'s')
                .addClass('animated');
        });
    });

    var circle = document.querySelector('.material-btn');
    var link = document.querySelector('.material-content').querySelectorAll('li');
    var ham = document.querySelector('.material-hamburger');
    var main = document.querySelector('main');
    var win = window;

    function openMenu(event) {

      circle.classList.toggle('active');
      ham.classList.toggle('material-close');
      main.classList.toggle('active');
      for (var i = 0; i < link.length; i++) {
        link[i].classList.toggle('active');
      }
      event.preventDefault();
      event.stopImmediatePropagation();
    }

    function closeMenu() {
      if (circle.classList.contains('active')) {
        circle.classList.remove('active');
        for (var i = 0; i < link.length; i++) {
          link[i].classList.toggle('active');
        }
        ham.classList.remove('material-close');
        main.classList.remove('active');
      }
    }

    circle.addEventListener('click', openMenu, false);

    win.addEventListener('click', closeMenu, false);

})(window);
