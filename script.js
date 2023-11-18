const container = document.querySelector(".container");
const restart = document.querySelector("button");
const gamePad = document.querySelector(".console");
const rainbow = document.querySelector(".rainbow");
const black = document.querySelector(".black");
const eraser = document.querySelector(".eraser");

// Create the initial grid
create(16)

// Determine the size of the grid
restart.addEventListener("click", ()=> {
    let size = prompt("How big it shoud be?");
    size = parseInt(size)

    size = !isNaN(size) ? Math.max(1, Math.min(size, 100)) : 16;

    
    restartSize(size)
})

// create the grind
function create (size){
    for (let i = 0; i < size * size; i++) {
    const grid = document.createElement("div");
    grid.className = "grid";
    container.appendChild(grid);
    
    gridVariable(size, grid); 
    
}};

//Erase the previous grid
function restartSize (size){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }

    create(size)
}

//give the size to each cell
function gridVariable (size, grid){
    grid.style.width = `calc(${(500 / size) - 1.6}px)`;
    grid.style.height = `calc(${(500 / size) - 1.6}px)`;
    
    trail(grid);
}

//Change the background color
function trail(grid){
    grid.addEventListener('mouseover',()=> {
        grid.style.backgroundColor = `black`;
    });

    rainbow.addEventListener("click", ()=> {
        rainbowGrid(grid)
    })

    black.addEventListener("click", ()=> {
        trail(grid);
    });

    eraser.addEventListener ("click", ()=> {
        cleanGrid(grid)
    })
}

// Delete the color of the grid one by one 
function cleanGrid (grid) {
    grid.addEventListener('mouseover',()=> {
        grid.style.backgroundColor = `white`;
    });
}

// Gives random color to Divs 
function rainbowGrid (grid){
    grid.addEventListener('mouseover',()=> {
        grid.style.backgroundColor = `rgb(${randomColor(255)},${randomColor(255)}, ${randomColor(255)})`;
    });
}

// Random color 
function randomColor(number){
    let value = number;
    return value = Math.floor(Math.random() * value);
};