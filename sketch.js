var batsman, bowler, wk, ball;
var ballGroup;
var score = 0;

function setup() {
  createCanvas(displayWidth - 30,displayHeight - 20);
  batsman = createSprite( displayWidth/2 - 25, displayHeight/2 - 200, 50, 50);
  bowler = createSprite(displayWidth/2 - 25, displayHeight/2 + 200, 50, 50);

  ballGroup = createGroup();
}

function draw() {
  background(0);

  if(ballGroup.contains(ball))
    ballGroup.bounceOff(batsman);
    
  if(ballGroup.isTouching(batsman)) {
    score++;
  }

  text("Score : "+ score, displayWidth/2, 20);
   

  //for(var i = 0;) 

  drawSprites();
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    batsman.x = batsman.x - 20;
  }

  if(keyCode === RIGHT_ARROW) {
    batsman.x = batsman.x + 20;
  }
  if(keyCode === UP_ARROW) {
    ball = createSprite(displayWidth/2 - 25, displayHeight/2 + 200, 10, 10);
    ball.velocityX = random(-2, 2);
    ball.velocityY = -10;
    ballGroup.add(ball);
    
  }
}