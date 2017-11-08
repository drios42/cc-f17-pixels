var output;
var video;
var outputScale = 8;
var targetr;
var targetg;
var targetb;
var targeta;

var pixelValue;

var threshold = 5;


function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    output = createImage(640, 480);
    video.loadPixels();
    output.loadPixels();
}

function draw() {
    background(0);
    video.loadPixels();

    for (var y = 0; y < video.height; y++) {
        for (var x = 0; x < video.width; x++) {

            var loc = (x + y * video.width) * 4;
            var r = video.pixels[loc];
            var g = video.pixels[loc + 1];
            var b = video.pixels[loc + 2];
            var a = video.pixels[loc + 3];

            output.pixels[loc] = r;
            output.pixels[loc + 1] = g;
            output.pixels[loc + 2] = b;
            output.pixels[loc + 3] = a;

            var tr = abs(r - targetr);
            var tg = abs(g -targetg);
            var tb = abs(b - targetb);
            var ta = abs(a - targeta);
            
            if(tr < threshold && tg< threshold && tb < threshold && ta<threshold){
                fill(255);
                ellipse(x,y, 20,20);
            }
        }
        
    }
    output.updatePixels();
    image(output, 0, 0);
}

function mousePressed() {
    pixelValue = video.get(mouseX, mouseY);
    targetr = pixelValue[0];
    targetg = pixelValue[1];
    targetb = pixelValue[2];
    targeta = pixelValue[3];
    
    console.log(pixelValue);
}








