var video;

// A variable for the color we are searching for.
var trackColor;

var scl = 6;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // devicePixelScaling(false);
    video = createCapture(VIDEO);
    video.size(640, 480);
    // The above function actually makes a separate video
    // element on the page.  The line below hides it since we are
    // drawing the video to the canvas
    // video.hide();
}

function draw() {

    background(0);
    // Draw the video
 //   push();
 //   translate(video.width, 0);
  //  scale(-1.0, 1.0);
   //  image(video, 0, 0);
   // pop();

    // We are going to look at the video's pixels
    video.loadPixels();


    for (var y = 0; y < video.height; y += scl) {
        for (var x = 0; x < video.width; x += scl) {

            var loc = (x + y * video.width) * 4;
            //var loc = (x + y * video.width) * 4;
            // The functions red(), green(), and blue() pull out the three color components from a pixel.
            var r = video.pixels[loc];
            var g = video.pixels[loc + 1];
            var b = video.pixels[loc + 2];
            var a1 = video.pixels[loc + 3];

            var bright = (r + g + b) / 3;
            var mp = map(bright, 0, 255, 0, scl);

            noStroke();
//            if (bright > 210) {
//                fill(255,0, 255);
//            } else {
//                fill(255);
//            }
            fill(255);
            stroke(255);
            ellipse(x, y, mp, mp);


        }
    }


}
