// Linardos, Caitlin
// Lab 7 pt. 1

// Defining myColors with an array
let myColors = ["aliceblue", "blue",
  "cornflowerblue", "darkblue","aqua","darkslateblue", "azure","midnightblue","lightblue"]

// Defining variables
let xCoord;
let yCoord;
let xCoord2;
let yCoord2;

function setup() {
  createCanvas(400, 400);
  noLoop()
  // Initializing variables
  xCoord = 0
  yCoord =0
  recSize = 30
  xCoord2 = 370
  yCoord2 = 0
}

function draw() {
  background(220);
  noStroke()
  
  // This is for the column going to left to right
 for(let col1= 0; col1 < 15;col1++){
   push() 
   let randomColor = random(myColors)
 fill (randomColor)
 rect (xCoord,yCoord,recSize)
   xCoord = xCoord + 31
   yCoord = yCoord + 31
   pop()
   
// This is for the column going right to left
   for (let row2 = 0; row2 < 15; row2++) {
let randomColor = random(myColors)
fill (randomColor)
 rect (xCoord2,yCoord2,recSize)
   xCoord2 = xCoord2 -30.6
     yCoord2 = yCoord2 +31

   } 
  }
}
