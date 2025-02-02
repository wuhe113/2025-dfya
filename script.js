const container = document.getElementById("ray-light");
const lineCount = 50;

for (let i = 0; i < lineCount; i++) {
  const line = document.createElement("div");
  line.classList.add("line");


  const angle = (360 / lineCount) * i;
  line.style.transform = `rotate(${angle}deg) translateY(-50%)`;

  line.style.animationDelay = `${(i % 2) * 0.5}s`;

  container.appendChild(line);
}


let quantity = 200;
let max = 18;
let min = 3;

let quantity2 = 350;
let max2 = 8;
let min2 = 2;

let sparks = document.getElementById("sparks");
let spots = document.getElementById("spots");

function makeRandomSize(min, max) {
    return Math.random() * (max - min) + min;
}


function createSparks(){
  
  for (let i=0;i<quantity;i++){
  let randomSize = makeRandomSize(min, max);
  let newDiv = document.createElement("div");
  
  newDiv.classList.add("spark");
  newDiv.style.width = randomSize + "px";
  newDiv.style.height = randomSize + "px";
  newDiv.style.left = Math.random()*100 + "vw";
  newDiv.style.top = Math.random()*100 + "vh";


  let randomDelay = Math.random() * 5;
  newDiv.style.animationDelay = `${randomDelay}s`;


sparks.appendChild(newDiv);
  
};

};

function createSpots(){
  
    for (let i=0;i<quantity2;i++){
    let randomSize2 = makeRandomSize(min2, max2);
    let newDiv2 = document.createElement("div");
    
    newDiv2.classList.add("spot");
    newDiv2.style.width = randomSize2 + "px";
    newDiv2.style.height = randomSize2 + "px";
    newDiv2.style.left = Math.random()*100 + "vw";
    newDiv2.style.top = Math.random()*100 + "vh";
  
  
    // let randomDelay2 = Math.random() * 5;
    // newDiv2.style.animationDelay2 = `${randomDelay2}s`;
  
  
  spots.appendChild(newDiv2);
    
  };
  
  };

createSparks();
createSpots();

// const raysAmount = getComputedStyle(document.documentElement).getPropertyValue("--ray");
// const amount = raysAmount-1;
// const group = document.querySelector("g");
// let ray = group.querySelector("g");

// for (let i = 0; i < amount; i++){
//   group.appendChild(ray.cloneNode(true));
// }