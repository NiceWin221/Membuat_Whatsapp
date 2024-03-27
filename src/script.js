// Search Toggle
const searchInput = document.getElementById("search");
const arrowLeft = document.querySelector(".arrow-left");
const searchGlass = document.querySelector(".search-glass");

function toggleOpacityAndZIndex() {
  searchGlass.classList.toggle("opacity-0");
  arrowLeft.classList.toggle("opacity-0");
  arrowLeft.classList.toggle("-rotate-90");

  if (arrowLeft.style.zIndex === "0") {
    arrowLeft.style.zIndex = "-1";
  } else {
    arrowLeft.style.zIndex = "0";
  }
}

searchInput.addEventListener("focus", toggleOpacityAndZIndex);

searchInput.addEventListener("blur", toggleOpacityAndZIndex);

// Arsip Toggle
const arsipToggle = document.querySelector(".arsip-toggle");
const arsipBack = document.querySelector(".arsip-back");
const arsip = document.querySelector(".arsip");

arsipToggle.addEventListener("click", function () {
  arsip.classList.toggle("-z-10");
  arsip.classList.toggle("z-10");
  arsip.style.left = "0";
});

arsipBack.addEventListener("click", function () {
  setTimeout(function () {
    arsip.classList.toggle("-z-10");
    arsip.classList.toggle("z-10");
  }, 500);
  arsip.style.left = "-100%";
});
