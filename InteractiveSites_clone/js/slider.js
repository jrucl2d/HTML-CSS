function init() {
  const leftBtn = document.querySelector(".left");
  const rightBtn = document.querySelector(".right");
  const picNums = document.querySelectorAll(".picNum");
  const canvas = document.querySelector(".canvas");
  const selectedPic = document.querySelector(".selected");
  const name = document.querySelector(".name");
  let selected = parseInt(selectedPic.innerText);

  picNums[selected - 1 === -1 ? 5 : selected - 1].style.border =
    "1px solid red";
  function ChangePic() {
    picNums[selected - 1 === -1 ? 5 : selected - 1].style.border =
      "1px solid red";
    name.innerText = `Canvas${selected}`;
    canvas.style.backgroundImage = `url("/InteractiveSites_clone/Images/${selected}.jpg")`;
  }

  leftBtn.addEventListener("click", () => {
    picNums[selected - 1 === -1 ? 5 : selected - 1].style.border =
      "1px solid white";
    selected = selected - 1;
    selected = selected === 0 ? 6 : selected;
    ChangePic();
  });
  rightBtn.addEventListener("click", () => {
    picNums[selected - 1 === -1 ? 5 : selected - 1].style.border =
      "2px solid white";
    selected = selected + 1;
    selected = selected === 7 ? 1 : selected;
    ChangePic();
  });
  Array.from(picNums).forEach((nums) => {
    nums.addEventListener("click", () => {
      picNums[selected - 1 === -1 ? 5 : selected - 1].style.border =
        "1px solid white";
      selected = parseInt(nums.innerText);
      ChangePic();
    });
  });
}

init();
