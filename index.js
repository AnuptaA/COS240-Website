document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementsByClassName("mode-btn")[0];
  const currModeImg = document.querySelector(".mode");
  const changeRows = document.querySelectorAll(
    ".precepts-table tbody tr:nth-of-type(even), .grading-table-container tbody tr:not(:first-child)"
  );
  const calenText = document.querySelectorAll(
    ".calendar thead th, .calendar tbody td"
  );
  let lightMode = localStorage.getItem("lightMode") === "true";

  function changeMode() {
    if (lightMode) {
      document.body.style.backgroundColor = "#000000";
      document.body.style.color = "#ffffff";
      changeRows.forEach((row) => {
        row.style.backgroundColor = "#333333";
      });
      calenText.forEach((text) => {
        text.style.color = "#ffffff";
      });
      currModeImg.src = "img/moon-white.png";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      changeRows.forEach((row) => {
        row.style.backgroundColor = "#eeeeee";
      });
      calenText.forEach((text) => {
        text.style.color = "#000000";
      });
      currModeImg.src = "img/brightness-white.png";
    }
  }

  changeMode();

  btn.addEventListener("click", function () {
    lightMode = !lightMode;
    localStorage.setItem("lightMode", lightMode);
    changeMode();
  });
});
