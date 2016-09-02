(function (rippleBtn) {
  'use strict';
  var btnRipple = function(e) {
    // body...
    var target = e.target;

    if(!target.classList.contains('rippleOn')) return false;

    // if(target.tagName.toLowerCase() !== 'button') return false;

    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector('.ripple');
    if(!ripple){
     ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
            target.appendChild(ripple); /* Devolve a referência na nova posição do ripple */
    }
    ripple.classList.remove('show');
    var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;

    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
    return false;
  }

  document.addEventListener('click', btnRipple, false);



  // show more -----------------------------------------------------------------
  var size_li = $("#myList .card").size();
  console.log(size_li)
  var x=7;
  // $('#myList .card:lt('+x+')').show();
  $('#loadMore').click(function () {
      x= (x+2 <= size_li) ? x+2 : size_li;
      $('#myList .card:lt('+x+')').fadeIn(100);
      if(x===size_li)
        $(this).hide()
  });
  $('#showLess').click(function () {
      x=(x-2<0) ? 2 : x-2;
      $('#myList .card').not(':lt('+x+')').hide();
  });

})(window);

