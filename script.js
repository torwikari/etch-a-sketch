const body = document.querySelector("body");
const container = document.querySelector("#container");

// Create cell function
function createCell(CellsPerRow) {
  container.innerHTML = "";
  let number = CellsPerRow * CellsPerRow;
  let width = CellsPerRow * 52;
  container.style.width = `${width}px`;
  for (let i = 0; i < number; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);
  }
}

// Call to create grid 16 x 16
createCell(16);

// Change the color of cell background on mouse-over event.
container.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("cell")) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let rgbValue = "#" + randomColor;
    event.target.style.background = rgbValue;
  }
});

// Create button
const button = document.createElement("button");
button.textContent = "NEW GRID";

button.addEventListener("click", function () {
  let newGridRows = prompt("Enter grid size: ");
  if (newGridRows < 101) {
    createCell(newGridRows);
  } else alert("Input a number of rows from 1 to 100");
});

body.insertBefore(button, container);
