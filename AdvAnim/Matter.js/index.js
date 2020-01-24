// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    mouseConstraint = Matter.MouseConstraint,
    Events = Matter.Events,
    Mouse =  Matter.Mouse;
// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
cmouse = Mouse.create(document.body)
console.log(cmouse)
options = {
  mouse: cmouse
}
mc = mouseConstraint.create(engine, options)
Events.on(mc, "mousedown", function(){
  World.add(engine.world, Bodies.rectangle(mc.mouse.position.x, mc.mouse.position.y, 80, 80));
})

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground, mc]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
