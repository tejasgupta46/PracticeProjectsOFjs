
const canvas = document.querySelector(".draw");
const ctx = canvas.getContext("2d");

let drawing = false;
ctx.lineWidth = 15;
ctx.lineCap = "round";


 let hue = 0;

canvas.addEventListener("mousedown", () => {
    drawing = true;
  ctx.beginPath()

});

canvas.addEventListener("mouseup", (event) => {
    
    drawing = false; 
});

// canvas.addEventListener("mouseout", () => {
    // drawing = false;
// });


canvas.addEventListener("mousemove", (event) => {
    // 
    if (!drawing) return;
    
    ctx.strokeStyle = `hsl(${hue} , 100% , 50%)`
    
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.beginPath();
    
    ctx.moveTo(event.offsetX, event.offsetY);
    

   hue++;
});



