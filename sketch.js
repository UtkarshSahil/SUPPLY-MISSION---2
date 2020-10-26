var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redzone1,redzone2,redzone3; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	redzone1=createSprite(width/2,height-40,300,25);
	redzone1.shapeColor="red";
	
	redzone2=createSprite(width-238,height-128,25,200);
	redzone2.shapeColor="red";

	redzone3=createSprite(width-561,height-128,25,200);
	redzone3.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	redzone1 = Bodies.rectangle(width/2, 650, 200, 35 , {isStatic:true} );
	World.add(world, redzone1);

	redzone2 = Bodies.rectangle(width-238, height-128, 25, 200 , {isStatic:false} );
	World.add(world, redzone2);

	redzone3 = Bodies.rectangle(width-561, height-128, 25, 200 , {isStatic:true} );
	World.add(world, redzone3);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  if(keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(packageBody,false);
	}	
 
  Engine.update(engine);
}
