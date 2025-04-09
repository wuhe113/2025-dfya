const background = document.getElementById("background");
const gradient = document.getElementById("gradient");

const interviewLOGO = document.getElementById("interview-logo");


window.onscroll = function (e) {
    if (window.scrollY > 2000) {
        background.style.opacity = "0";
        gradient.style.opacity = "0";
    } else {
        background.style.opacity = "1";
        gradient.style.opacity = "1";
    }

    if (window.scrollY > 50){
        interviewLOGO.style.transform = "translateX(100%)";
    } else{
        interviewLOGO.style.transform = "translateX(0)";
    }
  };