let dotsCanvas = function(dots) {

    dots.setup = function() {
        dots.canvas = dots.createCanvas(dots.windowWidth, dots.windowHeight);
        dots.canvas.parent("dots");

    };

    dots.draw = function() {
            drawGrid1(dots, 0, 0, dots.width, dots.height * 0.05 + 10);

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

let dots2Canvas = function(dots2) {

    dots2.setup = function() {
        dots2.canvas = dots2.createCanvas(dots2.windowWidth, dots2.windowHeight);
        dots2.canvas.parent("dots2");

    };

    dots2.draw = function() {
            drawGrid1(dots2, 0, 0, dots2.width * 0.05, dots2.height);

    };

    function drawGrid1(dots2, rectX, rectY, rectW, rectH) {
        let gap = 3;
        let from = dots2.color(239, 239, 239, 10);
        let to = dots2.color('black');

        for (let x = rectX + gap / 2; x < rectX + rectW; x += gap) {
            for (let y = rectY + gap / 2; y < rectY + rectH; y += gap) {
                let amt = dots2.map(x, rectX + rectW, rectX, 1, 0);
                let gradientColor = dots2.lerpColor(from, to, amt);
                
                dots2.fill(gradientColor);
                dots2.noStroke();
                dots2.circle(x, y, 2);
            }
        }
    }

    dots2.windowResized = function() {
        dots2.resizeCanvas(dots2.windowWidth, dots2.windowHeight);
    };
}

let dots3Canvas = function(dots3) {

    dots3.setup = function() {
        dots3.canvas = dots3.createCanvas(dots3.windowWidth, dots3.windowHeight);
        dots3.canvas.parent("dots3");

    };

    dots3.draw = function() {
            drawGrid1(dots3, 0, 0, dots3.width * 0.3, dots3.height);

    };

    function drawGrid1(dots3, rectX, rectY, rectW, rectH) {
        let gap = 3;
        let from = dots3.color(239, 239, 239, 10);
        let to = dots3.color('black');

        for (let x = rectX + gap / 2; x < rectX + rectW; x += gap) {
            for (let y = rectY + gap / 2; y < rectY + rectH; y += gap) {
                let amt = dots3.map(x, rectX + rectW, rectX, 0, 1);
                let gradientColor = dots3.lerpColor(from, to, amt);
                
                dots3.fill(gradientColor);
                dots3.noStroke();
                dots3.circle(x, y, 2);
            }
        }
    }

    dots3.windowResized = function() {
        dots3.resizeCanvas(dots3.windowWidth, dots3.windowHeight);
    };
}

let dots4Canvas = function(dots4) {

    dots4.setup = function() {
        dots4.canvas = dots4.createCanvas(dots4.windowWidth, dots4.windowHeight);
        dots4.canvas.parent("dots4");

    };

    dots4.draw = function() {
            drawGrid1(dots4, 0, 0, dots4.width  * 0.05, dots4.height);

    };

    function drawGrid1(dots4, rectX, rectY, rectW, rectH) {
        let gap = 3;
        let from = dots4.color(239, 239, 239, 10);
        let to = dots4.color('black');

        for (let x = rectX + gap / 2; x < rectX + rectW; x += gap) {
            for (let y = rectY + gap / 2; y < rectY + rectH; y += gap) {
                let amt = dots4.map(x, rectX + rectW, rectX, 1, 0);
                let gradientColor = dots4.lerpColor(from, to, amt);
                
                dots4.fill(gradientColor);
                dots4.noStroke();
                dots4.circle(x, y, 2);
            }
        }
    }

    dots4.windowResized = function() {
        dots4.resizeCanvas(dots4.windowWidth, dots4.windowHeight);
    };
}

let dots5Canvas = function(dots5) {

    dots5.setup = function() {
        dots5.canvas = dots5.createCanvas(dots5.windowWidth, dots5.windowHeight);
        dots5.canvas.parent("dots5");

    };

    dots5.draw = function() {
            drawGrid1(dots5, 0, 0, dots5.width * 0.6, dots5.height);

    };

    function drawGrid1(dots5, rectX, rectY, rectW, rectH) {
        let gap = 3;
        let from = dots5.color(239, 239, 239, 10);
        let to = dots5.color('black');

        for (let x = rectX + gap / 2; x < rectX + rectW; x += gap) {
            for (let y = rectY + gap / 2; y < rectY + rectH; y += gap) {
                let amt = dots5.map(x, rectX + rectW, rectX, 0, 1);
                let gradientColor = dots5.lerpColor(from, to, amt);
                
                dots5.fill(gradientColor);
                dots5.noStroke();
                dots5.circle(x, y, 2);
            }
        }
    }

    dots5.windowResized = function() {
        dots5.resizeCanvas(dots5.windowWidth, dots5.windowHeight);
    };
}

let dots6Canvas = function(dots6) {

    dots6.setup = function() {
        dots6.canvas = dots6.createCanvas(dots6.windowWidth, dots6.windowHeight);
        dots6.canvas.parent("frame3");

    };

    dots6.draw = function() {
            drawGrid1(dots5, 0, 0, dots6.width, dots6.height);

    };

    function drawGrid1(dots6Canvas, rectX, rectY, rectW, rectH) {
        let gap = 3;
        let from = dots6.color(239, 239, 239, 10);
        let to = dots6.color('black');

        for (let x = rectX + gap / 2; x < rectX + rectW; x += gap) {
            for (let y = rectY + gap / 2; y < rectY + rectH; y += gap) {
                let amt = dots6.map(x, rectX + rectW, rectX, 0, 1);
                let gradientColor = dots6.lerpColor(from, to, amt);
                
                dots6.fill(gradientColor);
                dots6.noStroke();
                dots6.circle(x, y, 2);
            }
        }
    }

    dots6.windowResized = function() {
        dots6.resizeCanvas(dots6.windowWidth, dots6.windowHeight);
    };
}


let dotsInstance = new p5(dotsCanvas);
let dots2Instance = new p5(dots2Canvas);
let dots3Instance = new p5(dots3Canvas);
let dots4Instance = new p5(dots4Canvas);
let dots5Instance = new p5(dots5Canvas);
let dots6Instance = new p5(dots6Canvas);