
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
beam1=new beam(400,100,800,30)
ball1=new ball(100,500,20,20)
rope1=new Rope(ball1.body,{x:100,y:100})

beam2=new beam(400,100,800,30)
ball2=new ball(200,400,30,30)
rope2=new Rope(ball2.body,{x:200,y:100})

beam3=new beam(400,100,800,30)
ball3=new ball(200,600,30,30)
rope3=new Rope(ball3.body,{x:400,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  beam1.display()
  ball1.display()
  rope1.display()

  beam2.display()
  ball2.display()
  rope2.display()

  beam3.display()
  ball3.display()
  rope3.display()
  drawSprites();
 
}



