console.log("Good day sir");

const squareGrid = document.querySelector(".square-grid");

for (let i = 0; i < 16; i++) {
    const divColumn = document.createElement("div");
    divColumn.className = "square-column";
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.className = "singular-square";
        div.addEventListener('mouseover', () => {
            div.style.cssText = 'background-color:black;';
        })
        divColumn.appendChild(div);
    }
    squareGrid.appendChild(divColumn);
}
