var trex, trex_running, edges;
var invisibleground;
var cloud;
var cloudimage;
var groundImage;
var ground 
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
  cloudimage= loadImage('Cloud.png')
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  ground=createSprite(150,180,400,10)
  ground.addAnimation("ground",groundImage)
  ground.velocityX=-5

  invisibleground = createSprite(200,190,460,8)
  invisibleground.visible=false                
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")&&trex.y>150){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  if(ground.x<0){
ground.x=ground.width/2;
  }
  //stop trex from falling down
  trex.collide(invisibleground)
  drawSprites();
  spawnclouds();
}
function spawnclouds(){
  if(frameCount%120==0){
    clouds=createSprite(550,100, 50,40)
    clouds.velocityX=-3
    clouds.addImage(cloudimage)
    clouds.scale=0.5
clouds.y=Math.round(random(50,100))
clouds.depth=trex.depth
trex.depth=trex.depth+1
  }

}

