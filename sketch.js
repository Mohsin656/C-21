const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var box, engine, world, ground;
function setup() {
  createCanvas(800,800);

  engine = Engine.create()
  world = engine.world

  box_options = {
    restitution: 1
  }
  box = Bodies.circle(200,100,50,box_options);
  World.add(world,box);

  ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(400,780,800,20,ground_options);
  World.add(world, ground);
  console.log(ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  circle(box.position.x, box.position.y, 50);
  rect(ground.position.x, ground.position.y, 800, 20);
}