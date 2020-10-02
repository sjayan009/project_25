
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  bottomgreenSprite = createSprite(400,650,800,30);
  bottomgreenSprite.shapeColor = "brown";
  
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
	bottomgreenBody = Bodies.rectangle(0, 635, 1600, 20, {isStatic:true} );
	World.add(world, bottomgreenBody);

  paper_ball1 =  new Paper(75,50,30);
  Engine.run(engine);
  
  dustbin_test = new Bo2(675,560,125,150);
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  drawSprites();
  space_key();

  dustbin_test.display();
  paper_ball1.display();
}

function space_key()
{
  if(keyDown("space"))
  {
    Matter.Body.applyForce(paper_ball1.body, paper_ball1.body.position, {x:2.15,y:-3.15});
  }
}