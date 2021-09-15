var canvas, backgroundImage;

var charco, chatarra, comida1, comida2, comida3, comida4,jefe,mesero1,mesero2,mesero3,mesero4,trastes,niño;

var sonidop;

var sonidof;

function preload(){
  backgroundImage=loadImage("Restaurante90.png");
  chatarra= loadImage("Comida chatarra 90.png")
  comida1= loadImage("Comida92.png")
  comida2= loadImage ("Comida910.png")
  comida3=loadImage("Comida930.png")
  comida4=loadImage("Comida940.png")
  jefe=loadImage("Jefe950.png")
  mesero1=loadImage("Mesero93.png")
  mesero2=loadImage("Mesero94.png")
  mesero3=loadImage("Mesero95.png")
  mesero4=loadImage("Mesero96.png")
  niño=loadImage("Niño 950.png")
  charco=loadImage("Charco90.png")
  trastes=loadImage("Trastes90.jpg")

  sonidop=loadSound("Sonido de plato.mp3")
  sonidof=loadSound("Sonido final del juego.mp3")


  }




function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("pink");  
  drawSprites();
}