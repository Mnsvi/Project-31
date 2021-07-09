// defining constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

// definig variables
var tree, stone, boy;
var boyImg;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var slingshot;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png");	
}

function setup() {
	
	// creating camvas 
	createCanvas(1000, 700);

	// creating engine and adding it to world
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(700, 350, 30, 300);
	stone = new Stone(146, 493, 15);
	mango1 = new Mango(510, 295, 15);
	mango2 = new Mango(550, 200, 15);
	mango3 = new Mango(650, 165, 15);
	mango4 = new Mango(660, 250, 15);
	mango5 = new Mango(765, 165, 15);
	mango6 = new Mango(800, 300, 15);
	mango7 = new Mango(945, 300, 15);
	slingshot = new Slingshot(stone.body,{x:150,y:500});

	// runnig engine
	Engine.run(engine);

	// creating ground
	ground = Bodies.rectangle(width/2, 600, width, 10,{
		isStatic: true});
		World.add(world, ground);
}

function draw() {

	// rect
	rectMode(CENTER);
	
	// giving background color
	background("skyblue");

    // mouse coordinates
	text(mouseX + ',' + mouseY, 30, 45);

	// getting new stones
	textSize(30);
	fill(0);
	text("Press Space to get second chance to Play!!!", 90, 50);

	// boy
	boy = createSprite(200,550);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	
	// displaying objects
	tree.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	slingshot.display();

	// detecting collision
	detectollision(stone, mango1);
	detectollision(stone, mango2);
	detectollision(stone, mango3);
	detectollision(stone, mango4);
	detectollision(stone, mango5);
	detectollision(stone, mango6);
	detectollision(stone, mango7);

	// displaying sprites
	drawSprites();
}

// dragging the mouse
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY}) 
}

// releasing the mouse
function mouseReleased(){
	slingshot.fly();
}

// new stones
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x : 235, y : 420}) 
	  slingshot.attach(stone.body);
	}
}

// detecting collisions
function detectollision(lstone,lmango){
	// positions
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
	
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if (distance <= lmango.r + lstone.r){
Matter.Body.setStatic(lmango.body , false);
} 
}