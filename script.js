$(function(){
    const content = ".content-wrap--bg";
    const showClass = "show"; 

    $(window).on("load scroll resize", function(){
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
      const offset = $(content).offset().top;
      const setTiming = windowHeight * 0.5;

      if (scroll + windowHeight >= offset + setTiming){
        $(content).addClass(showClass);
      } else {
        $(content).removeClass(showClass);
      }
    });
});
document.addEventListener('DOMContentLoaded', function () {
  const toggleDarkModeButton = document.getElementById('toggleDarkMode');
  const body = document.body;

  toggleDarkModeButton.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
  });
});