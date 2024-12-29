//========================================
//=== EDUCATION PROGRAMS
//========================================
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

//========================================
//=== SELECTING DOM ELEMENTS
//========================================
const links = document.querySelectorAll(".navbar__link");
const navbarLinksContainer = document.querySelector(".navbar__links");
const homeSection = document.querySelector(".home");
const videoSection = document.querySelector(".video");
const videoPlayer = document.querySelector(".video__player");
const skipButton = document.querySelector(".video__button-skip");
const choiceSection = document.querySelector(".choice");
const choiceButtonsContainer = document.querySelector(".choice__buttons");
const navbar = document.querySelector(".navbar");
const mainBackground = document.querySelector("main");
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
const educationButtons = document.querySelector(".education__buttons");
const searchInput = document.querySelector(".education__search-input");

//========================================
//=== INITIALIZE VIDEO AND AUDIO
//========================================
videoPlayer.currentTime = 0;
audioPlayer.volume = audioVolumeSlider.value;
audioPlayer.src =
  "https://listenssl.ibizaglobalradio.com:8024/ibizaglobalradio.mp3";

//========================================
//=== UTILITY FUNCTIONS
//========================================
// Function to reset the audio player
const resetAudioPlayer = () => {
  audioPlayer.pause();
  audioPlayer.src = "";
  audioPlayer.volume = 0.25;
  audioVolumeSlider.value = 0.25;
  updateSliderBackground();
};

