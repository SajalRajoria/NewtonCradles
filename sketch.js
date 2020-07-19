//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof;
var bob1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  
	//Create the Bodies Here.
roof = new Roof(400,50,500,60);
bob1 = new Bob(400,400);
bob2 = new Bob(300,400);
bob3 = new Bob(200,400);
bob4 = new Bob(500,400);
bob5 = new Bob(600,400);
rope1 = new Rope(bob1.body,roof.body,5,0);



	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("white");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  
  
}