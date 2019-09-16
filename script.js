const beginnerRodDiv = document.getElementById("beginnerRod");
const offsetRodDiv = document.getElementById("offsetRod");
const endRodDiv = document.getElementById("endRod");
const redPlateDiv = document.getElementById("redPlate");
const greenPlateDiv = document.getElementById("greenPlate");
const purplePlateDiv = document.getElementById("purplePlate");
const bluePlateDiv = document.getElementById("bluePlate");


let currentRod = 'beginnerRodDiv';
let currentPlate = 'bluePlateDiv';

beginnerRodDiv.addEventListener('click', function(){
    clickRod(beginnerRodDiv)   
     //movePlates();
})

offsetRodDiv.addEventListener('click', function(){
    clickRod(offsetRodDiv)
    
})

endRodDiv.addEventListener('click', function(){
    clickRod(endRodDiv)
   
})

            function clickRod(rod){
                currentRod = rod;
            }

redPlateDiv.addEventListener('click', function(){
    clickPlate(redPlateDiv);
    console.log('REDPLATE')
})

greenPlateDiv.addEventListener('click', function(){
    clickPlate(greenPlateDiv);
    console.log('GreenPLATE')
})

purplePlateDiv.addEventListener('click', function(){
    clickPlate(purplePlateDiv);
    console.log('purplePLATE')
})

bluePlateDiv.addEventListener('click', function(){
    clickPlate(bluePlateDiv);
    console.log('bluePLATE')
})


            function clickPlate(plate){
                currentPlate = plate;
            }


    

function movePlates() {
    //click on plate to move and the click the rod to move the plate too. 
}

function smallOnTop(){
    //only the smaller plates can be on top.
}

function winCondition(){
    //all four plates are stacked correctly on final rod
}