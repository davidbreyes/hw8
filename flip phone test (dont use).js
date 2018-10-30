var sounds = []

function preload() {
  soundFormats('mp3');
  for (var i = 0; i < 10; i++) {
    let sound = loadSound(i + '.mp3');
    sounds.push(sound);

function setup() {
  createCanvas(400, 400);
  textSize(100);
}

function draw() {
  background(0, 20);
  noFill(255);

function keyPressed() {
if (key == '0') {
    sounds[0].play();
    text('0', random(width), random(height));
}
if (key == '1') {
    sounds[1].play();
    text('1', random(width), random(height));
  }
  if (key == '2') {
    sounds[2].play();
    text('2', random(width), random(height));
  }
  if (key == '3') {
    sounds[3].play();
    text('3', random(width), random(height));
  }
  if (key == '4') {
    sounds[4].play();
    text('4', random(width), random(height));
  }
  if (key == '5') {
    sounds[5].play();
    text('5', random(width), random(height));
  }
  if (key == '6') {
    sounds[6].play();
    text('6', random(width), random(height));
  }
  if (key == '7') {
    sounds[7].play();
    text('7', random(width), random(height));
  }
  if (key == '8') {
    sounds[8].play();
    text('8', random(width), random(height));
  }
  if (key == '9') {
    sounds[9].play();
    text('9', random(width), random(height));
  }
}
