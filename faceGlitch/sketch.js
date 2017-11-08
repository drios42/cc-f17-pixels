// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2
var capture;
var tracker
var w = 640,
  h = 480;
var scl = 6;
var sx, sy, ex, ey;

function setup() {
  capture = createCapture(VIDEO);
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();

  colorMode(RGB);

  tracker = new clm.tracker();
  tracker.init(pModel);
  tracker.start(capture.elt);

}

function draw() {
  sx = width;
  sy = height;
  ex = 0;
  ey = 0;
  image(capture, 0, 0, w, h);
  var positions = tracker.getCurrentPosition();

  noFill();
  //stroke(255);
  // beginShape();
  // // for (var i = 0; i < positions.length; i++) {
  // //   //  vertex(positions[i][0], positions[i][1]);
  // // }
  // endShape();

  //show points
  // noStroke();
  // for (var i = 0; i < positions.length; i++) {
  //   // fill(map(i, 0, positions.length, 0, 360), 50, 100);
  //   // ellipse(positions[i][0], positions[i][1], 4, 4);
  //   // text(i, positions[i][0], positions[i][1]);
  // }

  if (positions.length > 0) {
    //hsb color right now....
    //  fill(255, 255, 255);
    beginShape();
    for (var i = 0; i < 21; i++) {
      //hsb color right now....

      stroke(0, 255, 255);
      vertex(positions[i][0], positions[i][1]);
      var x = positions[i][0];
      var y = positions[i][1];

      if (x <= sx) {
        sx = x;
      }
      if (y <= sy) {
        sy = y;
      }

      if (x >= ex) {
        ex = x;
      }
      if (y >= ey) {
        ey = y;
      }

    }
    endShape();
    ellipse(sx, sy, 20, 20);
    stroke(102, 255, 255);
    ellipse(ex, ey, 20, 20);
    
    var xrange = floor(dist(sx, sy, ex, sy));
    var yrange = floor(dist(sx, sy, sx, ey));

    var crange = floor(dist(sx, sy, ex, ey));

    var center = createVector(sx + (xrange / 2), sy + (yrange / 2));

    var outline = createVector(center.x + (xrange / 2), center.y + (yrange / 2));

  


    // console.log("x range: "+xrange+" y range: "+yrange );
    // rect(sx, sy, 20, 20);
    for (var i = 0; i < xrange; i += scl) {
      for (var j = 0; j < yrange; j += scl) {
    //    var check = createVector(i + sx, j + sy);
        noStroke();
       // if (center.dist(check) < center.dist(outline)) {

          // stroke(random(255),255,255);

          fill(random(255), random(255), random(255));
          //  grid glitch
          rect(i + sx, j + sy, scl, scl);

        //}
      }
    }
  }
  //oval glitch
  // ellipse(center.x,center.y, crange-(crange-xrange),crange+(crange-yrange));
}
