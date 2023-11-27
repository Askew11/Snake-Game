
let snake;
let rez = 20;
let food;
let w;
let h;
let score = 0;

function setup() {
  createCanvas(400, 400);
  RestartGame();
}

function draw() {
  background(51);
  scale(rez);
  if(snake.eat(food)){
    score++;
    updateDisplay();
    foodLocation();
  }
  snake.update();
  snake.show();

  if(snake.death()){
    background(255,0,0);
    noLoop();
  }

  fill(255,0,0);
  noStroke();
  rect(food.x,food.y,1,1);
}

function updateDisplay(){
  document.getElementById("SCORE").innerHTML = score;
}

function foodLocation(){
  let x = floor(random(w));
  let y = floor(random(h));

  while(snake.foodAtCurrentLocation(x,y)){
    x = floor(random(w));
    y = floor(random(h));
  }
  
  food = createVector(x,y);
}

function keyPressed() {
  if(keyCode === DOWN_ARROW){
    if(snake.returnYSpeed() == -1){

    }
    else{
      snake.dir(0,1);
    }
  }
  if(keyCode === UP_ARROW){
    if(snake.returnYSpeed() == 1){

    }
    else{
      snake.dir(0,-1);
    }
  }
  if(keyCode === RIGHT_ARROW){
    if(snake.returnXSpeed() == -1){
    }
    else{
      snake.dir(1,0);
    }
  }
  if(keyCode === LEFT_ARROW){
    if(snake.returnXSpeed() == 1){
    }
    else{
      snake.dir(-1,0);
    }
  }
}

function RestartGame(){
  score = 0;
  w = floor(width/rez);
  h = floor(height/rez);
  snake = new Snake();
  updateDisplay();
  foodLocation();
  frameRate(10);
  loop();
}

function changeBlue(){

}

function changeGreen(){
  
}

function changeRed(){
  
}