let btnon = document.querySelector(".btnToggleOn");
let btnoff = document.querySelector(".btnToggleOff");
let sidebar = document.querySelector(".navbarbox");
let wordshow = document.querySelectorAll(".word-show");
let worddisable = document.querySelectorAll(".word-disable");

btnon.onclick = function () {
  sidebar.classList.remove("show");
  sidebar.classList.add("disable");
  wordshow.forEach(function (el) {
    el.classList.remove("word-show");
    wordshow.forEach(function (e) {
      e.classList.add("word-disable");
    });
  });
  btnon.classList.add("d-none");
  btnoff.classList.remove("d-none");
};

btnoff.onclick = function () {
  sidebar.classList.add("show");
  sidebar.classList.remove("disable");
  wordshow.forEach(function (el) {
    el.classList.remove("word-disable");
    wordshow.forEach(function (e) {
      e.classList.add("word-show");
    });
  });
  btnoff.classList.add("d-none");
  btnon.classList.remove("d-none");
};
