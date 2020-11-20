// button-top.js

$(() => {
  // On scroll, check distance from top of page
  $(window).on('scroll', (e) => {
    const scrollTop = $(window).scrollTop();
    if (scrollTop > 400) {
      $('#button-top').fadeIn(100);
    } else if (scrollTop <= 400) {
      $('#button-top').fadeOut(100);
    }
  });
});
