const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var ball;
var engine;
var start;
var spike1_img;
var bg;

function preLoad(){
}

function setup() {
  createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ball = new Ball(55,390,50);
  start = new Start(50, 400, 100, 20);
  spike1 = new Spikes(500, 10, 1000, 20);
  spike2 = new Spikes(990, 250, 20, 500);
  spike3 = new Spikes(500, 490, 1000, 20);
  spike4 = new Spikes(7,250,20,500);
}

function draw() {
  background("gold");
  strokeWeight(3);
  stroke("black");
  fill("red");
  spike1.display();
  spike2.display();
  spike3.display();
  spike4.display();
  start.display();
  fill("red");
  ball.display();
  spawnObstacles();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:0, y:-6});
  }
  if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:-1.5,y:0});
  }
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:1.5,y:0});
  }
}

function spawnObstacles(){
  if(frameCount % 100 === 0){
    obstacle = new Spikes(500, 100, 20, 20);
    obstacle.display();
    //console.log(obstacle.body.position.y);
    //var obstacle = createSprite(random(20,980), 0, 10, 10);
    //obstacle.y = obstacle.y-5;
  }
}