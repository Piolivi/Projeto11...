
var ship, shipImg; 
var seaImg, sea;

function preload(){

  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){

  createCanvas(400,400);


  //criar o fundo mexendo
  sea = createSprite(200,200);
  sea.addImage(seaImg);
  sea.velocityX = -4;

  //criar a animação
  ship = createSprite(180, 340, 30, 30);
  ship.addAnimation("ShipRunning",shipImg);

  //dimenção e possição do ship
  ship.scale =0.10;

  //crie um limite à esquerda
  leftBoundary=createSprite(0,0,100,800);

  //defina visibilidade como falsa para o limite à esquerda
  leftBoundary.visible = false;

  //crie um limite à direita
  rightBoundary=createSprite(410,0,100,800);

  //defina visibilidade como falsa para o limite à direita
  rightBoundary.visible = false;


}

function draw() {
  background(180);

  //ship.x = World.mouseX;

  //edges= createEdgeSprites();
 // ship.collide(edges[3]);

  //ship.collide(leftBoundary);
  //ship.collide(rightBoundary);


 if(sea.x < 0){
   sea.x = sea.width/2;
}

  drawSprites();

}
