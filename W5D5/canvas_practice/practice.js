document.addEventListener("DOMContentLoaded", function(){
  const canvasel = document.getElementById("mycanvas");
  canvasel.width = 500;
  canvasel.height = 500;
  const ctx = canvasel.getContext("2d");
  // ctx.fillStyle = "purple";
  // ctx.fillRect(0,0,500,500);
  // ctx.beginPath();
  // ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
  //
  // ctx.strokeStyle = "yellow";
  // ctx.lineWidth = 5;
  // ctx.stroke();
  // ctx.fillStyle = "red";
  // ctx.fill();

  ctx.beginPath();
  ctx.moveTo(75,40);
  ctx.bezierCurveTo(75,37,70,25,50,25);
  ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
  ctx.bezierCurveTo(20,80,40,102,75,120);
  ctx.bezierCurveTo(110,102,130,80,130,62.5);
  ctx.bezierCurveTo(130,62.5,130,25,100,25);
  ctx.bezierCurveTo(85,25,75,37,75,40);
  ctx.fill();
});
