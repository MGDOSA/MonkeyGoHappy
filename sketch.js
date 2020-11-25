
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananasGroup, obstacleGroup
var score = 0;
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,450);
  
//create a monkey sprite
monkey = createSprite(100,200,20,50);
monkey.addAnimation("running",monkey_running);
monkey.scale =0.1;
  
//create a ground sprite
ground = createSprite(200,300,1200,20);
ground.velocityX = -4; 
ground.x = ground.width /2;   

score = 0;
}


function draw() {
  background(180);
  stroke("black");
  textSize(20);
  fill("black");
  score=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + score,100,50);
//jump when the space button is pressed
if (keyDown("space")) {
  monkey.velocityY = -10; 
}
  //making gravity
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);

  //making the ground reset.
  if (ground.x < 0) {
  ground.x = ground.width / 2;
}
  
  //spawning the bananas
  createBananas();
  
  //spawning the obstacles
  createObstacles();
  
drawSprites();
}

function createBananas(){
 if(frameCount %80===0){
   var banana = createSprite(450,50,20,20);
   banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.velocityX = -3;
   banana.lifetime = 200;
   banana.scale = 0.1;
  
   
 }
}


function createObstacles(){
 if(frameCount % 300 ===0){
  var obstacle = createSprite(600,275,10,40);
   //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300
    obstacle.velocityX = -3;
   obstacle.addImage(obstaceImage);
 }
}




