
let rainCanvas = function(r) {
    const gravity = 1;
    const raindrops = [];
  
    r.setup = function() {
      const myCanvas = r.createCanvas(r.windowWidth, r.windowHeight);
      myCanvas.parent("rain");
      initRaindrops();
    };
  
    function initRaindrops() {
      raindrops.length = 0;
      for (let i = 0; i < 100; i++) {
        raindrops.push(createRaindrop());
      }
    }
  
    function createRaindrop() {
      return {
        position: { x: r.random(0, r.width), y: r.random(-r.height, 0) },
        velocity: r.random(-10, 5),
        radius: r.random(1, 3),
      };
    }
  
    r.draw = function() {
      r.background(239);
      r.fill(26);
      r.noStroke();
  
      for (const raindrop of raindrops) {
        rain(raindrop);
        drawRain(raindrop);
      }
    };
  
    function rain(raindrop) {
      raindrop.velocity += gravity * 0.3;
      raindrop.position.y += raindrop.velocity;
  
      if (raindrop.position.y > r.height) {
        raindrop.position.y = r.random(-200, -100);
        raindrop.position.x = r.random(0, r.width);
        raindrop.velocity = r.random(-10, 5);
      }
    }
  
    function drawRain(raindrop) {
      r.ellipse(raindrop.position.x, raindrop.position.y, raindrop.radius, raindrop.radius * 5);
    }
  
    r.windowResized = function() {
      r.resizeCanvas(r.windowWidth, r.windowHeight);
    };
  };
  
  

  let dotCanvas = function(d) {
    let dots = [];
    let dotGraphic;
    const numDots = 20;
    const spacing = 120;
  
    d.setup = function() {
      const myCanvas = d.createCanvas(d.windowWidth, d.windowHeight * 0.65);
      myCanvas.parent("dots-move");
  
      dotGraphic = d.createGraphics(200, 200);
    //   dotGraphic.noStroke();
      dotGraphic.drawingContext.filter = "blur(3px)";
  
      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: -i * spacing,
          y: d.height - d.random(50, 250),
          size: i < 5 ? d.random(100, 200) : d.random(30, 60),
          alpha: d.random(10, 50),
        });
      }
    };
  
    d.draw = function() {
      d.background(255);
  
      for (let dot of dots) {
        dot.x += 2;
  
        if (dot.x > d.width + 100) {
          const leftmostX = getLeftmostX();
          dot.x = leftmostX - spacing;
          dot.y = d.height - d.random(50, 250);
          dot.size = d.random(30, 200);
          dot.alpha = d.random(10, 100);
        }
  
        drawDot(dot.x, dot.y, dot.size, dot.alpha);
      }
    };
  
    function drawDot(x, y, size, alpha) {
      dotGraphic.clear();
      dotGraphic.strokeWeight(5);
      dotGraphic.fill(0,0,0,0);
      dotGraphic.stroke(102, 102, 102, alpha);
      dotGraphic.ellipse(dotGraphic.width / 2, dotGraphic.height / 2, size, size);
      d.image(dotGraphic, x - dotGraphic.width / 2, y - dotGraphic.height / 2);
    }
  
    function getLeftmostX() {
      return Math.min(...dots.map((dot) => dot.x));
    }
  
    d.windowResized = function() {
      d.resizeCanvas(d.windowWidth, d.windowHeight * 0.65);
    };
  };
  
  

  new p5(rainCanvas);
  new p5(dotCanvas);
  