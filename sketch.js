var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
fixedRect= createSprite(400,200,50,80);
fixedRect.shapeColor= "green";

movingRect= createSprite(150,100,80,30);
movingRect.shapeColor= "blue";

movingRect.debug= true;
fixedRect.debug= true;

}

function draw() {
  background(0);  

  movingRect.x= mouseX;
  movingRect.y= mouseY;
  console.log(movingRect.x- fixedRect.x);

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    
    ){
    movingRect.shapeColor= "yellow";
    fixedRect.shapeColor= "green";
  }
  else{
    movingRect.shapeColor= "blue";
    fixedRect.shapeColor= "green";
  }

  drawSprites();
}