const background = document.getElementById("background");
const gradient = document.getElementById("gradient");


window.onscroll = function (e) {
    if (window.scrollY > 2000) {
        background.style.opacity = "0";
        gradient.style.opacity = "0";
    } else {
        background.style.opacity = "1";
        gradient.style.opacity = "1";
    }
  };