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


document.querySelectorAll('.footnote').forEach(footnote => {
  footnote.onmouseenter = function() {
      const refId = this.getAttribute('data-id');
      const reference = document.getElementById(refId);
      if (reference) {
          const rect = this.getBoundingClientRect();
          reference.style.visibility = 'visible';
      }
  };

  footnote.onmouseleave = function() {
      const refId = this.getAttribute('data-id');
      const reference = document.getElementById(refId);
      if (reference) {
          reference.style.visibility = 'hidden';
      }
  };
});


function openPopup1(url, width, height) {
  let left = (screen.width - width) / 2;
  let top = (screen.height - height) / 2;
  window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
}


function openPopup2(url) {
  window.open(url, '_blank', `width=${screen.width},height=${screen.height},top=0,left=0`);
}





// const clicking = new Audio();
// clicking.src = "assets/Music/persona.m4a";


