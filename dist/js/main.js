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
    $(".open").click(function() {
        $(this).toggleClass("active");
        $(this).parent().find("ul").toggleClass("active");
    });
    $(".close").click(function() {
        $(".open").toggleClass("active");
        $(this).parent().find("ul").toggleClass("active");
    });
})(window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJyaXBwbGVCdXR0b24uanMiXSwibmFtZXMiOlsiYXBwbCIsInNwZWVkIiwiY29udGFpbmVyIiwiJCIsImVhY2giLCJlbGVtZW50cyIsInRoaXMiLCJjaGlsZHJlbiIsImVsZW1lbnRPZmZzZXQiLCJvZmZzZXQiLCJsZWZ0IiwidG9wIiwiZGVsYXkiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNzcyIsImFkZENsYXNzIiwid2luZG93IiwicmlwcGxlQnRuIiwiYnRuUmlwcGxlIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJpcHBsZSIsInF1ZXJ5U2VsZWN0b3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwiTWF0aCIsIm1heCIsImFwcGVuZENoaWxkIiwicmVtb3ZlIiwicGFnZVkiLCJvZmZzZXRIZWlnaHQiLCJib2R5Iiwic2Nyb2xsVG9wIiwicGFnZVgiLCJvZmZzZXRXaWR0aCIsInNjcm9sbExlZnQiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwic2l6ZV9saSIsInNpemUiLCJjb25zb2xlIiwibG9nIiwieCIsImNsaWNrIiwiZmFkZUluIiwiaGlkZSIsIm5vdCIsInRvZ2dsZUNsYXNzIiwicGFyZW50IiwiZmluZCJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBV0E7SUFDVDtJQUVFLElBQUlDLFFBQVE7SUFDWixJQUFJQyxZQUFhQyxFQUFFO0lBQ25CRCxVQUFVRSxLQUFLO1FBQ1gsSUFBSUMsV0FBV0YsRUFBRUcsTUFBTUM7UUFDdkJGLFNBQVNELEtBQUs7WUFDVixJQUFJSSxnQkFBZ0JMLEVBQUVHLE1BQU1HO1lBQzVCLElBQUlBLFNBQVNELGNBQWNFLE9BQUssS0FBTUYsY0FBY0c7WUFDcEQsSUFBSUMsUUFBUUMsV0FBV0osU0FBT1IsT0FBT2EsUUFBUTtZQUM3Q1gsRUFBRUcsTUFDR1MsSUFBSSwyQkFBMkJILFFBQU0sS0FDckNHLElBQUksc0JBQXNCSCxRQUFNLEtBQ2hDRyxJQUFJLG1CQUFtQkgsUUFBTSxLQUM3QkksU0FBUzs7O0dBcUN2QkM7Q0NwREgsU0FBV0M7SUFDVDtJQUNBLElBQUlDLFlBQVksU0FBU0M7UUFFdkIsSUFBSUMsU0FBU0QsRUFBRUM7UUFFZixLQUFJQSxPQUFPQyxVQUFVQyxTQUFTLGFBQWEsT0FBTztRQUlsRCxJQUFJQyxPQUFPSCxPQUFPSTtRQUNsQixJQUFJQyxTQUFTTCxPQUFPTSxjQUFjO1FBQ2xDLEtBQUlELFFBQU87WUFDVkEsU0FBU0UsU0FBU0MsY0FBYztZQUN6QkgsT0FBT0ksWUFBWTtZQUNuQkosT0FBT0ssTUFBTUMsU0FBU04sT0FBT0ssTUFBTUUsUUFBUUMsS0FBS0MsSUFBSVgsS0FBS1MsT0FBT1QsS0FBS1EsVUFBVTtZQUMvRVgsT0FBT2UsWUFBWVY7O1FBRTNCQSxPQUFPSixVQUFVZSxPQUFPO1FBQ3hCLElBQUkxQixNQUFNUyxFQUFFa0IsUUFBUWQsS0FBS2IsTUFBTWUsT0FBT2EsZUFBZSxJQUFJWCxTQUFTWSxLQUFLQztRQUN2RSxJQUFJL0IsT0FBT1UsRUFBRXNCLFFBQVFsQixLQUFLZCxPQUFPZ0IsT0FBT2lCLGNBQWMsSUFBSWYsU0FBU1ksS0FBS0k7UUFFeEVsQixPQUFPSyxNQUFNcEIsTUFBTUEsTUFBTTtRQUN6QmUsT0FBT0ssTUFBTXJCLE9BQU9BLE9BQU87UUFDM0JnQixPQUFPSixVQUFVdUIsSUFBSTtRQUNyQixPQUFPOztJQUdUakIsU0FBU2tCLGlCQUFpQixTQUFTM0IsV0FBVztJQUs5QyxJQUFJNEIsVUFBVTVDLEVBQUUsaUJBQWlCNkM7SUFDakNDLFFBQVFDLElBQUlIO0lBQ1osSUFBSUksSUFBRTtJQUVOaEQsRUFBRSxhQUFhaUQsTUFBTTtRQUNqQkQsSUFBSUEsSUFBRSxLQUFLSixVQUFXSSxJQUFFLElBQUlKO1FBQzVCNUMsRUFBRSxzQkFBb0JnRCxJQUFFLEtBQUtFLE9BQU87UUFDcEMsSUFBR0YsTUFBSUosU0FDTDVDLEVBQUVHLE1BQU1nRDs7SUFFZG5ELEVBQUUsYUFBYWlELE1BQU07UUFDakJELElBQUdBLElBQUUsSUFBRSxJQUFLLElBQUlBLElBQUU7UUFDbEJoRCxFQUFFLGlCQUFpQm9ELElBQUksU0FBT0osSUFBRSxLQUFLRzs7SUFLM0NuRCxFQUFFLFNBQVNpRCxNQUFNO1FBRWZqRCxFQUFFRyxNQUFNa0QsWUFBWTtRQUNwQnJELEVBQUVHLE1BQU1tRCxTQUFTQyxLQUFLLE1BQU1GLFlBQVk7O0lBSzFDckQsRUFBRSxVQUFVaUQsTUFBTTtRQUNoQmpELEVBQUUsU0FBU3FELFlBQVk7UUFDdkJyRCxFQUFFRyxNQUFNbUQsU0FBU0MsS0FBSyxNQUFNRixZQUFZOztHQUl2Q3ZDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGFwcGwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIHNwZWVkID0gMjAwMDtcbiAgICB2YXIgY29udGFpbmVyID0gICQoJy5kaXNwbGF5LWFuaW1hdGlvbicpO1xuICAgIGNvbnRhaW5lci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSAkKHRoaXMpLmNoaWxkcmVuKCk7XG4gICAgICAgIGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudE9mZnNldCA9ICQodGhpcykub2Zmc2V0KCk7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWxlbWVudE9mZnNldC5sZWZ0KjAuOCArIGVsZW1lbnRPZmZzZXQudG9wO1xuICAgICAgICAgICAgdmFyIGRlbGF5ID0gcGFyc2VGbG9hdChvZmZzZXQvc3BlZWQpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLmNzcyhcIi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5XCIsIGRlbGF5KydzJylcbiAgICAgICAgICAgICAgICAuY3NzKFwiLW8tYW5pbWF0aW9uLWRlbGF5XCIsIGRlbGF5KydzJylcbiAgICAgICAgICAgICAgICAuY3NzKFwiYW5pbWF0aW9uLWRlbGF5XCIsIGRlbGF5KydzJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gdmFyIGNpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXRlcmlhbC1idG4nKTtcbiAgICAvLyB2YXIgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXRlcmlhbC1jb250ZW50JykucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICAvLyB2YXIgaGFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hdGVyaWFsLWhhbWJ1cmdlcicpO1xuICAgIC8vIHZhciBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIC8vIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgICAvLyBmdW5jdGlvbiBvcGVuTWVudShldmVudCkge1xuXG4gICAgLy8gICBjaXJjbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgLy8gICBoYW0uY2xhc3NMaXN0LnRvZ2dsZSgnbWF0ZXJpYWwtY2xvc2UnKTtcbiAgICAvLyAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmsubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgbGlua1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAvLyB9XG5cbiAgICAvLyBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG4gICAgLy8gICBpZiAoY2lyY2xlLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAvLyAgICAgY2lyY2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIC8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmsubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICBsaW5rW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGhhbS5jbGFzc0xpc3QucmVtb3ZlKCdtYXRlcmlhbC1jbG9zZScpO1xuICAgIC8vICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIC8vIGNpcmNsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51LCBmYWxzZSk7XG5cbiAgICAvLyB3aW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUsIGZhbHNlKTtcblxufSkod2luZG93KTtcbiIsIihmdW5jdGlvbiAocmlwcGxlQnRuKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIGJ0blJpcHBsZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAvLyBib2R5Li4uXG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgaWYoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JpcHBsZU9uJykpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIGlmKHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdidXR0b24nKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgcmlwcGxlID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5yaXBwbGUnKTtcbiAgICBpZighcmlwcGxlKXtcbiAgICAgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTmFtZSA9ICdyaXBwbGUnO1xuICAgICAgICAgICAgcmlwcGxlLnN0eWxlLmhlaWdodCA9IHJpcHBsZS5zdHlsZS53aWR0aCA9IE1hdGgubWF4KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KSArICdweCc7XG4gICAgICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQocmlwcGxlKTsgLyogRGV2b2x2ZSBhIHJlZmVyw6puY2lhIG5hIG5vdmEgcG9zacOnw6NvIGRvIHJpcHBsZSAqL1xuICAgIH1cbiAgICByaXBwbGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIHZhciB0b3AgPSBlLnBhZ2VZIC0gcmVjdC50b3AgLSByaXBwbGUub2Zmc2V0SGVpZ2h0IC8gMiAtIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIHZhciBsZWZ0ID0gZS5wYWdlWCAtIHJlY3QubGVmdCAtIHJpcHBsZS5vZmZzZXRXaWR0aCAvIDIgLSBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG5cbiAgICByaXBwbGUuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcbiAgICByaXBwbGUuc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidG5SaXBwbGUsIGZhbHNlKTtcblxuXG5cbiAgLy8gc2hvdyBtb3JlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhciBzaXplX2xpID0gJChcIiNteUxpc3QgLmNhcmRcIikuc2l6ZSgpO1xuICBjb25zb2xlLmxvZyhzaXplX2xpKVxuICB2YXIgeD03O1xuICAvLyAkKCcjbXlMaXN0IC5jYXJkOmx0KCcreCsnKScpLnNob3coKTtcbiAgJCgnI2xvYWRNb3JlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgeD0gKHgrMiA8PSBzaXplX2xpKSA/IHgrMiA6IHNpemVfbGk7XG4gICAgICAkKCcjbXlMaXN0IC5jYXJkOmx0KCcreCsnKScpLmZhZGVJbigxMDApO1xuICAgICAgaWYoeD09PXNpemVfbGkpXG4gICAgICAgICQodGhpcykuaGlkZSgpXG4gIH0pO1xuICAkKCcjc2hvd0xlc3MnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICB4PSh4LTI8MCkgPyAyIDogeC0yO1xuICAgICAgJCgnI215TGlzdCAuY2FyZCcpLm5vdCgnOmx0KCcreCsnKScpLmhpZGUoKTtcbiAgfSk7XG5cblxuLy8gc2hvdyBtb3JlIGJ0biBQbHVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiQoJy5vcGVuJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgLy8gJCgnLmNsb3NlJykuZGVsYXkoMTAwMCkuY3NzKHtcInRyYW5zZm9ybVwiOlwic2NhbGUoMSlcIn0pXG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ3VsJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cbn0pXG5cbiQoJy5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICQoJy5vcGVuJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXG4gICQodGhpcykucGFyZW50KCkuZmluZCgndWwnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbn0pXG5cbn0pKHdpbmRvdyk7XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
