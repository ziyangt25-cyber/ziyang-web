document.addEventListener("DOMContentLoaded", function () {
  var viewer = document.getElementById("photo-viewer");
  if (!viewer) {
    return;
  }

  var viewerImg = viewer.querySelector(".photo-viewer__img");
  var viewerCaption = viewer.querySelector(".photo-viewer__caption");
  var closeBtn = viewer.querySelector(".photo-viewer__close");
  var prevBtn = viewer.querySelector(".photo-viewer__nav--prev");
  var nextBtn = viewer.querySelector(".photo-viewer__nav--next");
  var openButtons = Array.prototype.slice.call(
    document.querySelectorAll(".photo-item__open")
  );
  var photos = [];
  var currentIndex = 0;

  if (!openButtons.length) {
    return;
  }

  openButtons.forEach(function (button) {
    var src = button.getAttribute("data-src");
    var figure = button.closest("figure");
    var captionEl = figure ? figure.querySelector("figcaption") : null;
    photos.push({
      src: src,
      caption: captionEl ? captionEl.textContent : "",
    });
  });

  function updateNavButtons() {
    prevBtn.hidden = currentIndex === 0;
    nextBtn.hidden = currentIndex === photos.length - 1;
  }

  function showPhoto(index) {
    if (!photos.length) {
      return;
    }
    currentIndex = Math.max(0, Math.min(index, photos.length - 1));
    var photo = photos[currentIndex];
    viewerImg.src = photo.src;
    viewerImg.alt = photo.caption;
    viewerCaption.textContent = photo.caption;
    updateNavButtons();
  }

  function openViewer(index) {
    showPhoto(index);
    viewer.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeViewer() {
    viewer.hidden = true;
    viewerImg.removeAttribute("src");
    document.body.style.overflow = "";
  }

  function showPrev() {
    if (currentIndex > 0) {
      showPhoto(currentIndex - 1);
    }
  }

  function showNext() {
    if (currentIndex < photos.length - 1) {
      showPhoto(currentIndex + 1);
    }
  }

  openButtons.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      openViewer(index);
    });
  });

  var photoGrid = document.querySelector(".trip-photos__grid");
  if (photoGrid) {
    photoGrid.addEventListener("click", function (event) {
      var button = event.target.closest(".photo-item__open");
      if (!button) {
        return;
      }
      var index = openButtons.indexOf(button);
      if (index >= 0) {
        event.preventDefault();
        openViewer(index);
      }
    });
  }

  closeBtn.addEventListener("click", closeViewer);
  prevBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    showPrev();
  });
  nextBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    showNext();
  });

  viewer.addEventListener("click", function (event) {
    if (event.target === viewer) {
      closeViewer();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (viewer.hidden) {
      return;
    }
    if (event.key === "Escape") {
      closeViewer();
    } else if (event.key === "ArrowLeft") {
      showPrev();
    } else if (event.key === "ArrowRight") {
      showNext();
    }
  });
});
