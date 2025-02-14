let petals = [];

let dotsCanvas = function(dots) {
    dots.setup = function() {
        dots.canvas = dots.createCanvas(dots.windowWidth, dots.windowHeight * 0.48);
        dots.canvas.parent("dots");
    };

    dots.draw = function() {
        // let rectW = 120;
        drawGrid1(dots, 3, 0, 120, dots.height);
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

let dots2Canvas = function(dots2) {
    dots2.setup = function() {
        dots2.canvas = dots2.createCanvas(dots2.windowWidth, dots2.windowHeight * 0.48);
        dots2.canvas.parent("block3");
    };

    dots2.draw = function() {
        drawGrid1(dots2, 0, 0, 120, dots2.height);
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

}

let dots3Canvas = function(dots3) {
    dots3.setup = function() {
        dots3.canvas = dots3.createCanvas(dots3.windowWidth, dots3.windowHeight * 0.48);
        dots3.canvas.parent("line8");
    };

    dots3.draw = function() {
        drawGrid1(dots3, 3, 0, 27, dots3.height);
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

}

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

let linesCanvas = function(lines) {


    lines.setup = function() {
        lines.canvas = lines.createCanvas(lines.windowWidth, lines.windowHeight * 0.48, lines.WEBGL);
        lines.canvas.parent("windowLines1"); 

        brush.instance(lines)
        brush.load()
        brush.scale(1);
        brush.set("rotring", 0.7);
        brush.stroke(64, 64, 64);

        lines.noLoop();
    };
    

    lines.draw = function(){
        // let available_brushes = brush.box();


        brush.flowLine(-450, -200, 200, -40);
        brush.flowLine(-250, -200, 350, -40);
        brush.flowLine(-320, -200, 350, -40);
    };
}

let lines2Canvas = function(lines2) {


    lines2.setup = function() {
        lines2.canvas = lines2.createCanvas(lines2.windowWidth, lines2.windowHeight * 0.48, lines2.WEBGL);
        lines2.canvas.parent("windowLines2"); 

        brush.instance(lines2)
        brush.load()
        brush.scale(1);
        brush.set("rotring", 0.7);
        brush.stroke(64, 64, 64);

        lines2.noLoop();
    };
    

    lines2.draw = function(){
        // let available_brushes = brush.box();


        brush.flowLine(-400, -139, 250, -40);
        brush.flowLine(-380, -137, 290, -40);
        brush.flowLine(-250, -123, 280, -40);
    };
}


let dotsInstance = new p5(dotsCanvas);
let dots2Instance = new p5(dots2Canvas);
let dots3Instance = new p5(dots3Canvas);
let secondInstance = new p5(secondCanvas);
let linesInstance = new p5(linesCanvas);
let lines2Instance = new p5(lines2Canvas);


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }