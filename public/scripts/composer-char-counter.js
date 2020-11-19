const MAX_CHAR = 140;

$(document).ready(function() {
  $('#tweet-text').on('input', function(event) {
    let charsleft = MAX_CHAR - event.target.value.length;
    const counter = $('#compose-counter');
    counter.html(charsleft);
    if (charsleft < 0) {
      counter.addClass('negative');
    } else {
      counter.removeClass('negative');
    }
  });
});
