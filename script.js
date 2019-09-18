//assigning elements on page to variables so we can work with them 
var beginnerRodDiv = document.getElementById("beginnerRod");
var offsetRodDiv = document.getElementById("offsetRod");
var endRodDiv = document.getElementById("endRod");
var redPlateDiv = document.getElementById("redPlate");
var greenPlateDiv = document.getElementById("greenPlate");
var purplePlateDiv = document.getElementById("purplePlate");
var bluePlateDiv = document.getElementById("bluePlate");




//will use these as parameters for movePlates function?     
let currentPlate = null;
let targetRod = null;

function clickPlate(plate){
  currentPlate = plate;
} 


//disk click handlers
redPlateDiv.addEventListener('click', function(event){
    redPlateDiv = event.target;
    clickPlate(redPlateDiv);
    let redPlateParent = redPlateDiv.parentElement;
    if (redPlateDiv === redPlateParent.lastElementChild) { //if there is at least one plate on the rod, continue
      currentPlate = redPlateDiv;//assign top plate of endRodDiv to currentPlate
    } 
    event.stopPropagation();//this prevents the click handlr from bubbling up the dom. Great infor found here: shorturl.at/cgsY4
    console.log("plate works")
})

greenPlateDiv.addEventListener('click', function(event){
    greenPlateDiv = event.target;
    clickPlate(greenPlateDiv);
    let greenPlateParent = greenPlateDiv.parentElement;
    if (greenPlateDiv === greenPlateParent.lastElementChild) { //if there is at least one plate on the rod, continue
      currentPlate = greenPlateDiv;//assign top plate of endRodDiv to currentPlate
    } 
    event.stopPropagation();
})

purplePlateDiv.addEventListener('click', function(event){
    purplePlateDiv = event.target;
    clickPlate(purplePlateDiv);
    let purplePlateParent = purplePlateDiv.parentElement;
    if (purplePlateDiv === purplePlateParent.lastElementChild) { //if there is at least one plate on the rod, continue
      currentPlate = purplePlateDiv;//assign top plate of endRodDiv to currentPlate
    } 
    event.stopPropagation();
})

bluePlateDiv.addEventListener('click', function(event){
    bluePlateDiv = event.target;
    clickPlate(bluePlateDiv)
    let bluePlateParent = bluePlateDiv.parentElement;
    if (bluePlateDiv === bluePlateParent.lastElementChild) { //if there is at least one plate on the rod, continue
      currentPlate = bluePlateDiv;//assign top plate of endRodDiv to currentPlate
    } 
    event.stopPropagation();
})

function clickRod(rod){
  targetRod = rod;
}


//Rod Click Handlers
beginnerRodDiv.addEventListener('click', function(){
    beginnerRodDiv = event.target;
    clickRod(beginnerRodDiv);
    let currentPlateParent = document.getElementById("beginnerRod").parentElement;
    if (beginnerRodDiv !== currentPlateParent) { //if beginnerRodDiv isn't parent element of the currentPlate, then continue
      targetRod = beginnerRodDiv;//assign beginnerRodDiv to targetRod
    } 
    console.log("h")//check to see if functional (for developer purposes)
})

offsetRodDiv.addEventListener('click', function(){
    offsetRodDiv = event.target;
    clickRod(offsetRodDiv);
    let currentPlateParent = document.getElementById("offsetRod").parentElement;
    if (offsetRodDiv !== currentPlateParent) { //if offsetRodDiv isn't parent element of the currentPlate, then continue
      targetRod = offsetRodDiv;////assign offsetRodDiv to targetRod
    } 
    
})

endRodDiv.addEventListener('click', function(){
    endRodDiv = event.target;
    clickRod(endRodDiv);
    let currentPlateParent = document.getElementById("endRod").parentElement;
    if (endRodDiv !== currentPlateParent) { //if endRodDiv isn't parent element of the currentPlate, then continue
      targetRod = endRodDiv//assign endRodDiv to targetRod
    } 
    console.log("rod works");
})

function selectionMade() {
  if (currentPlate !== null && targetRod !== null) {
    movePlate();
  } else if (winCondition()) {
    return;
    alert
  }
    
  //console.log(9);
}

function movePlate() {
  if (smallOnTop()) {
    targetRod.appendChild(currentPlate); 
  } else { 
    alert("Illegal Move!");
  }
  winCondition();
    //click on plate to move and the click the rod to move the plate too. 
}


function smallOnTop(){
    //only the smaller plates can be on top.
  let targetRodChild = targetRod.lastElementChild;
  if (!targetRod.lastElementChild) {
    return true;
    console.log("g");
  } else if(targetRodChild.offsetWidth > currentPlate.offsetWidth) {//if the width of the last plate on the rod is bigger than the one that the user is attemtping to place, then continue
    return true;
    console.log("t");
  } else {
    return false
    //alert("Illegal move!");
  } console.log("Illegal Move!");
}

function winCondition(){
  if (beginnerRodDiv.childElementCount === 0 && (offsetRodDiv.childElementCount === 0 || endRodDiv.childElementCount === 0)) {
    alert("WINNER, WINNER, CHICKEN DINNER!!!")
  } else {
    return
  }
    //all four plates are stacked correctly on either the offset rod or end rod



}