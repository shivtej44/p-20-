var catImg1,cat,mouseImg1,mouse,gardenImg,garden

function preload() {
 //load the images here
 catImg1.loadImage(cat1.png);
 catImg2.loadAnimation(cat2.png,cat3.png);
 mouseImg2.loadAnimation(mouse2.png,mouse3.png);
 mouseImg1.loadImage(mouse1.png);
 gardenImg.loadImage(garden.png);

}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage(gardenImg);

    cat = createSprite(700,200);
    cat.addImage(catImg1);

    mouse = createSprite(200,200);
    mouse.addImage(mouseImg1);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <= cat.width/2+mouse.width/2
      &&mouse.x - cat.x <= cat.width/2+mouse.width/2)
     {
       
      cat.velocityX = 0;
      cat.changeAnimation(catImg2);
      mouse.changeAnimation(mouseImg2);
     
     }

    if(keyDown(LEFT_ARROW)){
      keyPressed();
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  mouse.addAnimation(mouseImg2);
  mouse.changeAnimation(mouseImg2);
  cat.changeAnimation(catImg2);
  cat.velocityY = -5;
}
