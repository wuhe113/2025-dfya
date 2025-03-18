// the following code is learned from https://www.youtube.com/watch?v=rG37RIRU0D4

window.onload = function(){

      // module aliases
let Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite,
Mouse = Matter.Mouse,
MouseConstraint = Matter.MouseConstraint;
Body = Matter.Body; 

// create an engine
// let engine = Engine.create();
let engineBackground = Engine.create();
let engineForeground = Engine.create();


// create a renderer


let renderBehind = Render.create({
    element: document.getElementById("behind-matter"),
    engine: engineBackground,
    options:{
        background: "transparent",
        wireframes:false,
        width: window.innerWidth,
        height: window.innerHeight
    }
    });

let renderFront = Render.create({
    element: document.getElementById("front-matter"),
    engine:  engineForeground,
    options:{
        background: "transparent",
        wireframes:false,
        width: window.innerWidth,
        height: window.innerHeight
    }
});



// let render = Render.create({
// element: document.getElementById("matter"),
// engine: engine,
// options:{
//     background: "transparent",
//     wireframes:false,
//     width: window.innerWidth,
//     height: window.innerHeight
// }
// });

// const createObject = () =>{
    
// }

// create two boxes and a ground
// let boxA = Bodies.rectangle(400, 0, 80, 80);

// let boxA = createBodyWithLargerSensor(500, 0, 150, "assets/PNG/pad.png");
// let boxB = createBodyWithLargerSensor(300, 0, 100, "assets/PNG/game controller.png");
// let boxC = createBodyWithLargerSensor(1000, 0, 150, "assets/PNG/cd.png");
// let boxD = createBodyWithLargerSensor(200, 0, 100, "assets/PNG/heart.png");

// let scaleFactor = 1;

// let boxA = Bodies.circle(700, 0, 150, {
//     render: {
//         sprite: {
//             texture:"assets/PNG/pad.png"
//         }
//     }
// })

// let boxB = Bodies.circle(400, 0, 100, {
//     render: {
//         sprite: {
//             texture:"assets/PNG/game controller.png"
//         }
//     }
// })

// let boxC = Bodies.circle(1200, 0, 150, {
//     render: {
//         sprite: {
//             texture:"assets/PNG/cd.png"
//         }
//     }
// })

// let boxD = Bodies.circle(200, 0, 90, {
//     render: {
//         sprite: {
//             texture:"assets/PNG/heart.png"
//         }
//     }
// })

// let boxE = Bodies.circle(1100, 0, 350, {
//     render: {
//         sprite: {
//             texture:"assets/PNG/book.png"
//         }
//     }
// })

// let boxF = Bodies.circle(250, 0, 100, {
//     render: {
//         sprite: {
//             texture:"assets/PNG/sword.png"
//         }
//     }
// })

function setupMatterWorld() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let scaleFactor;
    
    // Define scale and object sizes based on screen width
    if (screenWidth < 1928) {
        scaleFactor = 1; // Smaller screens → smaller objects
    } else if (screenWidth >= 1928 && screenWidth < 2560) {
        scaleFactor = 1.2; // Medium screens → normal size
    } else {
        scaleFactor = 2; // Large screens → bigger objects
    }

    // Create ground based on screen size
    let ground = Bodies.rectangle(screenWidth / 2, screenHeight - (50 * scaleFactor), screenWidth, 60 * scaleFactor, { 
        isStatic: true,
        render: { visible: false } 
    });

    function createImageBody(x, y, baseSize, texturePath) {
        let scaledSize = baseSize * scaleFactor; // Scale size dynamically

        return Bodies.circle(x, y, scaledSize, {
            render: {
                sprite: {
                    texture: texturePath,
                    xScale: scaleFactor, // Scale image horizontally
                    yScale: scaleFactor  // Scale image vertically
                }
            }
        });
    }

    // Create objects with images (scaled dynamically)
    let boxA = createImageBody(700, 0, 150, "assets/PNG/pad.png");
    let boxB = createImageBody(400, 0, 100, "assets/PNG/game controller.png");
    let boxC = createImageBody(1200, 0, 150, "assets/PNG/cd.png");
    let boxD = createImageBody(200, 0, 90, "assets/PNG/heart.png");
    let boxE = createImageBody(1100, 0, 350, "assets/PNG/book.png");
    let boxF = createImageBody(250, 0, 100, "assets/PNG/sword.png");



// let boxB = Bodies.rectangle(450, 50, 80, 80);
// let ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 60, { 
//     isStatic: true,
//     render: { visible: false } 
// });

// let ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 30, window.innerWidth, 100, { 
//     isStatic: true,
//     render: { visible: false } 
// });

// let ground = Bodies.rectangle(
//     window.innerWidth / 2, 
//     window.innerHeight / scaleFactor, 
//     window.innerWidth, 
//     50, 
//     { isStatic: true, render: { visible: false } }
// );

// Scale all objects
// [boxA, boxB, boxC, boxD, boxE, boxF].forEach(body => {
//     Body.scale(body, scaleFactor, scaleFactor);
// });

// Scale the ground
// Body.scale(ground, scaleFactor, 1);
// Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight - 125 });
// Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight - 50 });


// add all of the bodies to the world
Composite.add(engineBackground.world, [boxE, ground]);
Composite.add(engineForeground.world, [boxA, boxB, boxC, boxD, boxF, ground]);

renderBehind.canvas.width = screenWidth;
renderBehind.canvas.height = screenHeight;
renderFront.canvas.width = screenWidth;
renderFront.canvas.height = screenHeight;
}

// run the renderer
// Render.run(render);
Render.run(renderBehind);
Render.run(renderFront);

// create runner
// let runner = Runner.create();
let runnerBackground = Runner.create();
let runnerForeground = Runner.create();

// run the engine
// Runner.run(runner, engine);
Runner.run(runnerBackground, engineBackground);
Runner.run(runnerForeground, engineForeground);

// let mouse = Mouse.create(render.canvas);
let mouse = Mouse.create(renderFront.canvas);
let mouseConstraint = MouseConstraint.create(engineForeground,{
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

Composite.add(engineForeground.world, mouseConstraint);

setupMatterWorld();

// Run on window resize
window.addEventListener("resize", () => {
    // Clear the world
    Composite.clear(engineBackground.world);
    Composite.clear(engineForeground.world);

    // Reset the simulation
    setupMatterWorld();
});


// window.addEventListener('resize', () => {
//     renderBehind.options.width = window.innerWidth;
//     renderBehind.options.height = window.innerHeight;
//     renderFront.options.width = window.innerWidth;
//     renderFront.options.height = window.innerHeight;

//     Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight / 2 });
// });

// function createBodyWithLargerSensor(x, y, radius, texture) {
//     let mainBody = Bodies.circle(x, y, radius, {
//         render: { sprite: { texture } }
//     });

//     let sensor = Bodies.circle(x, y, radius * 3.5, {
//         isSensor: true,
//         render: { visible: false }
//     });

//     let compoundBody = Body.create({
//         parts: [mainBody, sensor]
//     });

//     return compoundBody;
// }

};