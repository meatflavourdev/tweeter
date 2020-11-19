/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createPostElement = function(post) {
  return `
  <article class="post card is-primary">
    <header>
      <div class="profile-info pb-5">
        <img class=profile-avatar" src="${post.user.avatars}" alt="User Avatar" />
        <h2 class="has-text-weight-semibold p-3">${post.user.name}</h2>
      </div>
      <h3 class="profile-username">${post.user.handle}</h3>
    </header>
    <div class="post-body pb-5 mb-3">${post.content.text}</div>
    <footer>
      <span class="post-date">${post.created_at}</span>
      <div class="post-actions">
        <i class="fas fa-flag fa-md"></i>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="repeat" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-repeat fa-md"><path fill="currentColor" d="M512 256c0 88.224-71.775 160-160 160H170.067l34.512 32.419c9.875 9.276 10.119 24.883.539 34.464l-10.775 10.775c-9.373 9.372-24.568 9.372-33.941 0l-92.686-92.686c-9.373-9.373-9.373-24.568 0-33.941l92.686-92.686c9.373-9.373 24.568-9.373 33.941 0l10.775 10.775c9.581 9.581 9.337 25.187-.539 34.464L170.067 352H352c52.935 0 96-43.065 96-96 0-13.958-2.996-27.228-8.376-39.204-4.061-9.039-2.284-19.626 4.723-26.633l12.183-12.183c11.499-11.499 30.965-8.526 38.312 5.982C505.814 205.624 512 230.103 512 256zM72.376 295.204C66.996 283.228 64 269.958 64 256c0-52.935 43.065-96 96-96h181.933l-34.512 32.419c-9.875 9.276-10.119 24.883-.539 34.464l10.775 10.775c9.373 9.372 24.568 9.372 33.941 0l92.686-92.686c9.373-9.373 9.373-24.568 0-33.941l-92.686-92.686c-9.373-9.373-24.568-9.373-33.941 0L306.882 29.12c-9.581 9.581-9.337 25.187.539 34.464L341.933 96H160C71.775 96 0 167.776 0 256c0 25.897 6.186 50.376 17.157 72.039 7.347 14.508 26.813 17.481 38.312 5.982l12.183-12.183c7.008-7.008 8.786-17.595 4.724-26.634z" class=""></path></svg>
        <i class="fas fa-heart fa-md"></i>
      </div>
    </footer>
  </article>
  `;
};

const renderPosts = function(postArray) {
  for (const post of postArray) {
    const $post = createPostElement(post);
    $('#postlist').append($post);
  }
};

const submitPost = function (event) {
  event.preventDefault();
  const formData = $("#compose-form").serialize();
  $.post("/tweets/", formData, () => {
    console.log("Compose form submission succeeded");
  }).fail((error) => {
    console.log("Compose form submission failed", error);
  });
};

const loadPosts = function () {
  $.get('/tweets/', function (data) {
    renderPosts(data);
    console.log('Fetch posts from server succeeded');
  }).fail((error) => {
    console.log('Fetch posts from server failed', error);
  });
};

$(document).ready(function() {
  // Compose form submit event handler
  $("#compose-form").on("submit", submitPost);
  loadPosts();
});
