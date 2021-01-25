
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree, mango1, mango2, mango3, mango4, mango5;
var boy, stone;
var ground;
var chain;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 750);


	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(800,500);
	mango2 = new Mango(870,570);
	mango3 = new Mango(950,480);
	mango4 = new Mango(860,560);
	mango5 = new Mango(900,600);

	chain = new Chain(boy.body, stone.body);
	
	boy = new Boy(200,90);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 mango1.display();
 mango1.display();
 mango1.display();
 mango1.display();
 mango1.display();
 
 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);

 boy.display();
 
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    stone.fly();
}
function detectCollision(){
	if(mango1.collide(stone)){
		mango1.Body.setStatic(false);
	}
	if(mango2.collide(stone)){
		mango2.Body.setStatic(false);
	}
	if(mango3.collide(stone)){
		mango3.Body.setStatic(false);
	}
	if(mango4.collide(stone)){
		mango4.Body.setStatic(false);
	}
	if(mango5.collide(stone)){
		mango5.Body.setStatic(false);
	}
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		chain.attach(stone.body)
	}
}
