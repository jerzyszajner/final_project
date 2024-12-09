const educationPrograms = [
  {
    name: "Computer Science",
    location: "Oslo",
    school: "University",
    type: "Full-Time",
    duration: "3 Years",
    language: "English",
    credits: 180,
    price: 85000,
    isFavorited: false,
  },
  {
    name: "3D Animation",
    location: "Bergen",
    school: "Vocational School",
    type: "Full-Time",
    duration: "2 Years",
    language: "Norwegian",
    credits: 120,
    price: 60000,
    isFavorited: false,
  },
  {
    name: "Business Administration",
    location: "Stavanger",
    school: "University",
    type: "Part-Time",
    duration: "4 Years",
    language: "English",
    credits: 180,
    price: 90000,
    isFavorited: false,
  },
  {
    name: "Graphic Design",
    location: "Trondheim",
    school: "Vocational School",
    type: "Full-Time",
    duration: "2 Years",
    language: "Norwegian",
    credits: 120,
    price: 65000,
    isFavorited: false,
  },
  {
    name: "Data Science",
    location: "Oslo",
    school: "University",
    type: "Full-Time",
    duration: "2 Years",
    language: "English",
    credits: 120,
    price: 120000,
    isFavorited: false,
  },
  {
    name: "Cybersecurity",
    location: "Kristiansand",
    school: "University",
    type: "Full-Time",
    duration: "3 Years",
    language: "English",
    credits: 180,
    price: 95000,
    isFavorited: false,
  },
  {
    name: "Marketing and Sales",
    location: "Bergen",
    school: "Vocational School",
    type: "Full-Time",
    duration: "1 Year",
    language: "Norwegian",
    credits: 60,
    price: 40000,
    isFavorited: false,
  },
  {
    name: "Web Development",
    location: "Oslo",
    school: "Vocational School",
    type: "Full-Time",
    duration: "2 Years",
    language: "English",
    credits: 120,
    price: 70000,
    isFavorited: false,
  },
  {
    name: "Artificial Intelligence",
    location: "Bergen",
    school: "University",
    type: "Full-Time",
    duration: "3 Years",
    language: "English",
    credits: 180,
    price: 140000,
    isFavorited: false,
  },
  {
    name: "Architecture",
    location: "Trondheim",
    school: "University",
    type: "Full-Time",
    duration: "5 Years",
    language: "Norwegian",
    credits: 300,
    price: 150000,
    isFavorited: false,
  },
  {
    name: "Photography",
    location: "Stavanger",
    school: "Vocational School",
    type: "Full-Time",
    duration: "1 Year",
    language: "Norwegian",
    credits: 60,
    price: 35000,
    isFavorited: false,
  },
  {
    name: "International Relations",
    location: "Oslo",
    school: "University",
    type: "Full-Time",
    duration: "3 Years",
    language: "English",
    credits: 180,
    price: 95000,
    isFavorited: false,
  },
  {
    name: "Mechanical Engineering",
    location: "Bergen",
    school: "University",
    type: "Full-Time",
    duration: "3 Years",
    language: "Norwegian",
    credits: 180,
    price: 110000,
    isFavorited: false,
  },
  {
    name: "Digital Marketing",
    location: "Kristiansand",
    school: "Vocational School",
    type: "Part-Time",
    duration: "2 Years",
    language: "English",
    credits: 60,
    price: 45000,
    isFavorited: false,
  },
  {
    name: "Tourism Management",
    location: "Stavanger",
    school: "University",
    type: "Full-Time",
    duration: "3 Years",
    language: "Norwegian",
    credits: 180,
    price: 75000,
    isFavorited: false,
  },
  {
    name: "Healthcare Management",
    location: "Oslo",
    school: "University",
    type: "Part-Time",
    duration: "2 Years",
    language: "Norwegian",
    credits: 120,
    price: 65000,
    isFavorited: false,
  },
  {
    name: "Animation and Visual Effects",
    location: "Bergen",
    school: "University",
    type: "Full-Time",
    duration: "3 Years",
    language: "English",
    credits: 180,
    price: 105000,
    isFavorited: false,
  },
  {
    name: "Environmental Science",
    location: "Trondheim",
    school: "University",
    type: "Full-Time",
    duration: "3 Years",
    language: "English",
    credits: 180,
    price: 100000,
    isFavorited: false,
  },
  {
    name: "Fashion Design",
    location: "Stavanger",
    school: "Vocational School",
    type: "Full-Time",
    duration: "2 Years",
    language: "Norwegian",
    credits: 120,
    price: 70000,
    isFavorited: false,
  },
  {
    name: "Game Development",
    location: "Oslo",
    school: "Vocational School",
    type: "Full-Time",
    duration: "3 Years",
    language: "English",
    credits: 180,
    price: 80000,
    isFavorited: false,
  },
];

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
const educationSection = document.querySelector(".education");
const educationListContainer = document.querySelector(".education__list");
const educationReturnButton = document.querySelector(
  ".education__return-button"
);
const searchInput = document.querySelector(".education__search-input");

// Initialize video and audio
videoPlayer.currentTime = 0;
audioPlayer.volume = audioVolumeSlider.value;
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
  e.preventDefault();
  links.forEach((link) => link.classList.remove("navbar__link--active"));
  e.currentTarget.classList.add("navbar__link--active");

  if (e.currentTarget.textContent === "Radio") {
    playButton.classList.add("hidden");
    audioSection.classList.remove("hidden");
    educationSection.classList.add("hidden");
    mainBackground.classList.remove("no-background");
    choiceSection.classList.add("hidden");
    resetVideo();
  }
};

