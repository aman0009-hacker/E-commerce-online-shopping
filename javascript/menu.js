$(function () {
  //toggle two classes on button element
    $('.toggle-btn').on('click',function () {
        $('.toggle-btn').toggleClass('clicked');
        $('.mob-nav').toggleClass('show');
    });
  
});