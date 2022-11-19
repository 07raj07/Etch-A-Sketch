const container = document.querySelector('#container');
const square = document.querySelectorAll(".cell");

const clear = document.querySelector(".clear");
const squares = document.getElementsByClassName("cell");

window.onload=createGrid(16);

function createGrid(cells){
    for(let i = 0;i<(cells*cells);i++){
        let cell = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
        
        container.appendChild(cell).className="cell";
        cell.addEventListener("mouseover",() => {
            cell.style.backgroundColor="black";
        })
        
    }
        
}

function resetButton() {
    const buttonDiv=document.querySelector("#buttondiv");
    const btn = document.querySelector(".btn");
    

    

    btn.addEventListener('click', () => {
        document.querySelectorAll(".cell").forEach(e => e.remove());
        let userInput = prompt("Please enter the number of grid squares per side. Max is 100: ");
        if (userInput > 100) {
            alert("ERROR! Grid size can not be over 100! Enter a number between 1-100 to view/use grid!");
            return;
        }

        
        createGrid(userInput)
    })



   
}
resetButton();





















