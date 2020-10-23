
var survivalTime=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
   FoodGroup=createGroup();
  obstacleGroup=createGroup();
  score = 0;
}
  


function draw() {
background(225);
  
  if (ground.x<0){
    
    ground.x= ground.width/2;
  }
  
  if (keyDown("space")){
    
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground);
  
  food();
  obstacles();
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityX = 0;
     FoodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
     FoodGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
     }
  drawSprites();
  stroke("white")
  textSize(20);
  fill("white");
  text("score"+score,500,50);
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time "+survivalTime,100,50);
}

function food(){
  if(frameCount % 80===0){
  
  banana = createSprite(400,0,20,20);
  banana.scale = 0.1;
    banana.y = Math.round(random(150,325));
   banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.Lifetime = 200;
 FoodGroup.add(banana)
    
}
  
}

function obstacles(){
  
  if(frameCount % 75===0){
  
  obstacle = createSprite(800,320,10,40);
  obstacle.scale = 0.1;
    
   obstacle.addImage(obstacleImage);
    obstacle.velocityX = -5;
    obstacle.Lifetime = 100;
obstacleGroup.add(obstacle);
    
}
  
}




