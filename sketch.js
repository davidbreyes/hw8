// var sounds = []

let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;
let img19;
let img20;
let img21;
let img22;
let img23;
let img24;
let img25;
let img26;
let img27;
let img28;

let snd;
let snd1;
let snd2;
let snd3;
let snd4;
let snd5;
let snd6;
let snd7;
let snd8;
let snd9;
let snd10;
let snd11;
let snd12;
let snd13;

var phoneclosedog;
var phoneclosed;
var pcanimation;

var eyesblink;

function preload() {
  // soundFormats('mp3');
  // for (var i = 0; i < 10; i++) {
  //   let sound = loadSound(i + '.mp3');
  //   sounds.push(sound);
  // }

  //starts at 0
  snd = loadSound('cfpd0b.mp3');
  snd1 = loadSound('cfpd1b.mp3');
  snd2 = loadSound('cfpd2b.mp3');
  snd3 = loadSound('cfpd3b.mp3');
  snd4 = loadSound('cfpd4b.mp3');
  snd5 = loadSound('cfpd5b.mp3');
  snd6 = loadSound('cfpd6b.mp3');
  snd7 = loadSound('cfpd7b.mp3');
  snd8 = loadSound('cfpd8b.mp3');
  snd9 = loadSound('cfpd9b.mp3');
  snd10 = loadSound('cfpdb.mp3');
  snd11 = loadSound('cfpdnumb.mp3');
  snd12 = loadSound('cfpfbb1.mp3');
  snd13 = loadSound('cfpfbb2.mp3');

  //first 10 keys are numbers, starts at 0
  img = loadImage('hbptec18.png');
  img2 = loadImage('hbptec8.png');
  img3 = loadImage('hbptec9.png');
  img4 = loadImage('hbptec10.png');
  img5 = loadImage('hbptec11.png');
  img6 = loadImage('hbptec12.png');
  img7 = loadImage('hbptec13.png');
  img8 = loadImage('hbptec14.jpg');
  img9 = loadImage('hbptec15.png');
  img10 = loadImage('hbptec16.png');
  //circle keys
  img11 = loadImage('hbptec24.png');
  img12 = loadImage('hbptec25.png');
  img13 = loadImage('hbptec26.png');
  img14 = loadImage('hbptec27.png');
  img15 = loadImage('hbptec28.png');
  //misc keys
  img16 = loadImage('hbptec5.png');
  img17 = loadImage('hbptec6.png');
  img18 = loadImage('hbptec7.png');
  img19 = loadImage('hbptec17.png');
  img20 = loadImage('hbptec19.png');
  img21 = loadImage('hbptec20.png');
  img22 = loadImage('hbptec21.png');
  //phone body
  img23 = loadImage('hbptec29.png');
  img24 = loadImage('hbptec30.png');
  img25 = loadImage('hbptec.png');
  //eyes blink
  img26 = loadImage('hbptec2.png');
  img27 = loadImage('hbptec3.png');
  img28 = loadImage('hbptec4.png');

  //phoneclosed = loadImage('hbptec29.png', 'hbptec30.png', 0, 0, 0);
  //pcanimation = loadImage(phoneclosed);

  //eyesblink.addAnimation('hbptec.png', 'hbptec2.png', 'hbptec3.png', 'hbptec4.png');
}

function setup() {
  createCanvas(1280, 1920);
  //textSize(100);
}

function draw() {
  background(1280, 1920);
  fill(255);
  //closed phone first
  //imageMode(CENTER);
  image(img23, 0, 0);
    if (mouseIsPressed) {
    image(img).push();
    }

  //clear();
  //animation(pcanimation, 0, 0);
}

function keyPressed() {
  if (key == '0') {
    snd.play();
    //text('0', random(width), random(height));
    image(img, 0, 0);

  }
  if (key == '1') {
    //sounds[1].play();
    //text('1', random(width), random(height));
    snd1.play();
    image(img2,0,0);
  }
  if (key == '2') {
    //sounds[2].play();
    //text('2', random(width), random(height));
    snd2.play();
    image(img3, 0,0);
  }
  if (key == '3') {
    //sounds[3].play();
    //text('3', random(width), random(height));
    snd3.play();
    image(img4, 0,0);
  }
  if (key == '4') {
    //sounds[4].play();
    //text('4', random(width), random(height));
    snd4.play();
    image(img5, 0,0);
  }
  if (key == '5') {
    //sounds[5].play();
    //text('5', random(width), random(height));
    snd5.play();
    image(img6, 0,0);
  }
  if (key == '6') {
    //sounds[6].play();
    //text('6', random(width), random(height));
    snd6.play();
    image(img7, 0,0);
  }
  if (key == '7') {
    //sounds[7].play();
    //text('7', random(width), random(height));
    snd7.play();
    image(img8, 0,0);
  }
  if (key == '8') {
    //sounds[8].play();
    //text('8', random(width), random(height));
    snd8.play();
    image(img9, 0,0);
  }
  if (key == '9') {
    //sounds[9].play();
    //text('9', random(width), random(height));
    snd9.play();
    image(img10, 0,0);
  }
  if (key == 'w') {
    snd12.play();
    image(img15,0,0);
  }
  if (key == 'a') {
    snd13.play();
    image(img14,0,0);
  }
  if (key == 's') {
    snd12.play();
    image(img11,0,0);
  }
  if (key == 'e') {
    snd13.play();
    image(img13,0,0);
  }
  if (key == 'd') {
    snd12.play();
    image(img12, 0,0);
  }
  if (key == '-') {
    snd13.play();
    image(img19,0,0);
  }
  if (key == '=') {
    snd12.play();
    image(img20,0,0);
  }
  if (key == 'z') {
    snd13.play();
    image(img16,0,0);
  }
  if (key == 'v') {
    snd12.play();
    image(img17,0,0);
  }
  if (key == 'm') {
    snd13.play();
    image(img18,0,0);
  }
  if (key == '[') {
    snd12.play();
    image(img21,0,0)
  }
  if (key == ']') {
    snd13.play();
    image(img22,0,0);
  }
//
}
