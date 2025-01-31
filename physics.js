window.onload = function(){

      // module aliases
let Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite,
Mouse = Matter.Mouse,
MouseConstraint = Matter.MouseConstraint;

// create an engine
let engine = Engine.create();

// create a renderer
let render = Render.create({
element: document.getElementById("matter"),
engine: engine,
options:{
    background: "transparent",
    wireframes:false,
    width: window.innerWidth,
    height: window.innerHeight
}
});

// const createObject = () =>{
    
// }

// create two boxes and a ground
// let boxA = Bodies.rectangle(400, 0, 80, 80);
let boxA = Bodies.circle(500, 0, 200, {
    render: {
        sprite: {
            texture:"assets/PNG/pad.png"
        }
    }
})

let boxB = Bodies.circle(300, 0, 100, {
    render: {
        sprite: {
            texture:"assets/PNG/game controller.png"
        }
    }
})
// let boxB = Bodies.rectangle(450, 50, 80, 80);
let ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 60, { 
    isStatic: true,
    render: { visible: false } 
});

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
let runner = Runner.create();

// run the engine
Runner.run(runner, engine);

let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine,{
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

Composite.add(engine.world, mouseConstraint);



};