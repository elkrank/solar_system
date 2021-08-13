var sun = new Image();
var mercure=new Image();
var venus=new Image;
var moon = new Image();

var earth = new Image();
var mars = new Image();
var jupiter = new Image();
var saturne = new Image();
var uranus = new Image();
var neptune= new Image();
function init(){
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,800,800); // effacer le canvas
  
  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(500,500);
  
  // Terre
  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.translate(155,0);
  ctx.fillRect(0,-12,50,24); // Ombre
  ctx.drawImage(earth,-12,-12);

  // Lune
  ctx.save();
  ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
  ctx.translate(0,12.5);
  ctx.drawImage(moon,-1.5,-1.5);
  ctx.restore();
  ctx.restore();
  //mercure
  time = new Date();
  ctx.save();
  ctx.translate(500,500);
  ctx.rotate( ((2*Math.PI)/14)*time.getSeconds() + ((2*Math.PI)/14000)*time.getMilliseconds() );
  ctx.translate(37,0);
  ctx.drawImage(earth,-12,-12);
  ctx.restore();
  ctx.restore();
  //venus//
  time = new Date();
  ctx.save();
  ctx.translate(500,500);
  ctx.rotate( ((2*Math.PI)/36)*time.getSeconds() + ((2*Math.PI)/36000)*time.getMilliseconds() );
  ctx.translate(93,0);
  ctx.drawImage(earth,-12,-12);
  ctx.restore();
  ctx.restore();
//mars////
time = new Date();
ctx.save();
ctx.translate(500,500);
ctx.rotate( ((2*Math.PI)/108)*time.getSeconds() + ((2*Math.PI)/108000)*time.getMilliseconds() );
ctx.translate(179,0);
ctx.drawImage(earth,-12,-12);
ctx.restore();
ctx.restore();
///jupiter///

ctx.save();
ctx.translate(500,500);
ctx.rotate( ((2*Math.PI)/720)*time.getSeconds() + ((2*Math.PI)/720000)*time.getMilliseconds() );
ctx.translate(250,0);
ctx.drawImage(earth,-12,-12);

ctx.restore();
//saturn//

ctx.save();
ctx.translate(500,500);
ctx.rotate( ((2*Math.PI)/1740)*time.getSeconds() + ((2*Math.PI)/1740000)*time.getMilliseconds() );
ctx.translate(280,0);
ctx.drawImage(earth,-12,-12);
ctx.restore();
////uranus//

ctx.save();
ctx.translate(500,500);
ctx.rotate( ((2*Math.PI)/5040)*time.getSeconds() + ((2*Math.PI)/5040000)*time.getMilliseconds() );
ctx.translate(350,0);
ctx.drawImage(earth,-12,-12);

ctx.restore();
///neptune///*

ctx.save();
ctx.translate(500,500);
ctx.rotate( ((2*Math.PI)/9900)*time.getSeconds() + ((2*Math.PI)/9900000)*time.getMilliseconds() );
ctx.translate(470,0);
ctx.drawImage(earth,-12,-12);
ctx.restore();
ctx.restore();
ctx.save();
///////////// dessin des orbite/////////////////
  ctx.beginPath();
  ctx.arc(500,500,37.7,0,Math.PI*2,false); // Orbite mercure
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(500,500,93,0,Math.PI*2,false); // Orbite venus
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(500,500,155,0,Math.PI*2,false); // Orbite terrestre
  ctx.stroke();
  //mars
  ctx.beginPath();
  ctx.arc(500,500,179,0,Math.PI*2,false); // Orbite mars
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(500,500,250,0,Math.PI*2,false); // Orbite jupiter
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(500,500,280,0,Math.PI*2,false); // Orbite saturne
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(500,500,350,0,Math.PI*2,false); // Orbite uranus
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(500,500,470,0,Math.PI*2,false); // Orbite uranus
  ctx.stroke();

  ctx.drawImage(sun,0,0,1000,1000);
  //console.log(window.requestAnimationFrame(draw));
  window.requestAnimationFrame(draw);
}

init();
// todo trouver une echelle
// redessisner les orbite
//trouver les images
