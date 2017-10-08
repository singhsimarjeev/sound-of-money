var song;
var amp;
var button;

var volhistory = [];

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('this-dot-kp.mp3');
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.9, 64);
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  // volhistory.push(vol);
  // stroke(255);
  noStroke()
  // noFill();

  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    // var r = map(volhistory[i], 0, 1, 10, 100);
    var angle = map(i, 0, spectrum.length, 0, 360)
    var amp = spectrum[i]
    var r = map(amp, 0 , 256, 20, 100)
    var x = r * cos(angle);
    var y = r * sin(angle);
    stroke(i, 255, 255)
    line(0,0,2*x,2*y)
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
  //ellipse(100, 100, 200, vol * 200);
}
