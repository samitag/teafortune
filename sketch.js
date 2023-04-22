/*JavaScript adapted from 3D Dot Art by Alice Choi*/
let img;

function setup() {
  createCanvas(400, 400);
  background(255, 255, 255);
  img = loadImage('circle.png');
  imageMode(CENTER);
  x = width / 2;
  y = height / 2;


  canvasX = width / 2;
  c = 0;
  steps = 0;

  input = select("#step-input");

  submitButton = select("#draw");
  submitButton.mousePressed(adjustSteps);
}

function draw() {
  noStroke();
  draw3d(steps);
  push();
  translate(width / 2, height / 2);
  image(img,0,0,width,height);
  pop();
}

function adjustSteps() {
  const name = input.value();
  let count1 = name.length;
  let multiplier = random(0, 50);
  steps = count1 * multiplier;
}

let tempwords = ["Very ominous...", "How exciting!", "Umm. Proceed carefully.", 
  "How... peculiar?"]


function draw3d(stepnum) {
  if (c > stepnum) {
    let tempindex = Math.floor(Math.random() * tempwords.length);
    results = createElement("div", tempwords[tempindex]);
    results.style("text-align", "center");
    results.style("font-size", "30px");
    results.style("padding-top", "3vh");
    results.style("padding-bottom", "1vh");
    results.style("margin-bottom", "5vh");
    results.style("margin-left", "auto");
    results.style("margin-right", "auto");
    results.style("display", "block");


    done = createButton(" &#160 Try again?");
    done.mousePressed(refreshPage);
    done.style("margin-bottom", "5vh");
    done.style("margin-left", "auto");
    done.style("margin-right", "auto");
    done.style("display", "block");
    results.style("font-size", "30px");
    noLoop();
  }
  
  if (c < stepnum) {
    x = x + random(-20, 20);
    y = y + random(-20, 20);

    drawPoint(x, y, 0, 0, 0, 0, 180);
    c = c + 1;
  } 

} 


function drawPoint(x, y, step, R, G, B, alpha) {
  fill(R, G, B, alpha);

  if (x <= 0) {
    x = x + 50;
  }
  if (x >= width) {
    x = x - 30;
  }
  if (y <= 0) {
    y = y + 50;
  }
  if (y >= height) {
    y = y - 36;
  }

  circle(x, y + (step + 2) * 1.72 -5, 10);
}

function refreshPage() {
  window.location.reload();
}