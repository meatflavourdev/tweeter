$(document).ready(function () {
  let previousScroll = 0;
  $(window).scroll(function () {
    let currentScroll = $(this).scrollTop();
    if (currentScroll < 100) {
      showTopNav();
    } else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
      if (currentScroll > previousScroll) {
        hideNav();
      } else {
        showNav();
      }
      previousScroll = currentScroll;
    }
  });

  const hideNav = function() {
    $(".mainnav").removeClass("isvisible").addClass("ishidden");
  };

  const showNav = function() {
    $(".mainnav").removeClass("ishidden").addClass("isvisible").addClass("scrolling");
  };
});
