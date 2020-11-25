
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var ball;



function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(100,200,50,40,ball_options);
  World.add(world,ball);

  //console.log(ball);
  // console.log(ball.type);
  // console.log(object.position.x);
  // console.log(object.position.y);
}
function draw() {
  background(0);
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50)
 
}