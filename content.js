let grid;
let w = 10;
let cols, rows;
let hueValue = 200;//Para el color de la arena


// setup() es ejecutado una vez, cuando el programa empieza
function setup() {
    createCanvas(400,400);
    colorMode(HSB,360,200,255);
    cols = width / w;
    rows = height / w;
    grid = CreateArray(cols, rows);
   
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = 0;
            
        }
        
    } 
}

// La función draw() es ejecutada después de setup()
function draw() {
    background(0);//La función background() define el color usado como fondo del lienzo de p5.js
    
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            noStroke()//Borde Blanco
            if (grid[i][j] >0) {
                fill( grid[i][j], 255, 255);
                let x = i * w;
                let y = j * w;
                square(x,y,w);
                
            }
            
            
        }
    }
    
    //Generar el siguiente gird para mover la arena
    let nextGrid = CreateArray(cols,rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j]; // state es la posicion del Arreglo       
            if (state > 0) {
                let below = grid[i][j + 1];

                let dir = random([-1,1]);
                let belowA
                let belowB
                if (i + dir >= 0 && i+ dir <= cols - 1) {
                    belowA = grid[i + dir][j + 1];         
                }
                if (i - dir >= 0 && i- dir <= cols - 1) {
                    belowB = grid[i - dir][j + 1];
                }   
                          
                if (below === 0 ) {
                    
                    nextGrid[i][j + 1] = grid[i][j]                 
                }
                else if(belowA === 0){
                    nextGrid[i + dir][j + 1]= grid[i][j];
                }
                else if(belowB === 0){                
                    nextGrid[i - dir][j + 1]= grid[i][j];
                }
                else{
                    nextGrid[i][j]= grid[i][j];
                }
            }
        }
    }
    grid = nextGrid;

   
}
function CreateArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
        //Crear otro arreglo para actualizar el movimiento
        for (let j = 0; j < arr.length; j++) {
            arr[i][j] = 0;
            
        }

    }
  
  return arr;
}
// p5.js mouseDragged() es llamada cada vez que el ratón se mueve y un botón del ratón está siendo presionado
function mouseDragged() {
    let col = floor(mouseX / w);
    let row = floor(mouseY / w);
    if (col >= 0 && col <= cols-1 && row >=0 && row <= rows-1) {
        grid[col][row]= hueValue;

    }
    hueValue += 1;
    if (hueValue > 360) {
        hueValue = 1;
    }
}

function mouseClicked() {
    let col = floor(mouseX / w);
    let row = floor(mouseY / w);
    if (col >= 0 && col <= cols-1 && row >=0 && row <= rows-1) {
        grid[col][row]= hueValue;

    }
    hueValue += 1;
    if (hueValue > 360) {
        hueValue = 1;
    }
}




