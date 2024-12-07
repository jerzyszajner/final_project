// Selecting DOM elements
const links = document.querySelectorAll(".navbar__link");
const videoPlayer = document.querySelector(".video__player");
const playButton = document.querySelector(".video__button");
const skipButton = document.querySelector(".video__button-skip");
const choiceSection = document.querySelector(".choice");
const choiceButtonsContainer = document.querySelector(".choice__buttons");
const choiceButtons = document.querySelectorAll(".choice__button");
const choiceButtonBlue = document.querySelector(".choice__button--blue");
const choiceButtonRed = document.querySelector(".choice__button--red");
const navbar = document.querySelector(".navbar");
const mainBackground = document.querySelector("main");
const homeLink = document.querySelector(".navbar__home-link");
const audioSection = document.querySelector(".audio");
const audioPlayButton = document.querySelector(".audio__button--play");
const audioPauseButton = document.querySelector(".audio__button--pause");
const audioVolumeSlider = document.querySelector(".audio__volume");
const audioPlayer = document.querySelector(".audio__player");
const audioReturnButton = document.querySelector(".audio__return-button");

// Initialize video and audio
// Reset currentTime for video
videoPlayer.currentTime = 0;

// Set the initial volume to the value from the slider in HTML
audioPlayer.volume = audioVolumeSlider.value;

// Add the audio stream source
audioPlayer.src =
  "https://listenssl.ibizaglobalradio.com:8024/ibizaglobalradio.mp3";

// Utility functions
// Function to reset the audio player
const resetAudioPlayer = () => {
  audioPlayer.pause();
  audioPlayer.src = "";
  audioPlayer.volume = 0.25;
  audioVolumeSlider.value = 0.25;
};
// Function to reset the video player
const resetVideo = () => {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
  videoPlayer.classList.add("hidden");
  skipButton.classList.add("hidden");
};

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
    resetAudioPlayer();
    resetVideo();
    playButton.classList.remove("hidden");
    choiceSection.classList.add("hidden");
    mainBackground.classList.remove("no-background");
    audioSection.classList.add("hidden");
  }
};

// Handling video end
const handleVideoEnd = () => {
  // Reset video and show choices when video ends
  resetVideo();
  playButton.classList.add("hidden");
  choiceSection.classList.remove("hidden");
  mainBackground.classList.remove("no-background");
  links.forEach((link) => link.classList.remove("navbar__link--active"));
};

// Handle choice controls
const handleChoiceControls = (e) => {
  // mainBackground.classList.remove("background-image");
  // Show or hide sections based on the pill choice
  if (e.target.classList.contains("choice__button--blue")) {
    choiceSection.classList.add("hidden");
    audioSection.classList.remove("hidden");
  } else if (e.target.classList.contains("choice__button--red")) {
    choiceSection.classList.add("hidden");
  }
};

// Handle audio controls
const handleAudioControls = (e) => {
  if (e.target.classList.contains("audio__button--play")) {
    // Set the audio source and play
    audioPlayer.src =
      "https://listenssl.ibizaglobalradio.com:8024/ibizaglobalradio.mp3";
    audioPlayer.play();
  } else if (e.target.classList.contains("audio__button--pause")) {
    // Pause audio and remove the source
    audioPlayer.pause();
    audioPlayer.src = "";
  } else if (e.target.classList.contains("audio__volume")) {
    // Update audio volume based on slider value
    audioPlayer.volume = e.target.value;
  }
};

// Handle return button
const handleReturnButton = (e) => {
  if (e.target.classList.contains("audio__return-button")) {
    resetAudioPlayer();
    audioSection.classList.add("hidden");
    choiceSection.classList.remove("hidden");
  }
};

// Add event listeners
links.forEach((link) => link.addEventListener("click", handleLinkClick));
playButton.addEventListener("click", handleVideoControls);
skipButton.addEventListener("click", handleVideoControls);
videoPlayer.addEventListener("ended", handleVideoEnd);
homeLink.addEventListener("click", handleVideoControls);
choiceButtons.forEach((button) =>
  button.addEventListener("click", handleChoiceControls)
);
audioPlayButton.addEventListener("click", handleAudioControls);
audioPauseButton.addEventListener("click", handleAudioControls);
audioVolumeSlider.addEventListener("input", handleAudioControls);
audioReturnButton.addEventListener("click", handleReturnButton);
