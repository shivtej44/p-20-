var catImg1,cat,mouseImg1,mouse,gardenImg,garden,mouseImg2;

function preload() {
 //load the images here
 catImg1 = loadAnimation("images/cat4.png");
 mouseImg1 = loadAnimation("images/mouse4.png");
 gardenImg = loadImage("images/garden.png");
 mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
 catImg2 = loadAnimation("images/cat2.png","images/cat3.png");

 mouseImg3 = loadAnimation("images/mouse1.png");
 catImg3 = loadAnimation("images/cat1.png");
 
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage(gardenImg);

    cat = createSprite(700,600);
    cat.addAnimation("cat standing",catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("mouse standing",mouseImg1);
    mouse.scale = 0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(mouse.x - cat.x <= mouse.width/2+cat.width/2
      &&cat.x - mouse.x <= mouse.width/2+cat.width/2)
     {
       
      mouse.addAnimation("mouse happy",mouseImg3);
      mouse.changeAnimation("mouse happy",mouseImg3);
      
      
  
      cat.addAnimation("cat happy",catImg3);
      cat.changeAnimation("cat happy",catImg3);
      cat.scale = 0.2;
      cat.velocityX = 0;
     
     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyDown(LEFT_ARROW)){
    mouse.addAnimation("mouse teasing",mouseImg2);
    mouse.changeAnimation("mouse teasing",mouseImg2);
    mouse.frameDelay = 25;

    cat.addAnimation("cat angry",catImg2);
    cat.changeAnimation("cat angry",catImg2);
    cat.scale = 0.2;
    cat.frameDelay = 20;
  }

  if (keyDown(LEFT_ARROW)){
    cat.velocityX = -5;
  }
}