// Function to reset the video player
const resetVideo = () => {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
  videoSection.classList.add("hidden");
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

// Function to update slider background dynamically
const updateSliderBackground = () => {
  const value = audioVolumeSlider.value * 100; // Convert the value to a percentage
  audioVolumeSlider.style.background = `linear-gradient(to right, rgb(1, 251, 1) ${value}%, rgb(214, 214, 214) ${value}%)`;
};

//========================================
//=== HANDLE NAVBAR LINKS
//========================================
const handleNavbarLinks = (e) => {
  const clickedElement = e.target;

  if (!clickedElement.dataset.action) return;

  e.preventDefault();

  links.forEach((link) => link.classList.remove("navbar__link--active"));

  clickedElement.classList.add("navbar__link--active");

  const action = clickedElement.dataset.action;

  if (action === "home") {
    // Home button
    resetAudioPlayer();
    resetVideo();
    homeSection.classList.remove("hidden");
    choiceSection.classList.add("hidden");
    mainBackground.classList.remove("no-background");
    audioSection.classList.add("hidden");
    educationSection.classList.add("hidden");
  } else if (action === "radio") {
    // Radio button
    homeSection.classList.add("hidden");
    audioSection.classList.remove("hidden");
    educationSection.classList.add("hidden");
    mainBackground.classList.remove("no-background");
    choiceSection.classList.add("hidden");
    resetAudioPlayer();
    resetVideo();
  }
};

//========================================
//=== HANDLE VIDEO CONTROLS
//========================================
const handleVideoControls = (e) => {
  const clickedElement = e.target;
  const action = clickedElement.dataset.action;

  if (action === "start-video") {
    // Start video player
    mainBackground.classList.add("no-background");
    videoSection.classList.remove("hidden");
    videoPlayer.play();
    homeSection.classList.add("hidden");
    links.forEach((link) => link.classList.remove("navbar__link--active"));
  } else if (action === "skip-video") {
    videoPlayer.currentTime = 36;
  } else if (action === "home") {
    // Reset video and navigation state
    e.preventDefault();
    resetAudioPlayer();
    resetVideo();
    homeSection.classList.remove("hidden");
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
  homeSection.classList.add("hidden");
  choiceSection.classList.remove("hidden");
  mainBackground.classList.remove("no-background");
  links.forEach((link) => link.classList.remove("navbar__link--active"));
};

//========================================
//=== HANDLE CHOICE BUTTONS
//========================================
const handleChoiceControls = (e) => {
  const clickedElement = e.target;
  const action = clickedElement.dataset.action;

  const radioLink = document.querySelector(
    '.navbar__link[data-action="radio"]'
  );

  // Show or hide sections based on the pill choice
  if (action === "blue-pill") {
    choiceSection.classList.add("hidden");
    audioSection.classList.remove("hidden");
    markRadioAsVisible();
    radioLink.classList.add("navbar__link--active");
  } else if (action === "red-pill") {
    choiceSection.classList.add("hidden");
    mainBackground.classList.add("no-background");
    educationSection.classList.remove("hidden");
  }
};

//========================================
//=== HANDLE AUDIO CONTROLS
//========================================
const handleAudioControls = (e) => {
  const clickedElement = e.target;
  const action = clickedElement.dataset.action;

  if (action === "play") {
    // Set the audio source and play
    audioPlayer.src =
      "https://listenssl.ibizaglobalradio.com:8024/ibizaglobalradio.mp3";
    audioPlayer.play();
  } else if (action === "pause") {
    // Pause audio and remove the source
    audioPlayer.pause();
    audioPlayer.src = "";
  } else if (action === "volume-range") {
    // Update audio volume based on slider value
    audioPlayer.volume = e.target.value;
    updateSliderBackground();
  }
};

//========================================
//=== HANDLE RETURN BUTTONS
//========================================
// Audio return button
const handleAudioReturnButton = (e) => {
  const clickedElement = e.target;
  const action = clickedElement.dataset.action;

  if (action === "audio-return") {
    resetAudioPlayer();
    audioSection.classList.add("hidden");
    choiceSection.classList.remove("hidden");
    links.forEach((link) => link.classList.remove("navbar__link--active"));
  }
};

// Education return button
const handleEducationReturnButton = (e) => {
  const clickedElement = e.target;
  const action = clickedElement.dataset.action;

  if (action === "education-return") {
    educationSection.classList.add("hidden");
    choiceSection.classList.remove("hidden");
    mainBackground.classList.remove("no-background");
  }
};

//======================================================
//=== HANDLE EDUCATION (RENDERING, SORTING, FAVORITES)
//======================================================
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
    const educationLanguage = document.createElement("p");
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
      educationLanguage,
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
    educationLanguage.textContent = `Language: ${educationProgram.language}`;
    educationCredits.textContent = `Credits: ${educationProgram.credits}`;
    educationPrice.textContent = `Price: ${educationProgram.price} NOK`;
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

      updateLocalStorage();
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
  const clickedElement = e.target;
  const action = clickedElement.dataset.action;

  if (action === "price-low") {
    renderEducationPrograms(
      [...educationPrograms].sort((a, b) => a.price - b.price)
    );
  } else if (action === "price-high") {
    renderEducationPrograms(
      [...educationPrograms].sort((a, b) => b.price - a.price)
    );
  } else if (action === "show-all-programs") {
    renderEducationPrograms(educationPrograms);
  } else if (action === "show-favorites") {
    renderFavorites();
  }
};

// Search input functionality
const handleSearchInput = (e) => {
  let filteredEducationPrograms = [...educationPrograms];

  // Filter by name or location
  filteredEducationPrograms = filteredEducationPrograms.filter((program) => {
    return (
      program.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      program.location.toLowerCase().includes(e.target.value.toLowerCase())
    );
  });

  // Render filteredet list
  renderEducationPrograms(filteredEducationPrograms);
};

//========================================
//=== INITIALIZATION APP
//========================================
const initializeApp = () => {
  renderEducationPrograms(educationPrograms); // Initial render
  updateSliderBackground(); // Initialize slider background
  checkRadioVisibility();
};

//========================================
//=== EVENT LISTENERS
//========================================
navbarLinksContainer.addEventListener("click", handleNavbarLinks);
educationButtons.addEventListener("click", handleEducationButtonClick);
searchInput.addEventListener("input", handleSearchInput);
homeSection.addEventListener("click", handleVideoControls);
skipButton.addEventListener("click", handleVideoControls);
videoPlayer.addEventListener("ended", handleVideoEnd);
choiceButtonsContainer.addEventListener("click", handleChoiceControls);
audioPlayButton.addEventListener("click", handleAudioControls);
audioPauseButton.addEventListener("click", handleAudioControls);
audioVolumeSlider.addEventListener("input", handleAudioControls);
audioReturnButton.addEventListener("click", handleAudioReturnButton);
educationReturnButton.addEventListener("click", handleEducationReturnButton);

//========================================
//=== DOM CONTENT LOADED
//========================================
document.addEventListener("DOMContentLoaded", initializeApp);
