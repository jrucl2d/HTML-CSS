const tabs = document.querySelectorAll(".title");

tabs.forEach((title) => {
  title.addEventListener("click", () => {
    tabs.forEach((other) => {
      if (other !== title) {
        other.classList.remove("clicked");
      }
    });
    title.classList.toggle("clicked");
  });
});
