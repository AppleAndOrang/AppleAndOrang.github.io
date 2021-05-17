let x = 50.0;
let y = 50.0;

let onGround = false;

let score = 0;

let coinY = 0;
let coinX = 0;

let PlatX = 400;
let PlatY = 600;
let PlatW = 100;
let PlatH = 50;

let xvel = 0;
let yvel = 0;


function game() {
  canvas.coinInterval++;
  if (rightkey || leftkey) {
    if (rightkey) {
      xvel += 10;
    }
    if (leftkey) {
      xvel -= 10;
    }
  } else {
      xvel = 0;
  }
  
  x += xvel;
  xvel = 0
  if (y >= 700) {
        onGround = true;
    } else {
        onGround = false;
    }
    
    if (!onGround) {
        yvel += 10;
    } else {
        if (jumpkey) {
            onGround = false;
            yvel = -250;
        }
    }
    
   if (y > PlatY) {y-=10; yvel = 0}
   if (x > PlatX) {y -=10; yvel = 0}  
  
  {
    y += yvel;
    yvel = 0
   }

    if ((x + 100 > coinX && x < coinX + 20) && (y + 100 > coinY && y < coinY + 20)) {
        score++;
        canvas.coinInterval = 0;
        updateCoin();
    }

    if (canvas.coinInterval === 120) {
        canvas.coinInterval = 0;
        updateCoin();
    }

    if (x < 0.0) {
        x = 0.0;
    } else if (x > 700.0) {
        x = 700.0;
    }

    if (y < 0.0) {
        y = 0.0;
    } else if (y > 700.0) {
        y = 700.0;
    }

    let ctx = canvas.context;

    ctx.fillStyle = screenColour;
    ctx.fillRect(0, 0, 800, 800);

   ctx.fillStyle = platformColour;
   ctx.fillRect(PlatX, PlatY, PlatW, PlatH);
  
    ctx.fillStyle = playerColour;
    ctx.fillRect(x, y, 100, 100);

    ctx.fillStyle = coinColour;
    ctx.fillRect(coinX, coinY, 20, 20);

    ctx.font = "32px Arial";
    ctx.fillStyle = textColour;
    ctx.fillText("Score: " + score, 10, 30);
}

function updateCoin() {
    coinX = Math.floor((Math.random() * 780));
    coinY = Math.floor((Math.random() * 780));

    if ((x + 100 > coinX && x < coinX + 20) && (y + 100 > coinY && y < coinY + 20)) {
        updateCoin();
    }
} 
