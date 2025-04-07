const pg1 = document.getElementById("pg1");
const pg2 = document.getElementById("pg2");
const pg3 = document.getElementById("pg3");


function getRandomPosition(element) {
  const imgWidth = element.offsetWidth;
  const imgHeight = element.offsetHeight;
  const maxX = window.innerWidth - imgWidth;
  const maxY = window.innerHeight - imgHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  return { x: randomX, y: randomY };
}

function moveDivs() {
  const pos1 = getRandomPosition(pg1);
  pg1.style.left = pos1.x + "px";
  pg1.style.top = pos1.y + "px";

  const pos2 = getRandomPosition(pg2);
  pg2.style.left = pos2.x + "px";
  pg2.style.top = pos2.y + "px";

  const pos3 = getRandomPosition(pg3);
  pg3.style.left = pos3.x + "px";
  pg3.style.top = pos3.y + "px";
}


setInterval(moveDivs, 1000);