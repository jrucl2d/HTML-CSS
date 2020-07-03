// Header
const body = document.querySelector("body");

function init() {
  const searchedHistory = document.querySelector(".search_history");
  const searchBar = document.querySelector(".js-searchBar");
  let searchBarClicked = false;

  function showSeachHistory() {
    searchedHistory.classList.toggle("show");
    searchBar.classList.toggle("long");
    searchBarClicked = searchBarClicked ? false : true; // 같이 토글
  }

  searchBar.addEventListener("click", showSeachHistory);

  body.addEventListener("mousedown", () => {
    if (!searchBarClicked) {
      return undefined; // 안 보이는 상태였으면 노 상관
    } else {
      showSeachHistory(); // 보이는 상태였으면 토글
    }
  });
}

init();
