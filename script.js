const beginnerRodDiv = document.getElementById("beginnerRod");
const offsetRodDiv = document.getElementById("offsetRod");
const endRodDiv = document.getElementById("endRod");

let starterRod = 'beginnerRodDiv';

function clickRod(rod){
    let currentRod = rod;
    
}

beginnerRodDiv.addEventListener('click', function(){
    clickRod(beginnerRodDiv)   
     addRedPlate();
})

offsetRodDiv.addEventListener('click', function(){
    clickRod(offsetRodDiv)
    
})

endRodDiv.addEventListener('click', function(){
    clickRod(endRodDiv)
   
})

function smallerOnTop(){
    //lastElementChild.
}


function addRedPlate() {
    // let newPlate = document.createElement('div')
    // console.log('addredplatefunction = running')
    //     newPlate.className = 'redPlate';
    //     starterRod.appendChild(addRedPlate)
    }

function movePlates() {

}

