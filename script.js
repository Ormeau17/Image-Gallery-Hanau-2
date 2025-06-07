let currentImageIndex = 0;
let images = document.querySelectorAll(".gallery-img");
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");

function openModal(imgElement) {
  modal.style.display = "flex"; // Show modal
  modalImg.src = imgElement.src;
  modalImg.style.width = "100%"; // Full size
  modalImg.style.height = "100vh"; // Fit the screen height
  currentImageIndex = Array.from(images).indexOf(imgElement);
}

function closeModal() {
  modal.style.display = "none"; // Hide modal
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentImageIndex].src;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  modalImg.src = images[currentImageIndex].src;
}

// Close modal when clicking outside the image
document
  .querySelector(".modal-bg-close")
  .addEventListener("click", function () {
    document.querySelector(".modal").style.display = "none";
  });

// Keyboard navigation
document.addEventListener("keydown", function (e) {
  if (modal.style.display === "flex") {
    if (e.key === "ArrowLeft") {
      prevImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "Escape") {
      closeModal();
    }
  }
});

// Swipe gesture handling for mobile
let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener(
  "touchstart",
  function (e) {
    touchStartX = e.changedTouches[0].screenX;
  },
  false
);

modal.addEventListener(
  "touchend",
  function (e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  },
  false
);

function handleSwipeGesture() {
  const swipeThreshold = 50; // Minimum distance in px to count as a swipe

  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left
    nextImage();
  }

  if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right
    prevImage();
  }
}
