const container = document.getElementById("grid-container");
const gridItem = document.getElementsByClassName("grid-item");
const clearButton = document.getElementById("clear-button");
const sizeButton = document.getElementById("grid-size");

window.addEventListener("load", setDefaultGrid);
clearButton.addEventListener("click", function() {
    for (let item of gridItem) {
        item.style.backgroundColor = null;
    }
});
sizeButton.addEventListener("click", changeSize);

function setDefaultGrid() {
    setGridSize(8);
    makeGrid(8);
}

function setGridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
}

function makeGrid(size) {
	for (i = 0; i < size * size; i++) {
		let cell = document.createElement("div");
        cell.addEventListener("mouseover", function(){changeBgColor(cell)});
		container.appendChild(cell).className = "grid-item";
	}
}

function changeSize() {
    let nSize = prompt("Enter new grid size!");
    if (nSize != null) {
        nSize = +(nSize);
        if (nSize < 1 || nSize > 64 || Number.isNaN(nSize)) {
            alert("Enter a valid number from 1 - 64!");
            changeSize();
        } else {
            removeGridElement();
            setGridSize(nSize);
            makeGrid(nSize);
        }
    }
}

function changeBgColor(elem) {
    elem.style.backgroundColor = "aquamarine";
}

function removeGridElement() {
    const gridArr = Array.from(container.childNodes);
    gridArr.forEach((elem) => {
        container.removeChild(elem);
    })
}
