//create array of iDs from 1 to numOfCells//___________________________________________________________________________________________
let id = 1;
let cellIds = []
let numOfRows = 50;
let numOfRowsCurr = numOfRows + 2;
let numOfCells = numOfRows**2
let numOfCellsCurr = numOfRowsCurr**2
let deadState = "green"
let aliveState = "yellow"
console.log(id);
// export {id};


export function buildTable(){
    for(let i = 0; i < numOfRows;i++){
    
   let tbody = document.getElementById("tbody")//to be refactored
    tbody.innerHTML += "<tr>" + "<td></td>".repeat(numOfRows) + "</tr>"
}
}


export function assignIdDynamically(){
    let tbody = document.getElementById("tbody")
let tempid = 1;
for(let i = 0; i < numOfRows;i++){
    for(let j = 0; j < numOfRows;j++){
        let cell = tbody.children[i].children[j]
cell.style.backgroundColor = deadState
cell.setAttribute("id", tempid)//Assign ID dynamically from 1 to numOfCells

//create click even for each cell______________________________________________________________________________
const btn = document.getElementById(tempid);

    btn.addEventListener('click', function onClick(event) {
      //  Change cell color switching between two colors
      if(cell.style.backgroundColor == aliveState){
        cell.style.backgroundColor = deadState
      }else if(cell.style.backgroundColor == deadState){
        cell.style.backgroundColor = aliveState
      }
    });
//________________________________________________________
tempid++;
}
}}

export function randomButton()
{const random = document.getElementById("random_btn");

random.addEventListener('click', function onClick(event) {
let cellCurrStates = []
let cellNextStates = []
for(let i = 1; i <= numOfCells;i++){
    let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
    cellNextStates[trackCurrState] = (Math.floor(Math.random() * (3 - 0) + 0))
}
//using Next state to change collor(applying state)
for(let i = 1; i <= numOfCells;i++){
    let temp = document.getElementById(i)
    let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
    if(cellNextStates[trackCurrState] == 1){
        temp.style.backgroundColor = aliveState
    }else{
        temp.style.backgroundColor = deadState
    }
}
});
}



export {aliveState,deadState,id,cellIds,numOfRows,numOfRowsCurr,numOfCells,numOfCellsCurr};