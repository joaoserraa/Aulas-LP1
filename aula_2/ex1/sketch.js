

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  
  colorMode (HSB, 360, 100, 100);
}

  

function draw() 
{
  frameRate (int(random(1, 60)) );
  print ( int(frameRate()) );
  // isto é só para mim
  background( random(0, 255), random(0, 255), random(0, 255) );

  fill (250);
  stroke (200, 50, 250);
  strokeWeight(8);
  noFill(); 
  rectMode (CENTER);
  rect (width/2, height/2, 250, 250);
  
  
  fill (0, 0 , 250);
  stroke (200, 50, 250);
  noFill ();
  ellipseMode (CORNER);
  ellipse (width/2, height/2, 250, 250);


  line ( width/2, 0, width/2, height);

  point (20, 20 ) ;
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
