const background = document.getElementById("background");
const gradient = document.getElementById("gradient");

const interviewLOGO = document.getElementById("interview-logo");

const images = document.querySelectorAll("img");


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




const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const img = entry.target;
      if (entry.isIntersecting) {
        img.style.filter = 'grayscale(0%)';
      } else {
        img.style.filter = 'grayscale(100%)';
      }
    });
  },
  {
    threshold: 0.5
  }
);

images.forEach(img => {
  img.style.filter = 'grayscale(100%)';
  img.style.transition = 'filter 1s ease';
  observer.observe(img);
});