
function CreateArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
  
  return arr;
}


let grid;
let w = 10;
let cols, rows;

// setup() es ejecutado una vez, cuando el programa empieza
function setup() {
    createCanvas(400,400);
    cols = width / w;
    rows = height / w;
    grid = CreateArray(cols, rows);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = 0;
            
        }
        
    }
    grid[10][5] = 1
    
}


// La función draw() es ejecutada después de setup()
function draw() {
    background(0);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            stroke(255);
            fill( grid[i][j]*255);
            let x = i * w;
            let y = j * w;
            square(x,y,w);
            
        }
    }

   
}




