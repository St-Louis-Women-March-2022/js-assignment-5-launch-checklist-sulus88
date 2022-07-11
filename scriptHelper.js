// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
 if(testInput === ""){
    return "Empty";
 } else if(isNaN(testInput)){
    return "Not a Number";
 } else if(!isNaN(testInput)){
    return "Is a Number";
 }
}
   
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   event.preventDefault;
if(validateInput(pilot)==="Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel)==="Empty" 
|| validateInput(cargoLevel)==="Empty"){
   alert("All fields are required!");
} else if(validateInput(pilot)==="Is a Number" || validateInput(copilot)==="Is a Number" || validateInput(pilot)==="Not a Number" 
|| validateInput(pilot)==="Not a Number"){
   alert("Invalid information!"); 
} else if(fuelLevel<10000){
      faultyItems.style.visibility = "visible"; 
      fuelStatus.innerHTML = "Insuffient fuel";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
} else if(cargoLevel > 10000){
      faultyItems.style.visibility = "visible";
      cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
} else {
      launchStatus.innerHTML =  "Shuttle is ready for launch";
      launchStatus.style.color = "green";   
      pilotStatus.innerHTML = `
                    Pilot ${pilotName.value} Ready`
      copilotStatus.innerHTML = `
                    Co-pilot ${coPilotName.value} Ready`
}  
 
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
