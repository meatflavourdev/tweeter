const composeMsgs = [
  'Watchu thinkin?',
  'Write somethin dude!',
  'Input message string here... 🤖',
  'Share your deepest thought',
  'How ya doin?',
  'Waaasssssssssssup?',
  'Tell me a secret-- I won\'t tell, promise 🤞',
  'I\'m feeling...',
  'This better be cool, everyone is watching 👀'
];

$(document).ready(function() {
  const msg = composeMsgs[Math.floor(Math.random() * composeMsgs.length)];
  $('#tweet-message').html(msg);
});
