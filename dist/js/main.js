(function(appl) {
    "use strict";
    var speed = 2e3;
    var container = $(".display-animation");
    container.each(function() {
        var elements = $(this).children();
        elements.each(function() {
            var elementOffset = $(this).offset();
            var offset = elementOffset.left * .8 + elementOffset.top;
            var delay = parseFloat(offset / speed).toFixed(2);
            $(this).css("-webkit-animation-delay", delay + "s").css("-o-animation-delay", delay + "s").css("animation-delay", delay + "s").addClass("animated");
        });
    });
    var circle = document.querySelector(".material-btn");
    var link = document.querySelector(".material-content").querySelectorAll("li");
    var ham = document.querySelector(".material-hamburger");
    var main = document.querySelector("main");
    var win = window;
    function openMenu(event) {
        circle.classList.toggle("active");
        ham.classList.toggle("material-close");
        main.classList.toggle("active");
        for (var i = 0; i < link.length; i++) {
            link[i].classList.toggle("active");
        }
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    function closeMenu() {
        if (circle.classList.contains("active")) {
            circle.classList.remove("active");
            for (var i = 0; i < link.length; i++) {
                link[i].classList.toggle("active");
            }
            ham.classList.remove("material-close");
            main.classList.remove("active");
        }
    }
    circle.addEventListener("click", openMenu, false);
    win.addEventListener("click", closeMenu, false);
})(window);
(function(rippleBtn) {
    "use strict";
    var btnRipple = function(e) {
        var target = e.target;
        if (!target.classList.contains("rippleOn")) return false;
        var rect = target.getBoundingClientRect();
        var ripple = target.querySelector(".ripple");
        if (!ripple) {
            ripple = document.createElement("span");
            ripple.className = "ripple";
            ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + "px";
            target.appendChild(ripple);
        }
        ripple.classList.remove("show");
        var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
        var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
        ripple.style.top = top + "px";
        ripple.style.left = left + "px";
        ripple.classList.add("show");
        return false;
    };
    document.addEventListener("click", btnRipple, false);
    var size_li = $("#myList .card").size();
    console.log(size_li);
    var x = 7;
    $("#loadMore").click(function() {
        x = x + 2 <= size_li ? x + 2 : size_li;
        $("#myList .card:lt(" + x + ")").fadeIn(100);
        if (x === size_li) $(this).hide();
    });
    $("#showLess").click(function() {
        x = x - 2 < 0 ? 2 : x - 2;
        $("#myList .card").not(":lt(" + x + ")").hide();
    });
})(window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJyaXBwbGVCdXR0b24uanMiXSwibmFtZXMiOlsiYXBwbCIsInNwZWVkIiwiY29udGFpbmVyIiwiJCIsImVhY2giLCJlbGVtZW50cyIsInRoaXMiLCJjaGlsZHJlbiIsImVsZW1lbnRPZmZzZXQiLCJvZmZzZXQiLCJsZWZ0IiwidG9wIiwiZGVsYXkiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNzcyIsImFkZENsYXNzIiwiY2lyY2xlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGluayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoYW0iLCJtYWluIiwid2luIiwid2luZG93Iiwib3Blbk1lbnUiLCJldmVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImkiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImNsb3NlTWVudSIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJpcHBsZUJ0biIsImJ0blJpcHBsZSIsImUiLCJ0YXJnZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmlwcGxlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJNYXRoIiwibWF4IiwiYXBwZW5kQ2hpbGQiLCJwYWdlWSIsIm9mZnNldEhlaWdodCIsImJvZHkiLCJzY3JvbGxUb3AiLCJwYWdlWCIsIm9mZnNldFdpZHRoIiwic2Nyb2xsTGVmdCIsImFkZCIsInNpemVfbGkiLCJzaXplIiwiY29uc29sZSIsImxvZyIsIngiLCJjbGljayIsImZhZGVJbiIsImhpZGUiLCJub3QiXSwibWFwcGluZ3MiOiJDQUFBLFNBQVdBO0lBQ1Q7SUFFRSxJQUFJQyxRQUFRO0lBQ1osSUFBSUMsWUFBYUMsRUFBRTtJQUNuQkQsVUFBVUUsS0FBSztRQUNYLElBQUlDLFdBQVdGLEVBQUVHLE1BQU1DO1FBQ3ZCRixTQUFTRCxLQUFLO1lBQ1YsSUFB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c291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChhcHBsKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBzcGVlZCA9IDIwMDA7XG4gICAgdmFyIGNvbnRhaW5lciA9ICAkKCcuZGlzcGxheS1hbmltYXRpb24nKTtcbiAgICBjb250YWluZXIuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuICAgICAgICBlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRPZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IGVsZW1lbnRPZmZzZXQubGVmdCowLjggKyBlbGVtZW50T2Zmc2V0LnRvcDtcbiAgICAgICAgICAgIHZhciBkZWxheSA9IHBhcnNlRmxvYXQob2Zmc2V0L3NwZWVkKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5jc3MoXCItd2Via2l0LWFuaW1hdGlvbi1kZWxheVwiLCBkZWxheSsncycpXG4gICAgICAgICAgICAgICAgLmNzcyhcIi1vLWFuaW1hdGlvbi1kZWxheVwiLCBkZWxheSsncycpXG4gICAgICAgICAgICAgICAgLmNzcyhcImFuaW1hdGlvbi1kZWxheVwiLCBkZWxheSsncycpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhbmltYXRlZCcpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHZhciBjaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF0ZXJpYWwtYnRuJyk7XG4gICAgdmFyIGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF0ZXJpYWwtY29udGVudCcpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgdmFyIGhhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXRlcmlhbC1oYW1idXJnZXInKTtcbiAgICB2YXIgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICB2YXIgd2luID0gd2luZG93O1xuXG4gICAgZnVuY3Rpb24gb3Blbk1lbnUoZXZlbnQpIHtcblxuICAgICAgY2lyY2xlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgaGFtLmNsYXNzTGlzdC50b2dnbGUoJ21hdGVyaWFsLWNsb3NlJyk7XG4gICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxpbmtbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgICAgaWYgKGNpcmNsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGNpcmNsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGlua1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBoYW0uY2xhc3NMaXN0LnJlbW92ZSgnbWF0ZXJpYWwtY2xvc2UnKTtcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSwgZmFsc2UpO1xuXG4gICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51LCBmYWxzZSk7XG5cbn0pKHdpbmRvdyk7XG4iLCIoZnVuY3Rpb24gKHJpcHBsZUJ0bikge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBidG5SaXBwbGUgPSBmdW5jdGlvbihlKSB7XG4gICAgLy8gYm9keS4uLlxuICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcblxuICAgIGlmKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyaXBwbGVPbicpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBpZih0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnYnV0dG9uJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHJpcHBsZSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcucmlwcGxlJyk7XG4gICAgaWYoIXJpcHBsZSl7XG4gICAgIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc05hbWUgPSAncmlwcGxlJztcbiAgICAgICAgICAgIHJpcHBsZS5zdHlsZS5oZWlnaHQgPSByaXBwbGUuc3R5bGUud2lkdGggPSBNYXRoLm1heChyZWN0LndpZHRoLCByZWN0LmhlaWdodCkgKyAncHgnO1xuICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHJpcHBsZSk7IC8qIERldm9sdmUgYSByZWZlcsOqbmNpYSBuYSBub3ZhIHBvc2nDp8OjbyBkbyByaXBwbGUgKi9cbiAgICB9XG4gICAgcmlwcGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB2YXIgdG9wID0gZS5wYWdlWSAtIHJlY3QudG9wIC0gcmlwcGxlLm9mZnNldEhlaWdodCAvIDIgLSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICB2YXIgbGVmdCA9IGUucGFnZVggLSByZWN0LmxlZnQgLSByaXBwbGUub2Zmc2V0V2lkdGggLyAyIC0gZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xuXG4gICAgcmlwcGxlLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG4gICAgcmlwcGxlLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcbiAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuUmlwcGxlLCBmYWxzZSk7XG5cblxuXG4gIC8vIHNob3cgbW9yZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YXIgc2l6ZV9saSA9ICQoXCIjbXlMaXN0IC5jYXJkXCIpLnNpemUoKTtcbiAgY29uc29sZS5sb2coc2l6ZV9saSlcbiAgdmFyIHg9NztcbiAgLy8gJCgnI215TGlzdCAuY2FyZDpsdCgnK3grJyknKS5zaG93KCk7XG4gICQoJyNsb2FkTW9yZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHg9ICh4KzIgPD0gc2l6ZV9saSkgPyB4KzIgOiBzaXplX2xpO1xuICAgICAgJCgnI215TGlzdCAuY2FyZDpsdCgnK3grJyknKS5mYWRlSW4oMTAwKTtcbiAgICAgIGlmKHg9PT1zaXplX2xpKVxuICAgICAgICAkKHRoaXMpLmhpZGUoKVxuICB9KTtcbiAgJCgnI3Nob3dMZXNzJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgeD0oeC0yPDApID8gMiA6IHgtMjtcbiAgICAgICQoJyNteUxpc3QgLmNhcmQnKS5ub3QoJzpsdCgnK3grJyknKS5oaWRlKCk7XG4gIH0pO1xuXG59KSh3aW5kb3cpO1xuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
