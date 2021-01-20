var gameState;
var Castle,Finn_Dead,Finn_Jumping,Finn_Running,Finn_Running2,Finn_Sitting,Finn_Sliding,Finn_Sneaking,Finn_Walking,Finn_Img;
var titleImg,Title;
var King_Img,King;
var dark_Room;
var key_Img;
var keyValue=0;
var door;
var key;

function preload(){
  Castle=loadImage("../Images/Castle.jpg");
  Finn_Dead=loadImage("../Images/Finn_Dead.png");
  Finn_Jumping=loadImage("../Images/Finn_Jumping.png");
  Finn_Running=loadImage("../Images/Finn_Running.png");
  Finn_Running2=loadImage("../Images/Finn_Running2.png");
  Finn_Sitting=loadImage("../Images/Finn_Sitting.png");
  Finn_Sliding=loadImage("../Images/Finn_Sliding.png");
  Finn_Sneaking=loadImage("../Images/Finn_Sneaking.png");
  Finn_Walking=loadImage("../Images/Finn_Walking.png");
  Finn_Img=loadImage("../Images/Finn.png");
  titleImg=loadImage("../Images/title.jpg");
  King_Img=loadImage("../Images/King.jpg");
  dark_Room=loadImage("../Images/Dark_Room.jpg");
  key_Img=loadImage("../Images/Key.jpg");
}

function setup(){
createCanvas(1200,500);
gameState = "Start";
Title=createSprite(600,50,10,10);
Title.addImage(titleImg);
Title.visible=false;
Finn=createSprite(50,390,100,50);
Finn.addImage(Finn_Img);
Finn.visible=false;
King=createSprite(1130,370,50,50);
King.addImage(King_Img);
King.visible=false;
door=createSprite(600,300,20,20);
door.visible=false;

}

function draw(){
  background("black");
  if(gameState==="Start"){
   Title.visible=true;
  Finn.visible=true;
  King.visible=true;
  //key.visible=false;
  Finn.velocityX=0;
  Finn.velocityY=0;
  textSize(25);
  fill("red");
text("James VIth has put Finn in jail in a black room because Finn was against James",130,275);
text("to limit his monarchial powers. Help Finn to escape the king’s (James VIth) castle",130,300);
text("using your skill and IQ to win the game and save Finn’s life or Finn will be sentenced",130,325);
text("to death by the king.Try your best to win the game and save Finn from the evil King!!!",130,350);
fill("white");
text("Press Space to start the game!!",400,450);
if(keyCode===32){
  gameState="level1";
  Title.visible=false;
  Finn.visible=false;
  King.visible=false;
  text.visible=false;
 }
 }
 

if(gameState==="level1"){
  Finn.visible=true;
  key=createSprite(1165,450,10,10);
key.addImage(key_Img);
  key.visible=true;
  key.debug=true;
  background(dark_Room);
  if(!(Finn.isTouching(door))){
  if(keyDown(UP_ARROW)){
    Finn.y=Finn.y-6;
    Finn.addImage(Finn_Running);
  }
  if(keyWentUp(UP_ARROW)){
    Finn.addImage(Finn_Img);
  }
  if(keyDown(DOWN_ARROW)){
    Finn.y=Finn.y+6;
    Finn.addImage(Finn_Running);
  }
  if(keyWentUp(DOWN_ARROW)){
    Finn.addImage(Finn_Img);
  }
  
  if(keyDown(LEFT_ARROW)){
    Finn.x=Finn.x-6
    Finn.addImage(Finn_Running2);
  }
  if(keyWentUp(LEFT_ARROW)){
    Finn.addImage(Finn_Img);
  }
  if(keyDown(RIGHT_ARROW)){
   Finn.x=Finn.x+6;
   Finn.addImage(Finn_Running);   
  }
if(keyWentUp(RIGHT_ARROW)){
  Finn.addImage(Finn_Img);
}
if(keyDown("Space")){
  Finn.addImage(Finn_Jumping);
  Finn.y=Finn.y-6;
}
if(keyWentUp("Space")){
  Finn.addImage(Finn_Img);
  Finn.y=Finn.y+6;
}
  }

textSize(25)
fill("white")
text("Key:" + keyValue, 1120, 30);

if(Finn.isTouching(key)){
  removeSprite(key);
  keyValue=keyValue+1;
  fill("red");
  textSize(25);
  text("You have found the key!!!Now go towards the door to complete the level....",200,250);
}
if(Finn.isTouching(door)&&(keyValue=1)){
  fill("red");
textSize(25);
  text("Good Job!!",550,150);
  text("Level 1 Complete!!",515,175);
  text("Press Shift to proceed to the next level.",400,200);
}

if(keyDown("Shift")){
  gameState="level2";
  Finn.visible=false;
  key.visible=false;
  door.visible=false;
  keyValue.visible=false;
  }

}

 if(gameState==="level2"){
    fill("red");
    text("Hi",600,300);
  }

 drawSprites();
}
