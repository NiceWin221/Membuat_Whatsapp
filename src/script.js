// Search Toggle

const searchToggle = document.querySelector(".search-toggle");

searchToggle.addEventListener("click", function () {
  const arrowLeft = document.querySelector(".arrow-left");
  const searchGlass = document.querySelector(".search-glass");

  searchGlass.classList.toggle("opacity-0");
  arrowLeft.classList.toggle("opacity-0");
  arrowLeft.classList.toggle("-rotate-90");
});
