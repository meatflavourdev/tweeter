const MAX_CHAR = 140;

$(document).ready(function() {
  $('#tweet-text').on('input', function(event) {
    let charsleft = MAX_CHAR - event.target.value.length;
    // console.log(MAX_CHAR - event.target.value.length + ' characters left');
    const counter = $('#tweet-text + div output.counter');
    counter.html(charsleft);
    if (charsleft <= 0) {
      counter.addClass('negative');
    } else {
      counter.removeClass('negative');
    }
  });
});
