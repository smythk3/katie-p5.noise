var sound;

var brown;
var pink;
var white;
var env;


function setup() {
  
  masterVolume(0.5);
  createCanvas(80,100);
  sound = new p5.Noise();
  
  env = new p5.Env();
  env.setADSR(0.01, 0.01, 0.8, 0.2);
  env.setRange(1, 0);
  
  white = createButton("white");
  white.position(10,10);
  white.mousePressed(whiteNoise);
  
  brown = createButton("brown");
  brown.position(10,30);
  brown.mousePressed(brownNoise);
  
  pink = createButton("pink");
  pink.position(10,50);
  pink.mousePressed(pinkNoise);
  
}

function draw() {
  
}

function brownNoise() {
  sound.setType('brown');
  sound.start();
  sound.amp(env);
  env.play();
}

function whiteNoise() {
  sound.setType('white');
  sound.start();
  sound.amp(env);
  env.play();
}

function pinkNoise() {
  sound.setType('pink');
  sound.start();
  sound.amp(env);
  env.play();
}