

var astronaut, Iss, Iss_img;
var bath, brush, drink, eat, gym, move, sleep;
var edges;
var gameState = "controls";

function preload(){
  Iss_img = loadImage("iss.png");
  bath = loadAnimation("bath1.png","bath2.png");
  brush = loadAnimation("brush.png");
  drink = loadAnimation("drink1.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym11.png","gym12.png");
  move = loadAnimation("move1.png")
  sleep = loadAnimation("sleep.png");
}


function setup() {
  createCanvas(400, 400);
  Iss = createSprite(200,200);
  Iss.addImage("background", Iss_img);
  Iss.scale = 0.12;
  Iss.height=600;
  astronaut = createSprite(300,230,20,20);
  astronaut.scale = 0.07;
  astronaut.addAnimation("sleeping", sleep )
  astronaut.setCollider("rectangle",0,0,800,2000)
}

function draw() {
  background(220);
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
  drawSprites();
  if(gameState === "controls"){

    astronaut.visible = false;
    textSize(20);
    fill("red");
    stroke("black")
    text("UP_ARROW to brush",30,30);
    text("DOWN_ARROW to excercise",30,60);
    text("LEFT_ARROW to eat",30,90);
    text("RIGHT_ARROW to bath",30,120);
    text("'m' key to move", 30, 150);

    text("'Space' key to start",30,180);
    text("^Controls^", 30, 230);

    /*Here, if spce key is pressed,
    the astronaut will become visible */
    if(keyDown("space")){
      gameState = "play";
    }
  }
  if(gameState === "play"){
    Iss.visible = true;
    astronaut.visible = true;
    if(keyDown("UP_ARROW")){
      astronaut.velocityY=0;
      astronaut.velocityX=0;
      astronaut.addAnimation("brushing",brush);
      astronaut.changeAnimation("brushing",brush);
    }
    if(keyDown("DOWN_ARROW")){
      astronaut.velocityY=0;
      astronaut.velocityX=0;
      astronaut.addAnimation("excercising",gym);
      astronaut.changeAnimation("excercising",gym);

    }
    if(keyDown("LEFT_ARROW")){
      astronaut.velocityY=0;
      astronaut.velocityX=0;
      astronaut.addAnimation("eating", eat);
      astronaut.changeAnimation("eating", eat);
    }
    if(keyDown("RIGHT_ARROW")){
      astronaut.velocityY=0;
      astronaut.velocityX=0;
      astronaut.addAnimation("bathing", bath);
      astronaut.changeAnimation("bathing", bath);
    }
    if(keyDown("M")){      
      astronaut.addAnimation("moving", move) ;
      astronaut.changeAnimation("moving", move);

      switch(Math.round(random(1,4))){
      case 1 : astronaut.velocityY=4;
               astronaut.velocityX=2;
      break;
      case 2 : astronaut.velocityY=-4;
               astronaut.velocityX=2;
      break;
      case 3 : astronaut.velocityY=4;
               astronaut.velocityX=-2;
      break;
      case 4 :astronaut.velocityY=-4;
              astronaut.velocityX=-2;
      default : break;
      
      

      }
    }
  }
}