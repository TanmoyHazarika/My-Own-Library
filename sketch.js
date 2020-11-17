var fixedRect,movingRect,Rect1,Rect2,Rect3,Rect4;

function setup() {
  createCanvas(800,400);
 movingRect =  createSprite(400, 200, 30,80);
 movingRect.shapeColor = "green";
 fixedRect = createSprite(200,200,50,50);
 fixedRect.shapeColor = "green";
 Rect1 = createSprite(600,100,40,40);
 Rect1.shapeColor = "green";
 Rect2 = createSprite(100,150,50,60);
 Rect2.shapeColor = "green";
 Rect3 = createSprite(700,350,40,30);
 Rect3.shapeColor = "green";
 Rect4 = createSprite(450,75,20,30);
 Rect4.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,Rect3)){
    movingRect.shapeColor = "red";
    Rect3.shapeColor = "red";
  }
  else{
 movingRect.shapeColor = "green";
  Rect3.shapeColor = "green";
  }
  
  drawSprites();
}
