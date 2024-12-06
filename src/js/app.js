// Selecting DOM elements
const links = document.querySelectorAll(".navbar__link");
const videoPlayer = document.querySelector(".video__player");
const playButton = document.querySelector(".video__button");
const skipButton = document.querySelector(".video__button-skip");
const choiceButtons = document.querySelector(".choice__buttons");
const navbar = document.querySelector(".navbar");
const mainBackground = document.querySelector("main");
const homeLink = document.querySelector(".navbar__home-link");

// Reset currentTime for video
videoPlayer.currentTime = 0;

// Handle navbar link click
const handleLinkClick = (e) => {
  links.forEach((link) => link.classList.remove("navbar__link--active"));
  e.currentTarget.classList.add("navbar__link--active");
};

// Handle video controls
const handleVideoControls = (e) => {
  if (e.target.classList.contains("video__button")) {
    // Start video player
    mainBackground.classList.add("no-background");
    navbar.classList.add("hidden");
    videoPlayer.classList.remove("hidden");
    videoPlayer.play();
    playButton.classList.add("hidden");
    skipButton.classList.remove("hidden");
  } else if (e.target.classList.contains("video__button-skip")) {
    // Skip to specific time in video
    videoPlayer.currentTime = 36;
  } else if (e.target.classList.contains("navbar__home-link")) {
    // Reset video and navigation state
    e.preventDefault();
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.classList.add("hidden");
    navbar.classList.remove("hidden");
    playButton.classList.remove("hidden");
    skipButton.classList.add("hidden");
    choiceButtons.classList.add("hidden");
    mainBackground.classList.remove("no-background");
  }
};

// Handling video end
videoPlayer.addEventListener("ended", () => {
  videoPlayer.currentTime = 0;
  playButton.classList.add("hidden");
  skipButton.classList.add("hidden");
  videoPlayer.classList.add("hidden");
  navbar.classList.remove("hidden");
  choiceButtons.classList.remove("hidden");
  mainBackground.classList.remove("no-background");
  links.forEach((link) => link.classList.remove("navbar__link--active"));
});

// Add event listeners
links.forEach((link) => link.addEventListener("click", handleLinkClick));
playButton.addEventListener("click", handleVideoControls);
skipButton.addEventListener("click", handleVideoControls);
homeLink.addEventListener("click", handleVideoControls);
