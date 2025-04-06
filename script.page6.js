const myDiv = document.getElementById("pg1");
const maxX = window.innerWidth - 50;
const maxY = window.innerHeight - 50;

function getRandomPosition() {
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  return { x: randomX, y: randomY };
}

function moveDiv() {
  const newPosition = getRandomPosition();
  myDiv.style.left = newPosition.x + "px";
  myDiv.style.top = newPosition.y + "px";
}

setInterval(moveDiv, 1000);