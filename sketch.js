var backdrop = createSprite(200,200,400,400)
backdrop.setAnimation("arena.png")

var monster = createSprite(100,200,50,50)
monster.setAnimation("cartoon-monster-dragon-corporate-boss-in-tie-and-crown.jpg")

var player = createSprite(200,200,25,25)
player.setAnimation("afraid-shocked-man-cartoon-full-color-95745952.jpg")

var meteor = createSprite(150,200,25,25)
meteor.setAnimation("meteor-file-meteorit-wikimedia-commons-23")


function preload(){
createCanvas(400,400)




}

function setup() {
    backdrop.velocityY=-2 
    meteor.velocityY=2
    monster.velocityY=-2
    player.velocityY=-2
}

function draw() {
if(backdrop.y>400){
width/2
}
    
}