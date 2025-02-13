let petals = [];

let dotsCanvas = function(dots) {
    dots.setup = function() {
        dots.canvas = dots.createCanvas(dots.windowWidth, dots.windowHeight * 0.48);
        dots.canvas.parent("dots"); // Attach to a specific container
    };

    dots.draw = function() {
        // let rectW = 120;
        drawGrid1(dots, 5, 0, 120, dots.height);
        drawGrid2(dots, 650, 0, 50, dots.height);
    };

    function drawGrid1(dots, rectX, rectY, rectW, rectH) {
        let gap = 3;
        let from = dots.color(239, 239, 239, 10);
        let to = dots.color('black');

        for (let x = rectX + gap / 2; x < rectX + rectW; x += gap) {
            for (let y = rectY + gap / 2; y < rectY + rectH; y += gap) {
                let amt = dots.map(y, rectY + rectH, rectY, 1, 0);
                let gradientColor = dots.lerpColor(from, to, amt);
                
                dots.fill(gradientColor);
                dots.noStroke();
                dots.circle(x, y, 2);
            }
        }
    }

    function drawGrid2(dots, rectX2, rectY2, rectW2, rectH2) {
        let gap = 3;
        let from = dots.color(239, 239, 239, 10);
        let to = dots.color('black');

        for (let x = rectX2 + gap / 2; x < rectX2 + rectW2; x += gap) {
            for (let y = rectY2 + gap / 2; y < rectY2 + rectH2; y += gap) {
                let amt = dots.map(y, rectY2 + rectH2, rectY2, 1, 0);
                let gradientColor = dots.lerpColor(from, to, amt);
                
                dots.fill(gradientColor);
                dots.noStroke();
                dots.circle(x, y, 2);
            }
        }
    }
};

let secondCanvas = function(second) {
    second.setup = function() {
        second.canvas = second.createCanvas(second.windowWidth, second.windowHeight * 0.48);
        second.canvas.parent("petals");
    };

    second.draw = function() {
        second.background(239, 239, 239);
        let t = second.frameCount / 100;

        for (let i = 0; i < 2; i++) {
            petals.push(new petal(second));
        }

        for (let i = petals.length - 1; i >= 0; i--) {
            petals[i].update(t);
            petals[i].display(second);

            if (petals[i].posY > second.height) {
                petals.splice(i, 1);
            }
        }
    };
};

// function drawCherryBlossoms(){
//     background(239, 239, 239)
//     let t = frameCount / 100;

//     for (var i = 0; i < 10; i++) {
//         petals.push(new petal());
//       }
    
//       for (let blossom of petals) {
//         blossom.update(t);
//         blossom.display();
//       }
// }


let dotsInstance = new p5(dotsCanvas);
let secondInstance = new p5(secondCanvas);


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }