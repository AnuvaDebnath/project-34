
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function setup() {
	createCanvas(1200,650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic :false,
		restitution :0.5,
		fiction :10,
		density :1.2
	}

	ball = Matter.Bodies.circle(500,200,20,ball_options);
	Matter.World.add(world,ball);

	ground = new Ground(600,650,1200,10);
	leftSide = new Ground(800,600,20,120);
	rightSide = new Ground(1100,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();	
  leftSide.display();
  rightSide.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)

}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:60,y:-60});
	}
}

