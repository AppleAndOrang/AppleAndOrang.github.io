let canvas = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 800;
    this.canvas.height = 800;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    
    this.coinInterval = 0;
    this.game = setInterval(game, 20); // This runs the game function evert 20ms (50fps)
  },
  stop : function() {
    clearInterval(this.game);
  }
}
// Variables go here:

//Some colours if you'd like:
const playerColour = "rgb(118, 150, 86)";
const screenColour = "rgb(0, 0, 0)";
const coinColour = "rgb(221, 175, 12)";
const textColour = "rgba(255,255,255,0.5)";

// The main game function:
function game() {
  canvas.coinInterval++;
  
  let ctx = canvas.context;
}

// The function to update your coin position
function updateCoin() {
}
