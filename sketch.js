// Fire Effect
// found the following code from https://editor.p5js.org/codingtrain/sketches/NaXdkoVI, posted by codingtrain, title as CC 103 - Fire Effect

let fireCanvas = function(fire) {
  let buffer1, buffer2, cooling;
  let w, h;
  let ystart = 0.0;

  fire.setup = function() {
      w = fire.windowWidth;
      h = 200;

      let myCanvas = fire.createCanvas(w, h);
      myCanvas.parent("fire");
      fire.pixelDensity(1);
      
      buffer1 = fire.createGraphics(w, h);
      buffer2 = fire.createGraphics(w, h);
      cooling = fire.createImage(w, h);
  };

  function cool() {
      cooling.loadPixels();
      let xoff = 0.0;
      let increment = 0.05;
      for (let x = 0; x < w; x++) {
          xoff += increment;
          let yoff = ystart;
          for (let y = 0; y < h; y++) {
              yoff += increment;
              let n = fire.noise(xoff, yoff);
              let bright = Math.pow(n, 3) * 255;
              let index = (x + y * w) * 4;
              cooling.pixels[index] = bright;
              cooling.pixels[index + 1] = bright * 0.5;
              cooling.pixels[index + 2] = 0;
              cooling.pixels[index + 3] = 255;
          }
      }
      cooling.updatePixels();
      ystart += increment;
  }

  function generateFire(rows) {
      buffer1.loadPixels();
      for (let x = 0; x < w; x++) {
          for (let j = 0; j < rows; j++) {
              let y = h - (j + 1);
              let index = (x + y * w) * 4;
              buffer1.pixels[index] = 255;
              buffer1.pixels[index + 1] = fire.random(100, 150);
              buffer1.pixels[index + 2] = 0;
              buffer1.pixels[index + 3] = 255;
          }
      }
      buffer1.updatePixels();
  }

  fire.draw = function() {
      fire.clear();
      generateFire(2);
      cool();

      buffer1.loadPixels();
      buffer2.loadPixels();
      for (let x = 1; x < w - 1; x++) {
          for (let y = 1; y < h - 1; y++) {
              let index0 = (x + y * w) * 4;
              let index1 = (x + 1 + y * w) * 4;
              let index2 = (x - 1 + y * w) * 4;
              let index3 = (x + (y + 1) * w) * 4;
              let index4 = (x + (y - 1) * w) * 4;
              
              let c1 = buffer1.pixels[index1];
              let c2 = buffer1.pixels[index2];
              let c3 = buffer1.pixels[index3];
              let c4 = buffer1.pixels[index4];
              let c5 = cooling.pixels[index0];
              
              let newC = (c1 + c2 + c3 + c4) * 0.25 - c5;

              buffer2.pixels[index4] = newC;
              buffer2.pixels[index4 + 1] = newC * 5;
              buffer2.pixels[index4 + 2] = 0;
              buffer2.pixels[index4 + 3] = 255;
          }
      }
      buffer2.updatePixels();

      let temp = buffer1;
      buffer1 = buffer2;
      buffer2 = temp;

      fire.image(buffer2, 0, 0);
  };

  fire.windowResized = function() {
      w = fire.windowWidth;
      fire.resizeCanvas(w, h);
      buffer1 = fire.createGraphics(w, h);
      buffer2 = fire.createGraphics(w, h);
      cooling = fire.createImage(w, h);
  };
};

let lightCanvas = function(light) {

  let r,g,b,a;

  light.setup = function() {
      let myCanvas2 = light.createCanvas(light.windowWidth / 2, light.windowHeight);
      myCanvas2.parent("ray-light");
      light.background(0, 0, 0, 0);
  };

  light.draw = function() {
    r = light.random(100, 255);


      light.clear();
      light.translate(light.width / 2, light.height / 2);
      light.stroke(r, 255, 255, 150);
      light.strokeWeight(10);
      light.frameRate(20);

      for (let i = 0; i < 10; i++) {
          let x = light.random(-light.width * 2, light.width * 2);
          let y = light.random(-light.height * 2, light.height * 2);
          light.line(0, 0, x, y);
      }
  };

  light.windowResized = function() {
      light.resizeCanvas(light.windowWidth / 2, light.windowHeight);
      light.background(0, 0, 0, 0);
  };

};








new p5(fireCanvas);
// new p5(lightCanvas);
