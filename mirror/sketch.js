var img;
var mirror;

var m = 0;

function setup() {
  createCanvas(640, 480);
  // specify multiple formats for different browsers
  mirror = createCapture(VIDEO);
  mirror.size(320, 240);
  //fingers.hide();
  img = createImage(640, 480);
  img.loadPixels();

}

function draw() {
  background(255);
  mirror.loadPixels();
  // var stepSize = round(constrain(mouseX / 8, 6, 32));
 for (var i = 0; i < mirror.pixels.length; i += 4) {
// for (var i = 0; i < 4 * (mirror.width * mirror.height); i += 4) {
    // for (var x=0; x<mirror.width; x++) {
    // var i = (y * mirror.width + x);
    var r = mirror.pixels[i];
    var g = mirror.pixels[i + 1];
    var b = mirror.pixels[i + 2];
    var a = mirror.pixels[i + 3];

    img.pixels[i] = r;
    img.pixels[i + 1] = g;
    img.pixels[i + 2] = b;
    img.pixels[i + 3] = a;
  }
  img.updatePixels();
    
  push();
  translate(img.width, 0);
  scale(-1.0, 1.0);
  image(img, 0, 0);
  pop();

}


function keyTyped() {
  if (key == 'a') {
    m -= 5;
     console.log("decrease")
  }

  if (key == 'f') {
    m += 5;
    console.log("increase");
  }


}