const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2, pig1, log1;
var box3, box4, pig2, log2;
var box5, log3, log4;
var bird;
var bgImage;
var clog, chain;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  bgImage = loadImage("/sprites/bg.png");
  
  ground = new Ground(400,390,800,20);

  bird = new Bird(200, 200);
  
  box1 = new Box(300, 300, 70, 70);
  box2 = new Box(500, 300, 70, 70);

  pig1 = new Pig(400, 300);

  log1 = new Log(400,250,300,PI/2);

  box3 = new Box(300, 200, 70, 70);
  box4 = new Box(500, 200, 70, 70);

  pig2 = new Pig(400, 200);

  log2 = new Log(400, 150, 300, PI/2);

  box5 = new Box(400, 100, 70, 70);
  log3 = new Log(330, 100, 150, PI/7);
  log4 = new Log(460, 100, 150, -PI/7);

  clog = new Log(230, 180, 80, PI/2);

  chain = new Chain(bird.body, clog.body);

  //console.log(pig1)
}

function draw() {
  
  //This is creating multiple images
  //background(bgImage); 
  
  imageMode(CENTER);
  image(bgImage, width/2, height/2,width,height);

  Engine.update(engine);
  
  ground.display();  
  box1.display();
  pig1.display();
  box2.display();
  log1.display();

  box5.display();
  pig2.display();
  box4.display();
  log2.display();

  box3.display();
  log3.display();
  log4.display();

  bird.display();

  clog.display();
  chain.display();

  //text(mouseX+" , "+mouseY, mouseX, mouseY);
 
  
}