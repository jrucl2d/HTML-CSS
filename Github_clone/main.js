// Header
const body = document.querySelector("body");

function init() {
  const searchedHistory = document.querySelector(".search_history");
  const searchBar = document.querySelector(".js-searchBar");
  const hideIcon = document.querySelector(".header-search-key-slash");
  let clicked = false;

  function showSeachHistory() {
    searchedHistory.classList.toggle("show");
    searchBar.classList.toggle("long");
    hideIcon.classList.toggle("showSearchIcon");
  }

  searchBar.addEventListener("click", () => {
    if (searchedHistory.classList.contains("show")) {
      // 검색창이 이미 켜져있는데 클릭했으면
      return undefined;
    }
    showSeachHistory();
  });

  body.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("long")) {
      // 1. 검색 창 클릭
      return undefined;
    } else if (searchedHistory.classList.contains("show")) {
      // 2. 다른 곳 클릭했으나 검색창 켜져있으면
      showSeachHistory();
    }
  });
}

init();
