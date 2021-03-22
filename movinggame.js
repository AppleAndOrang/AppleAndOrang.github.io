
let jumpkey = false;
let rightkey = false;
let leftkey = false;
window.addEventListener("keydown", function(event) {   switch(event.code) {
       case "KeyW":
       case "ArrowUp":
           //Movement logic up
           jumpkey = true;
           break;
       case "KeyA":
       case "ArrowLeft":
           //Movement logic left
           leftkey = true;
           break;
       case "KeyD":
       case "ArrowRight":
           //Movement logic right
           rightkey = true;
           break;
   }
}, true);

window.addEventListener("keyup", function(event) {
   switch(event.code) {
       case "KeyW":
       case "ArrowUp":
           //Movement logic vertical stop
           jumpkey = false;
           break;
       case "KeyA":
       case "ArrowLeft":
           leftkey = false;
           break;
       case "KeyD":
       case "ArrowRight":
           //Movement logic horizontal stop
           rightkey = false;
           break;
   }
}, true);
