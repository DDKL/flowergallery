var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-title="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}


function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray(mode) {
  'use strict';
  var thumbnails = [document.querySelectorAll(THUMBNAIL_LINK_SELECTOR), document.querySelectorAll('.thumbnail-image')];
  var thumbnailArray = [].slice.call(thumbnails[mode]);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray(0);
  thumbnails.forEach(addThumbClickHandler);
}

function randomizeFlower() {
  var rand = Math.round(Math.random() * 10) % 5;
  var thumbnails = getThumbnailsArray(0);
  var randomImage = thumbnails[rand];
  randomImage.setAttribute('data-image-url', 'https://cdn.pixabay.com/photo/2015/12/23/22/24/decoration-1106219_960_720.png');
}

function resetFlowerList(mode) {
  var originalThumbnails = getThumbnailsArray(1);
  var currentThumbnails = getThumbnailsArray(0);
  currentThumbnails.forEach(function(thumb, i) {
    thumb.setAttribute('data-image-url',originalThumbnails[i].getAttribute("src"));
  });
  if (mode) {
    randomizeFlower();
  }
}

initializeEvents();
