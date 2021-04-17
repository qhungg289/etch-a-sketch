const container = document.getElementById('container');
const gridItem = document.getElementsByClassName('grid-item');

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}

makeRows(8, 8);

function changeState(elem){
    elem.classList.add('hover');
}

for (let item of gridItem){
    item.addEventListener("mouseover", function() {
        changeState(item);
    })
    item.addEventListener("mouseout", event => {
        console.log('Mouse out');
    })
}