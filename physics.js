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


let boxA = Bodies.circle(700, 0, 150, {
    render: {
        sprite: {
            texture:"assets/PNG/pad.png"
        }
    }
})

let boxB = Bodies.circle(400, 0, 100, {
    render: {
        sprite: {
            texture:"assets/PNG/game controller.png"
        }
    }
})

let boxC = Bodies.circle(1200, 0, 150, {
    render: {
        sprite: {
            texture:"assets/PNG/cd.png"
        }
    }
})

let boxD = Bodies.circle(200, 0, 90, {
    render: {
        sprite: {
            texture:"assets/PNG/heart.png"
        }
    }
})

let boxE = Bodies.circle(1100, 0, 350, {
    render: {
        sprite: {
            texture:"assets/PNG/book.png"
        }
    }
})

let boxF = Bodies.circle(250, 0, 100, {
    render: {
        sprite: {
            texture:"assets/PNG/sword.png"
        }
    }
})


// let boxB = Bodies.rectangle(450, 50, 80, 80);
let ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 60, { 
    isStatic: true,
    render: { visible: false } 
});

// add all of the bodies to the world
Composite.add(engineBackground.world, [boxE, ground]);
Composite.add(engineForeground.world, [boxA, boxB, boxC, boxD, boxF, ground]);

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