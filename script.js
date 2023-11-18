const container = document.querySelector(".container");
const restart = document.querySelector("button");
const console = document.querySelector(".console")

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
        grid.classList.add("trail")
    });
}