$(function () {
  const mainNav = $('#nav-main');
  $(window).on('scroll', function() {
    const scrollTop     = $(window).scrollTop();
    const elementOffset = mainNav.offset().top;
    const distance      = (elementOffset - scrollTop);
    const height = mainNav.height;
    const min = -1 * height;
    console.log(`navPostion: `, distance);
    //if(distance < min) mainNav.attr('top', )
  });
});
