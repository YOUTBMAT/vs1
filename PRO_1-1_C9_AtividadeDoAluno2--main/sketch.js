

function setup() {
  createCanvas(800,800);
  box= createSprite (400,400,30,30)
  
}

function draw() 
{
  background(25);


  

if (keyIsDown(RIGHT_ARROW)){
box.position.x = box.position.x + 10; 
}
if (keyIsDown(LEFT_ARROW)){
  box.position.x = box.position.x - 10; 
  }
  if (keyIsDown(UP_ARROW)){
    box.position.y = box.position.y - 10; 
    }
    if (keyIsDown(DOWN_ARROW)){
      box.position.y = box.position.y + 10; 
      }



drawSprites();
}




