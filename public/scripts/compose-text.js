const composeMsgs = [
  'Watchu thinkin?',
  'Write somethin dude!',
  'Input message string here... 🤖',
  'Share your deepest thought',
  'How ya doin?',
  'Sup dawg? 🐶',
  'Tell me a secret-- I won\'t tell, promise 🤞',
  'I\'m feeling...',
  'This better be cool, everyone\'s watching 👀',
  'Say something nice... 🙂',
  'I know I\'m just a webpage, but you look great today... 😉',
  'Seen any good movies lately?',
  'If you asked me on a date, I\'d say yes 😅',
  'What do you have to say for yourself!? 😠',
  'People need to hear what you have to say!',
  'I can tell this is going to be a good one...'
];

$(document).ready(function() {
  const msg = composeMsgs[Math.floor(Math.random() * composeMsgs.length)];
  $('#tweet-message').html(msg);
});
