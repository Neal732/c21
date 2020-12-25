var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1000,400);
 
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)

  wall=createSprite(950,200,thickness,height/2);
  wall.shapeColor="white";

  bullet=createSprite(50,200,40,20);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
}

function draw() {
  background(20); 
  text(damage,500,200);
  
  if(wall.x-bullet.x< (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(wall.width*wall.width*wall.width)
    if(damage>10){
      bullet.shapeColor="red";
    }
    if(damage<10){
      bullet.shapeColor="green";
    }
  }

  drawSprites();
}