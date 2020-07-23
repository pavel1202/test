(function() {
    'use strict';
  
    var btnScrollDown = document.querySelector('#scroll_down');
  
    function scrollDown() {
      var windowCoords = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      (function scroll() {
          console.log('window.pageYOffset: '+window.pageYOffset)
          console.log(' windowCoords: '+ windowCoords)
        if (window.pageYOffset < windowCoords-1000) {
          window.scrollBy(0, 10);
          setTimeout(scroll, 0);
        }else {
          window.scrollTo(0, windowCoords);
        }
      })();
    }
  
    btnScrollDown.addEventListener('click', scrollDown);
  })();