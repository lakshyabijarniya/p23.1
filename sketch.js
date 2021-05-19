	var helicopterIMG, helicopterSprite, packageSprite,packageIMG,base,left,right,fly;

	var packageBody,ground

	const Engine = Matter.Engine;

	const World = Matter.World;

	const Bodies = Matter.Bodies;

	const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")

	packageIMG=loadImage("package.png")

   fly=loadSound("helicopter-fly-over-01.mp3")
}


function setup() 
{
	createCanvas(800, 700);

	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;


	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);


    left=createSprite(300,610,20,100);
    left.shapeColor="red";

	leftBody=Bodies.rectangle(320,610,20,10,{isStatic:true});
	World.add(world,leftBody);


	base=createSprite(400,650,200,20);
	base.shapeColor="red";

	baseBody=Bodies.rectangle(310,635,200,20,{isStatic:true});
	World.add(world,baseBody);


	right=createSprite(500,610,20,100);
	right.shapeColor="red";

	rightbody=Bodies.rectangle(480,610,20,100,{isStatic:true});
	World.add(world,rightbody);

}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	drawSprites();
	keyPressed();

 
}

function keyPressed() 
{
	if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody,false)  
}

if(keyDown(RIGHT_ARROW)){
	helicopterSprite.x=helicopterSprite.x+20;
   translation={x:20,y:0}
    Body.translate(packageBody, translation)
   fly.play();
}

if(keyDown(LEFT_ARROW)){
	helicopterSprite.x=helicopterSprite.x-20;
  translation={x:-20,y:0}
    Body.translate(packageBody, translation)
fly.play();
}
}



