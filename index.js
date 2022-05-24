


import {randomButton,buildTable,assignIdDynamically,aliveState,deadState,cellIds,numOfRows,numOfRowsCurr,numOfCells,numOfCellsCurr} from "./model.js";

//create array of iDs from 1 to numOfCells//________________________________________________________________________________________
var whileTrack = 0

//Dynamicaly create numOfRows by numOfRows table

buildTable()

assignIdDynamically()

//Create Actions for start button______________________________________________________________________________
const start = document.getElementById("start_btn");

start.addEventListener('click', function onClick(event) {
        whileTrack = 0
    
        function automateClick(){setTimeout(function(){
            let cellCurrStates = []
            let cellNextStates = []

    // instantiate tracking arrays to track current and next states
    function createZeroArray(numOfCellsCurr,n){ 
        for(let i = 0; i < numOfCellsCurr; i++){
         cellCurrStates.push(n)
         cellNextStates.push(n)
        }
        }
        createZeroArray(numOfCellsCurr,0)

        for(let i = 1; i <= numOfCells;i++){
        
            let temp = document.getElementById(i)
            let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
            if(temp.style.backgroundColor == deadState){
                cellCurrStates[trackCurrState] = 0
            }else{
                cellCurrStates[trackCurrState] = 1
            }
        }
    //_________________________________________tracking current states

    //setting next states from current states following rules//_________________________________________

    for(let i = 1; i <= numOfCells;i++){
        let temp = document.getElementById(i)
        //still to account for cell at the edges
        //originally off state____________________________________________________________________________________________

        let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
        let surrCellState = (
            cellCurrStates[(trackCurrState) - (numOfRowsCurr + 1) ] + cellCurrStates[(trackCurrState) - numOfRowsCurr] + cellCurrStates[(trackCurrState)-(numOfRowsCurr - 1)] + cellCurrStates[(trackCurrState)-1] + 
            cellCurrStates[(trackCurrState)+1] + cellCurrStates[(trackCurrState)+(numOfRowsCurr - 1)] + cellCurrStates[(trackCurrState)+numOfRowsCurr] + cellCurrStates[(trackCurrState)+(numOfRowsCurr + 1)]
        )

        if(cellCurrStates[trackCurrState] == 0 && surrCellState == 3){
            cellNextStates[trackCurrState] = 1
        }
        //Any live cell with fewer than two live neighbours dies (referred to as underpopulation).//________________________________
        else if(cellCurrStates[trackCurrState] == 1 && surrCellState < 2){
            cellNextStates[trackCurrState] = 0
        }
        //Any live cell with more than three live neighbours dies (referred to as overpopulation).//________________________________
        else if(cellCurrStates[trackCurrState] == 1 && surrCellState > 3){
            cellNextStates[trackCurrState] = 0
        }
        //Any live cell with two or three live neighbours lives, unchanged, to the next generation.//______________________________
        //refactor the suming
        else if(cellCurrStates[trackCurrState] == 1 && surrCellState == 3){
            cellNextStates[trackCurrState] = 1
        }else if(cellCurrStates[trackCurrState] == 1 && surrCellState == 2){
            cellNextStates[trackCurrState] = 1
        }
        //__________________________________________________________________________________________________________________________
        else(
            cellNextStates[trackCurrState] = 0
        )
        //___________________________________________________________________________________________________________________
    }

    //using Next state to change color(applying state)
    for(let i = 1; i <= numOfCells;i++){
        let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
        let temp = document.getElementById(i)
        if(cellNextStates[trackCurrState] == 1){
            temp.style.backgroundColor = aliveState
        }else{
            temp.style.backgroundColor = deadState
        }
    }

        if(whileTrack == 1){
            return 0
        }
        automateClick()
        }, 100)}
        automateClick()
});



//random Action//________________________________________________

randomButton()

//reset Actions//________________________________________________
function resetButton(){
    const reset = document.getElementById("reset_btn");

    reset.addEventListener('click', function onClick(event) {
    let cellCurrStates = []
    let cellNextStates = []
    for(let i = 1; i <= numOfCells;i++){
        let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
        cellNextStates[trackCurrState] = 0
    }

    //using Next state to change collor(applying state)
    for(let i = 1; i <= numOfCells;i++){
        let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
        let temp = document.getElementById(i)
        if(cellNextStates[trackCurrState] == 1){
            temp.style.backgroundColor = aliveState
        }else{
            temp.style.backgroundColor = deadState
        }
    }
        whileTrack = 1
    });
}

resetButton()

function stopButton(){
    const stopB = document.getElementById("stop_btn");

stopB.addEventListener('click', function onClick(event) {
    whileTrack = 1
});
}

stopButton()

//END