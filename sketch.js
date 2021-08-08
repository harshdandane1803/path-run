var path, pathImage;
var jake, jakeImage;
var leftWall,rightWall;
function preload(){
  
  pathImage = loadImage ("path.png");
  jakeImage=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
  
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path = createSprite (200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  
  jake = createSprite (200,350);
  jake.addAnimation("jakeRunning",jakeImage)
  
  leftWall = createSprite (0,350,100,100);
  rightWall = createSprite (410,350,100,100);
  
  leftWall.visible=false;
  rightWall.visible=false;
  

  
}

function draw() {
  background(0);
  
  if (path.y > 400 )
  {
    path.y = 200;
    
    
  }
  
  jake.x = mouseX
  
  jake.collide(leftWall);
  jake.collide(rightWall);
  
  
  
  

  drawSprites();
}
