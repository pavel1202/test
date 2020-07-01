window.addEventListener('scroll', function() {
    console.log(document.getElementsByClassName('header__clouds')[0].style);
    document.getElementsByClassName('header__clouds')[0].style.top = pageYOffset + 'px';
  });