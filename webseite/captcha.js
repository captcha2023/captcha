const cursorTag = document.querySelector("div.cursors")
const ball = cursorTag.querySelector("div")

let currentX = 0
let currentY = 0
let aimX = 0
let aimY = 0
let speed = 0.1

const animate = function () {
  currentX += (aimX - currentX) * speed
  currentY += (aimY - currentY) * speed

  ball.style.left = currentX + "px"
  ball.style.top = currentY + "px"

  requestAnimationFrame(animate)
} 

animate()

document.addEventListener("mousemove", function (event) {
  aimX = event.pageX
  aimY = event.pageY
})


// const cursorTag = document.querySelector("div.cursors")
// const balls = cursorTag.querySelectorAll("div")

// let aimX = 0
// let aimY = 0

// balls.forEach((ball, index) => {
  
//   let currentX = 0
//   let currentY = 0

//   let speed = 0.2 - index * 0.011

//   const animate = function () {
//     currentX += (aimX - currentX) * speed
//     currentY += (aimY - currentY) * speed
  
//     ball.style.left = currentX + "px"
//     ball.style.top = currentY + "px"
  
//     requestAnimationFrame(animate)
//   } 

//   animate()
// })


// document.addEventListener("mousemove", function (event) {
//   aimX = event.pageX
//   aimY = event.pageY
// })


const xyz = document.querySelector('.xyz');
const linklanding = document.querySelector('.link-landing');

xyz.addEventListener('mouseover', function() {
    linklanding.style.color = 'var(--c-akzent)';
    linklanding.style.borderColor = 'var(--c-akzent)';
});

xyz.addEventListener('mouseout', function() {
    linklanding.style.color = '';
    linklanding.style.borderColor = '';
});

const canvas = document.getElementById("responsive");
const ctx = canvas.getContext("2d");
ctx.fillStyle = '#ffffff';
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.shadowBlur    = 5;
ctx.shadowColor   = 'rgba(204, 204, 204, 0.5)';
ctx.fillRect(5,5,60,150);
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");

// let circles = [];

// function draw() {
//   // Canvas löschen
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
  
//   // Neuen Kreis hinzufügen
//   let x = Math.random() * canvas.width;
//   let y = Math.random() * canvas.height;
//   let r = Math.random() * 50 + 10;
//   let color = "white";
  
//   circles.push({x: x, y: y, r: r, color: color});
  
//   // Alle Kreise zeichnen
//   for (let i = 0; i < circles.length; i++) {
//     ctx.beginPath();
//     ctx.arc(circles[i].x, circles[i].y, circles[i].r, 0, 2 * Math.PI);
//     ctx.fillStyle = circles[i].color;
//     ctx.fill();
//     ctx.closePath();
//   }
  
//   // Wartezeit definieren (hier 100 Millisekunden)
//   setTimeout(draw, 100);
// }

// // Starte die Schleife
// draw();