// Function to show the Radio button
const showRadioButton = () => {
  links.forEach((link) => {
    if (link.classList.contains("hidden")) {
      link.classList.remove("hidden");
    }
  });
};

// Function to check localStorage state for Radio button visibility
const checkRadioVisibility = () => {
  if (localStorage.getItem("radioVisible")) {
    showRadioButton();
  }
};

// Function to mark the Radio button as visible
const markRadioAsVisible = () => {
  localStorage.setItem("radioVisible", "true");
  showRadioButton();
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
    educationSection.classList.add("hidden");
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
  // Show or hide sections based on the pill choice
  if (e.target.classList.contains("choice__button--blue")) {
    choiceSection.classList.add("hidden");
    audioSection.classList.remove("hidden");
    markRadioAsVisible();
  } else if (e.target.classList.contains("choice__button--red")) {
    choiceSection.classList.add("hidden");
    mainBackground.classList.add("no-background");
    educationSection.classList.remove("hidden");
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
  } else if (e.target.classList.contains("education__return-button")) {
    educationSection.classList.add("hidden");
    choiceSection.classList.remove("hidden");
    mainBackground.classList.remove("no-background");
  }
};

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Update localStorage
const updateLocalStorage = () => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

function renderEducationPrograms(educationsProgramsArray) {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  educationListContainer.textContent = "";
  educationsProgramsArray.forEach((educationProgram) => {
    educationProgram.isFavorited = storedFavorites.some(
      (fav) => fav.name === educationProgram.name
    );

    const card = document.createElement("article");
    card.classList.add("education__card");

    const educationName = document.createElement("h3");
    educationName.classList.add("education__name");
    const educationLocation = document.createElement("p");
    const educationSchool = document.createElement("p");
    const educationType = document.createElement("p");
    const educationDuration = document.createElement("p");
    const educationLangue = document.createElement("p");
    const educationCredits = document.createElement("p");
    const educationPrice = document.createElement("p");
    const educationFavoriteButton = document.createElement("button");
    educationFavoriteButton.classList.add("education__favorite-button");

    //Appending elements
    educationListContainer.append(card);
    card.append(
      educationName,
      educationLocation,
      educationSchool,
      educationType,
      educationDuration,
      educationLangue,
      educationCredits,
      educationPrice,
      educationFavoriteButton
    );

    //Inserting content
    educationName.textContent = `Name: ${educationProgram.name}`;
    educationLocation.textContent = `Location: ${educationProgram.location}`;
    educationSchool.textContent = `School: ${educationProgram.school}`;
    educationType.textContent = `Type: ${educationProgram.type}`;
    educationDuration.textContent = `Duration: ${educationProgram.duration}`;
    educationLangue.textContent = `Langue: ${educationProgram.language}`;
    educationCredits.textContent = `Credits: ${educationProgram.credits}`;
    educationPrice.textContent = `Price: ${educationProgram.price}`;
    educationFavoriteButton.textContent = educationProgram.isFavorited
      ? "❤️"
      : "♡";

    // Add event listener for favorite button
    educationFavoriteButton.addEventListener("click", () => {
      educationProgram.isFavorited = !educationProgram.isFavorited;

      // Update favorites list and localStorage
      if (educationProgram.isFavorited) {
        favorites.push(educationProgram);
      } else {
        favorites = favorites.filter(
          (fav) => fav.name !== educationProgram.name
        );
      }

      // Update localStorage
      localStorage.setItem("favorites", JSON.stringify(favorites));

      // Re-render the list
      renderEducationPrograms(educationsProgramsArray);
    });
  });
}

// Handle render favorites
function renderFavorites() {
  const favoritePrograms = educationPrograms.filter(
    (program) => program.isFavorited
  );

  if (favoritePrograms.length === 0) {
    educationListContainer.textContent = "No favorite programs yet!";
    return;
  }

  renderEducationPrograms(favoritePrograms);
}

// Handle button clicks in the unified list
const handleEducationButtonClick = (e) => {
  const sortType = e.target.dataset.sort;

  if (sortType === "price-low") {
    renderEducationPrograms(
      [...educationPrograms].sort((a, b) => a.price - b.price)
    );
  } else if (sortType === "price-high") {
    renderEducationPrograms(
      [...educationPrograms].sort((a, b) => b.price - a.price)
    );
  } else if (e.target.classList.contains("show-all-button")) {
    renderEducationPrograms(educationPrograms);
  } else if (e.target.classList.contains("show-favorites-button")) {
    renderFavorites();
  }
};

// Search Input Functionality
searchInput.addEventListener("input", (e) => {
  let filteredEducationPrograms = [...educationPrograms];

  // Filter by name or location
  filteredEducationPrograms = filteredEducationPrograms.filter((program) => {
    return (
      program.name.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
      program.location.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
  });

  // Render filteredet list
  renderEducationPrograms(filteredEducationPrograms);
});

// Initialize event listeners for button list
const initializeEducationControls = () => {
  const educationButtons = document.querySelector(".education__buttons");
  educationButtons.addEventListener("click", handleEducationButtonClick);
};

// Initialization app
const initializeApp = () => {
  renderEducationPrograms(educationPrograms); // Initial render
  initializeEducationControls(); // Set up event listeners for controls
  checkRadioVisibility();
};

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", initializeApp);

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
educationReturnButton.addEventListener("click", handleReturnButton);
