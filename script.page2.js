const sectionChoice = document.querySelectorAll(".choices");
// let rotationStep = 0;
// let offset = 0;

// sectionChoice.forEach((choice) => {
//   choice.style.transform = `rotate(${rotationStep}deg) translateX(${offset}px)`;
//   rotationStep += 10;
//   offset += 50;
// });


const sectionButton = document.getElementById("section");
const sectionChoiceButton = document.getElementById("section-choice");

sectionButton.onclick = function(event) {
  event.preventDefault();

  let currentDisplay = window.getComputedStyle(sectionChoiceButton).display;

  if (currentDisplay === "none") {
    sectionChoiceButton.style.display = "block";

    sectionChoice.forEach((choice) => {
      choice.style.transition = "none";
      choice.style.transform = "rotate(0deg) translateX(0px)";
    });


    void sectionChoiceButton.offsetWidth;


    let rotationStep = 0;
    let offset = 0;

    sectionChoice.forEach((choice) => {
      choice.style.transition = "transform 0.5s ease";
    });

    setTimeout(() => {
      sectionChoice.forEach((choice) => {
        choice.style.transform = `rotate(${rotationStep}deg) translateX(${offset}px)`;
        rotationStep += 10;
        offset += 50;
      });
    }, 10);

  } else {
    sectionChoiceButton.style.display = "none";
  }
};




const clicking = new Audio();
clicking.src = "assets/Music/persona.m4a";