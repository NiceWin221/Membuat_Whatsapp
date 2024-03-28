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
  arsip.style.left = "0";
});

arsipBack.addEventListener("click", function () {
  arsip.style.left = "-100%";
});

// Filter Active
const filterToggle = document.querySelector(".filter-toggle");
const filter = document.querySelector(".filter");

filterToggle.addEventListener("click", function () {
  if (filter.style.left === "-100%") {
    filter.style.left = "0";
    filterToggle.classList.add("bg-green");
    filterToggle.classList.add("text-white");
  } else {
    filter.style.left = "-100%";
    filterToggle.classList.remove("bg-green");
    filterToggle.classList.remove("text-white");
  }
});
