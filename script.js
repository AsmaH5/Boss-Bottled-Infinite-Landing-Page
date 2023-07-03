const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", function() {
  closeButton.parentNode.remove();
});

function toggleVideo() {
  var video = document.getElementById("banner-video");
  var button = document.getElementById("video-toggle");

  if (video.paused) {
    video.play();
    button.innerHTML = "Pause";
  } else {
    video.pause();
    button.innerHTML = "Play";
  }
}

const video = document.getElementById('banner-video');
const playPauseButton = document.getElementById('video-toggle');

playPauseButton.addEventListener('click', toggleVideo);

window.addEventListener('resize', function() {
  if (window.innerWidth <= 1040) {
    video.pause();
    playPauseButton.innerHTML = 'Play';
  } else {
    video.play();
    playPauseButton.innerHTML = 'Pause';
  }
});

window.addEventListener('load', function() {
  if (window.innerWidth > 1040) {
    video.play();
    playPauseButton.innerHTML = 'Pause';
  }
});


