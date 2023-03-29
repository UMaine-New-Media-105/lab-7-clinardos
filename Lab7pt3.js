// Linardos, Caitlin
// Lab 7 pt.3

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 
  let offset =80
  let interval = 40
  for (let numRows = 0; numRows < 5; numRows++){
    for(let numCols = 0; numCols < 5; numCols++){
       fill ("lightblue")
      ellipse(offset*numRows + interval, offset * numCols + interval, 80)
     if (mouseIsPressed){
       
     }
    }
  }
}
