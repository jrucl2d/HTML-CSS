// Header
const body = document.querySelector("body");

function init() {
  const searchedHistory = document.querySelector(".search_history");
  const searchBar = document.querySelector(".js-searchBar");
  let clicked = false;

  function showSeachHistory() {
    clicked = true;
    if (searchedHistory.classList.contains("show")) {
      return undefined;
    }
    searchedHistory.classList.toggle("show");
    searchBar.classList.toggle("long");
  }

  searchBar.addEventListener("click", showSeachHistory);

  body.addEventListener("mousedown", () => {});
}

init();
