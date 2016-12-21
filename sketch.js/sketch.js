var s;
var scl = 20;
var img;
var png;
var food;
var contar = 1;
//var frameRate = fps;
var playHud;
var scoreboard;
var win;
var ja1;
var ja2;
var ja3;

function preload() {
  loadImage("assets/foto.jpg");
  loadImage("assets/ted.png");
  loadGif("assets/win.gif");
  loadImage("assets/20JA.png");
  loadImage("assets/50JA.png");
  loadImage("assets/100JA.png");
}


function setup() {
  createCanvas(500, 500);
  s = new Snake();
  ganasteCuliao();
  scoreboard = document.getElementById("scoreboard");
  frameRate(20);
  pickLocation();
  img = loadImage("assets/foto.jpg");
  png = loadImage("assets/ted.png");
  win = loadGif("assets/win.gif");
  ja1 = loadImage("assets/20JA.png");
  ja2 = loadImage("assets/50JA.png");
  ja3 = loadImage("assets/100JA.png");
  //mabel = loadImage("");
  textFont("Georgia");
  textSize(24);
  createP("Selecciona dificultad:");
  createP("F para fácil, M para medio, H para hardcore");
  createP("Scipio chupa el pico");
  createP("NO APRETAR LA TECLA C");
  //contar = print(frameRate);



}
function ganasteCuliao() {
  fill(255);
  noStroke();
  if (s.total === 20) {
    print("20 Jaleas! DALE WEON");
  } else if (s.total === 50) {
    print("50 Jaleas, CSM!");
  } else if (s.total === 100) {
    print("100 Jaleas? Te chupo el pico.");
  }
}



function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {
  drawScoreboard();
  ganasteCuliao();
  background(51);
  //drawScoreboard();
  if (keyCode == 67) {
    background(0 + random(0, 255), 0 + random(0, 255), 0 + random(0, 255));
    }
  if (keyCode == 67) {
    image(png, random(0, 400), random(0,400), 200, 300)
  }
  if (s.total === 20) {
    image(ja1, 0, -20, random(250, 270), random(125, 135))
  } else if (s.total === 50) {
    image(ja2, 0, -20, random(250, 275), random(125, 135))
  } else if (s.total === 100) {
    image(ja3, 0, -20, random(250, 275), random(125, 135))
  }

  fill(255);
  stroke(0);
  text("Dificultad: " + frameRate().toFixed(0), 10, height - 10);

  //drawScore();




  //printIn(s.total);
  //createP(s.total);

  //contar = createP(s.total);






  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(255, 0, 100);
  image(img, food.x, food.y, scl, scl);

  //if( == 5, 10, 15, 20) {
    //image(png, food.x, food.y, scl, scl);
  //}

    //image(mabel, food.x, food.y, scl, scl);


  //image(mabel, food.x, food,y, scl / random(0, 250), scl / random(0, 250))



//this.update = function() {
  //createP(s.total);
 //}
}

function drawScoreboard() {

  scoreboard.innerHTML = "Score = " + s.total;
}


//function drawScore() {
  //scoreboard.html = s.total;
//}



function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if(keyCode === 87) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode ===83) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === 68) {
    s.dir(1,0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  } else if (keyCode === 65) {
    s.dir(-1,0);
  } else if (keyCode === 77) {
    frameRate(30);
  } else if (keyCode === 70) {
    frameRate(15);
  } else if (keyCode === 72) {
    frameRate(50);
  } else if (keyCode === 67) {
    background(0 + random(0, 255), 0 + random(0, 255), 0 + random(0, 255));
  } else if (keyCode === 67) {
    frameRate(60);
  } else if (keyCode === 67) {
    image(png, 100, 100, 100, 200)
  }
 }
