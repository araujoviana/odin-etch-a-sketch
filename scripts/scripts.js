console.log("Good day sir");

const squareGrid = document.querySelector(".square-grid");

for (let i = 0; i < 16; i++) {
    const divRow = document.createElement("div");
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.textContent = j;
        divRow.appendChild(div);
    }
    squareGrid.appendChild(divRow);
}
alert(squareGrid);