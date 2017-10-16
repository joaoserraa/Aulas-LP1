

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  colorMode (HSB, 360, 100, 100, 100);

  background(360, 0, 0);
}


function draw() 
{
  noStroke();
  
  if (mouseX>0 && mouseX<width/2 &&
    mouseY>0 && mouseY<height/2)
    
{
  fill(360, 0, 0, 5);
}
else{
  noFill();
}
  rect(0, 0, width/2, height/2);
  
  
  
 background(255);

// primeiro quadrado 
if (mouseX>0 && mouseX<width/2 &&
    mouseY>0 && mouseY<height/2)
      
{
  fill(0);
}
else{
  noFill();
}
  rect(0, 0, width/2, height/2);

  
// segundo quadrado
if (mouseX>width/2 && mouseX<width &&
    mouseY>0 && mouseY<height/2)
  
{
  fill(0);
}
else{
  noFill();
}
  rect(width/2, 0, width/2, height/2);

 
// terceiro quadrado
if (mouseX>0 && mouseX<width/2 &&
  mouseY>height/2 && mouseY<height)
    
{
fill(0);
}
else{
noFill();
}
rect(0, height/2, width/2, height);


// quarto quadrado
if (mouseX>width/2 && mouseX<width &&
  mouseY>height/2 && mouseY<height)
{
  fill(0);
}
else{
  noFill();
}
rect(width/2, height/2, width, height);
}



function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
