
var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,80,10);
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor="white";
  bullet.velocityX=speed;
}

function draw() {
  background("black");
if(hascollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor="red";
  }
  if(damage<10){
    wall.shapeColor="blue";
  }
  
}
  

   
  drawSprites();
}

function hascollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}




