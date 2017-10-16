var frase;
function setup() 
{
  createCanvas (windowWidth, windowHeight);

  frase = "Hello Mothafocas";
}


function draw() 
{
  //background (0);
  fill (random (255),random (255), random (255),);
  textStyle (ITALIC);
  textAlign (CENTER, CENTER);
  textFont("Modak");
  textSize (150);
 // textLeading (200);
  text(frase, random(width), random(height));
  
 
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
