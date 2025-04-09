let dotsCanvas = function(dots) {

    dots.setup = function() {
        dots.canvas = dots.createCanvas(dots.windowWidth, dots.windowHeight);
        dots.canvas.parent("background");

    };

    dots.draw = function() {
            drawGrid1(dots, 0, 0, dots.width, dots.height);

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

    dots.windowResized = function() {
        dots.resizeCanvas(dots.windowWidth, dots.windowHeight);
    };
}

let dotsInstance = new p5(dotsCanvas);