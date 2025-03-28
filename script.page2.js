const sectionChoice = document.querySelectorAll(".choices");
let rotationStep = 0;
let offset = 0;

sectionChoice.forEach((choice) => {
  choice.style.transform = `rotate(${rotationStep}deg) translateX(${offset}px)`;
  rotationStep += 10;
  offset += 50;
});