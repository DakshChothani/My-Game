var SERVE = 0;
var PLAY = 1;
var END = 2;
var gameState = SERVE;

var tank1,tank2,gun1,gun2,bullet1,bullet_2;
var back_img,back_img_2;
var person1_img,person2_img;
var tank1_img,tank2_img;
var gun1_img,gun2_img;
var bullet_img_1,bullet_img_2;
var bulletsGroup;
var health_1 = 150;
var health_2 = 100;
var start_play,play_img;
var back_sound;
var gunGroup,aksGroup;

function preload() {
    back_img = loadImage("Back_img.jpg");
    back_img_2 = loadImage("Back_img_2.jpg");
    person1_img = loadImage("person_1.PNG");
    person2_img = loadImage("person_2.PNG");
    tank1_img = loadImage("tank1.png");
    tank2_img = loadImage("tank2.png");
    gun1_img = loadImage("gun1.PNG");
    gun2_img = loadImage("gun2.PNG");
    bullet_img_1 = loadImage("bullet_1.png");
    bullet_img_2 = loadImage("bullet_2.PNG");
    play_img = loadImage("play.png");
    back_sound = loadSound("bg.mp3");
}

function setup(){
    createCanvas(displayWidth,displayHeight-115);

    bulletsGroup = createGroup();
    firesGroup = createGroup();
    gunsGroup = createGroup();
    aksGroup = createGroup();

    gun2 = createSprite(250,821,10,10);
    gun2.addImage("gunImage_1",gun2_img);
    gun2.scale = 0.3;

    tank1 = createSprite(1700,800,10,10);
    tank1.addImage("tankImage_1",tank1_img);
    tank1.addImage("personimage_2",person2_img);
    tank1.scale = 0.8;

    tank2 = createSprite(200,800,10,10);
    tank2.addImage("tankImage_2",tank2_img);
    tank2.addImage("personimage_1",person1_img);
    tank2.scale =0.2;

    gun1 = createSprite(1600,772,10,10);
    gun1.addImage("gunImage_1",gun1_img);
    gun1.scale = 0.3;

    start_play = createSprite(930,280,50,50);
    start_play.scale = 0.8;
    start_play.addImage("playdisplay",play_img);

}

function draw(){
    background(back_img,"displayImage");
    if(gameState === 0){
        tank1.visible = false;
        tank2.visible = false;
        gun1.visible = false;
        gun2.visible = false;
        if(mousePressedOver(start_play)){
            gameState = 1;
        }
    }


    if(gameState === 1){
        console.log(frameCount);
        tank1.visible = true;
        tank2.visible = true;
        start_play.visible = false;
        back_sound.play();
    if(keyWentDown("d")){
       tankFireBullet_1();
    }

    if(bulletsGroup.isTouching(tank1)){
        bulletsGroup.destroyEach();
        health_2 = health_2 - 10;
    }

    if(keyWentDown("a")){
        tankFireBullet_2();
     }
 
     if(firesGroup.isTouching(tank2)){
         firesGroup.destroyEach();
         health_1 = health_1 - 25;
     }

     if(health_1 <= 0 ){
        tank1.changeAnimation("personimage_2",person2_img);
        tank1.scale = 0.6;
        tank2.changeAnimation("personimage_1",person1_img);
        tank2.scale = 0.6;
        gun1.visible = true;
        gun2.visible = true;
        health_1 = 150;
        health_2 = 100;
        fill("yellow");
        textSize(50);
        text("Level2",880,40);

     }
     if(frameCount >= 1800){
        health_1 = 0;
        health_2 = 0;
     }

    if(gameState === 2){
        tank1.visible = false;
        tank2.visible = false;
        gun1.visible = false;
        gun2.visible = false;
    }

     if(health_2 <= 0 ){
         gameState = 2
     }
    }

    drawSprites();
  if(gameState === 1){
    if(frameCount <50 && frameCount > 100){
    fill("yellow");
    textSize(50);
    text("Level1",880,40);
      }
    fill("blue");
    textSize(40);
    text("Pakistan",650,80);
    fill("blue");
    textSize(40);
    text("India",1100,80);
    fill(255);
    textSize(30);
    text(health_1,700,120);
    fill(255);
    textSize(30);
    text(health_2,1120,120);
 }
 if(gameState === 2){
    fill("yellow");
    textSize(50);
    text("India Win",880,500);
 }
}
    
function tankFireBullet_1(){
    bullet1 = createSprite(430,694,10,10);
    bullet1.addImage("fireImage",bullet_img_1);
    bullet1.scale = 0.2;
    bullet1.velocityX =5;
    bullet1.depth = tank1.depth;
    tank1.depth = tank1.depth + 1;
    bulletsGroup.add(bullet1);
}

function tankFireBullet_2(){
    bullet2 = createSprite(1518,736,10,10);
    bullet2.addImage("fireImage_2",bullet_img_2);
    bullet2.scale = 0.2;
    bullet2.velocityX =-9;
    bullet2.depth = tank2.depth;
    tank2.depth = tank2.depth + 1;
    firesGroup.add(bullet2);
}
