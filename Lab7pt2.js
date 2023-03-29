// Linardos, Caitlin
// Lab 7 pt.2

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill ("lightblue")
  let offset =50
  let interval = 25
  for (let numRows = 0; numRows < 8; numRows++){
    for(let numCols = 0; numCols < 8; numCols++){
      ellipse(offset*numRows + interval, offset * numCols + interval, 50)
    }
  }
}
