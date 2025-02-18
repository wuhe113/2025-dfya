let petals = [];


let dotsCanvas = function(dots) {
    let isLargeScreen = false;

    dots.setup = function() {
        dots.canvas = dots.createCanvas(dots.windowWidth, dots.windowHeight * 0.48);
        dots.canvas.parent("dots");
        checkMediaQuery();
    };

    dots.draw = function() {
        if (isLargeScreen) {
            drawGrid1(dots, 5, 0, 205, dots.height);
            drawGrid2(dots, 1200, 0, 100, dots.height);
        } else {
            drawGrid1(dots, 3, 0, 120, dots.height);
            drawGrid2(dots, 650, 0, 50, dots.height);
        }
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

    function checkMediaQuery() {
        isLargeScreen = dots.windowWidth >= 2560;
    }

    dots.windowResized = function() {
        dots.resizeCanvas(dots.windowWidth, dots.windowHeight * 0.48);
        checkMediaQuery();
    };


      
};

let dots2Canvas = function(dots2) {
    let isLargeScreen = false;

    dots2.setup = function() {
        dots2.canvas = dots2.createCanvas(dots2.windowWidth, dots2.windowHeight * 0.48);
        dots2.canvas.parent("block3");
        checkMediaQuery();
    };

    dots2.draw = function() {
        
        if (isLargeScreen) {
            drawGrid1(dots2, 0, 0, 150, dots2.height);}
        else{
            drawGrid1(dots2, 0, 0, 120, dots2.height);

        }
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

    function checkMediaQuery() {
        isLargeScreen = dots2.windowWidth >= 2560;
    }

    dots2.windowResized = function() {
        dots2.resizeCanvas(dots2.windowWidth, dots2.windowHeight * 0.48);
        checkMediaQuery();
    };


}

let dots3Canvas = function(dots3) {
    let isLargeScreen = false;

    dots3.setup = function() {
        dots3.canvas = dots3.createCanvas(dots3.windowWidth, dots3.windowHeight * 0.48);
        dots3.canvas.parent("line8");
        checkMediaQuery();
    };

    dots3.draw = function() {
        if (isLargeScreen) {
            drawGrid1(dots3, 5, 0, 60, dots3.height);
        }else{
            drawGrid1(dots3, 3, 0, 27, dots3.height);
        }
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

    function checkMediaQuery() {
        isLargeScreen = dots3.windowWidth >= 2560;
    }

    dots3.windowResized = function() {
        dots3.resizeCanvas(dots3.windowWidth, dots3.windowHeight * 0.48);
        checkMediaQuery();
    };


}

let secondCanvas = function(second) {
    second.setup = function() {
        second.canvas = second.createCanvas(second.windowWidth, second.windowHeight * 0.48);
        second.canvas.parent("petals");
    };

    second.draw = function() {
        second.background(239, 239, 239);
        let t = second.frameCount / 100;

        // drawNoise();

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

    function drawNoise(){
        second.loadPixels();
        let xoff = 0.0;
        for (let x = 0; x < second.width; x++) {
            let yoff = 0;

            for (var y = 0; y < second.height; y++) {
                let bright = second.map(second.noise(xoff, yoff), 0, 1, 0, 255);
                second.set(x, y, second.floor(bright));
                
                yoff += 0.01;
            }
            xoff += 0.01;
        }
        second.updatePixels();
    }
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
    let isLargeScreen = false;
    let isFullScreen = false;


    lines.setup = function() {
        lines.canvas = lines.createCanvas(lines.windowWidth, lines.windowHeight * 0.48, lines.WEBGL);
        lines.canvas.parent("windowLines1"); 

        brush.instance(lines)
        brush.load()
        brush.scale(1);
        brush.set("rotring", 0.7);
        brush.stroke(64, 64, 64);

        lines.noLoop();

        checkMediaQuery();
    };
    

    lines.draw = function(){
        // let available_brushes = brush.box();


        if (isLargeScreen) {
            brush.flowLine(-800, -400, 400, -40);
        brush.flowLine(-600, -400, 650, -40);
        brush.flowLine(-450, -400, 650, -40);
        }else if(isFullScreen){
            brush.flowLine(-500, -250, 250, -40);
            brush.flowLine(-300, -250, 400, -40);
            brush.flowLine(-370, -250, 400, -40);

        }else{
            brush.flowLine(-450, -200, 200, -40);
            brush.flowLine(-250, -200, 350, -40);
            brush.flowLine(-320, -200, 350, -40);
        }
    };

    function checkMediaQuery() {
        isLargeScreen = lines.windowWidth >= 2560;
        isFullScreen = lines.windowWidth === 1440;
    }

    lines.windowResized = function() {
        lines.resizeCanvas(lines.windowWidth, lines.windowHeight * 0.48);
        checkMediaQuery();
        lines.redraw();
    };
}

let lines2Canvas = function(lines2) {
    let isLargeScreen = false;
    let isFullScreen = false;


    lines2.setup = function() {
        lines2.canvas = lines2.createCanvas(lines2.windowWidth, lines2.windowHeight * 0.48, lines2.WEBGL);
        lines2.canvas.parent("windowLines2"); 

        brush.instance(lines2)
        brush.load()
        brush.scale(1);
        brush.set("rotring", 0.7);
        brush.stroke(64, 64, 64);

        lines2.noLoop();

        checkMediaQuery();
    };
    

    lines2.draw = function(){
        // let available_brushes = brush.box();


        if (isLargeScreen) {
        brush.flowLine(-850, -325, 550, -40);
        brush.flowLine(-800, -320, 590, -40);
        brush.flowLine(-450, -280, 580, -40);
        }else if(isFullScreen){
            brush.flowLine(-450, -178, 300, -40);
            brush.flowLine(-430, -176, 340, -40);
            brush.flowLine(-300, -162, 330, -40);
        }else{
            brush.flowLine(-400, -135, 250, -40);
            brush.flowLine(-380, -132, 290, -40);
            brush.flowLine(-250, -119, 280, -40);
        }
    };

    function checkMediaQuery() {
        isLargeScreen = lines2.windowWidth >= 2560;
        isFullScreen = lines2.windowWidth === 1440;
    }

    lines2.windowResized = function() {
        lines2.resizeCanvas(lines2.windowWidth, lines2.windowHeight * 0.48);
        checkMediaQuery();
        lines2.redraw();
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