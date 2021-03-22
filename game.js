
// The function to update your coin position
function updateCoin() {
}

window.addEventListener("keydown", function(event) {   switch(event.code) {
       case "KeyS":
       case "ArrowDown":
           //Movement logic down
           break;
       case "KeyW":
       case "ArrowUp":
           //Movement logic up
           break;
       case "KeyA":
       case "ArrowLeft":
           //Movement logic left
           break;
       case "KeyD":
       case "ArrowRight":
           //Movement logic right
           break;
   }
}, true);

window.addEventListener("keyup", function(event) {
   switch(event.code) {
       case "KeyS":
       case "ArrowDown":
       case "KeyW":
       case "ArrowUp":
           //Movement logic vertical stop
           break;
       case "KeyA":
       case "ArrowLeft":
       case "KeyD":
       case "ArrowRight":
           //Movement logic horizontal stop
           break;
   }
}, true);
