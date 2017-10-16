var x, y, t, vX, vY;
// t = tamanho

function setup() 
{
  createCanvas (windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  t = 100;
  vX = 20;
  vY = vX;
}


function draw() 
{
  background (0, 50);

if (x+t/2>width || x-t/2<0)
{
  vX = vX*-1;
  fill (random(255), random(255), random(255));
}

if (y+t/2>height || y-t/2<0)
{
  vY = vY*-1;
  fill (random(255), random(255), random(255));
}

  x = x + vX;
  y = y + vY;
  noStroke ();
  ellipse (x, y, t, t);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
