console.log("Good day sir");

const squareGrid = document.querySelector(".square-grid");
const resolutionButton = document.querySelector("#change-res");

const DEFAULT_GRID_SIZE = 16;
const DEFAULT_GRID_RESOLUTION = 400;

function getRandomColor() {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
}

function defineGridResolution(resolution = DEFAULT_GRID_SIZE, resetGrid = false) {

    if (resetGrid) {
        while (squareGrid.firstChild) {
            squareGrid.removeChild(squareGrid.firstChild);
        }
    }

   for (let i = 0; i < resolution; i++) {
        const divColumn = document.createElement("div");
        divColumn.className = "square-column";

        for (let j = 0; j < resolution; j++) {

            const div = document.createElement("div");
            div.className = "singular-square";

            let squareSize = DEFAULT_GRID_RESOLUTION / resolution;
            div.style.width = squareSize + "px";
            div.style.height = squareSize + "px";

            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = getRandomColor();
            })


            divColumn.appendChild(div);
        }
        squareGrid.appendChild(divColumn);
    }
}

defineGridResolution();

resolutionButton.addEventListener('click', () => {
    let userResolution = prompt("New resolution: ", DEFAULT_GRID_SIZE);
    if (userResolution > 0 && userResolution <= 100) {
        defineGridResolution(userResolution, true);
    }
})