
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	diamond = new Diamond(400,320,70,70);
	ground = new Ground(600,height,1200,20);
	circle = new Circle(320,500,35);
	box = new Box(600, 350);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("LightBlue");

  box.display();
  ground.display();
  circle.display();
  diamond.display();
  
  drawSprites();
 
}



