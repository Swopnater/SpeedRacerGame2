var canvas;
var backgroundImage;
var track, car1Img, car2Img;
var car1, car2, cars=[];
var bgImg;
var database;
var form, player;
var playerCount = 0;
var gameState = 0;
var allplayers=[];

function preload() {
  backgroundImage = loadImage("assets/background.png");
  track = loadImage("assets/track.jpg")
  car1Img = loadImage("assets/car1.png")
  car2Img = loadImage ("assets/car2.png")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);
  if (playerCount == 2){
    game.update(1);
  }
  if (gameState == 1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
