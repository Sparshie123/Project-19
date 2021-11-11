var backdrop = createSprite(200,200,400,400)
backdrop.setAnimation("arena.png")

var monster = createprite(100,200,50,50)
monster.setAnimation("cartoon-monter-dragon-corporate-boss-in-tie-and-crown.jpg")

var player = createSprite(200,200,25,25)
player.setAnimation("afraid-shocked-man-cartoon-full-color-95745952.jpg")

var meteor = createSprite(150,200,25,25)
meteor.setAnimation("meteor-file-meteorite-wikimedia-common-23")
var ground=createSprite(200,225,400,50)
var score

var ground=createSprite(200,225,400,50)


function preload(){
createCanva(400,400)
ground.visible=false
player.collide(ground)


}

function setup() {
    backdrop.velocityX=-2 
    meteor.velocityX=2
    ground.velocity=-2
    
}

function draw() {
if(backdrop.x>400){
width/2
}
ground.velocityX=-(4+3*score/100)
score=score = Math.round(getFrameRate()/60) 
if(player.isTouching(monster||meteor)) {
    meteor.visible = false
    player.remove()
    ground.velocityX=0 
    backdrop.velocity=0
    monster.velocityX=0
    player.velocity=0 
    console.log("Game Over")
    Text(400,400,250,100,"Game Over")
}
 if(keyisDown("space")&& player.y>=50) {
 
 trex.velocityY=-10 
 }
 if(mousePressedOver(restart)) {
 console.log("Do you want to have a second chance?")
 }
  
 
}

function spawnMeteor() {
    if(frameCount%60 === 0)
    meteor.velocityY = -(6+score/100)
    meteor.setLifetimeEach(-1)
}

function restart() {
    player.x= 400
    player.y= 400 
    monster.x=350 
    monster.y=400
    Text.visible=false 
}



drawSprites()