// Write your helper functions here!
require('isomorphic-fetch');

/*function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   
         let missionTarget = document.getElementById("missionTarget");
         
              
              missionTarget.innerHTML = `
              <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
              `

      
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
   
}*/

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
   
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let launchStatus = document.getElementById("launchStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   
   pilotStatus.innerHTML = `Pilot ${pilot} Ready`
   copilotStatus.innerHTML = `Co-pilot ${coPilot} Ready`

if(validateInput(pilot)==="Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel)==="Empty" 
|| validateInput(cargoLevel)==="Empty"){
   alert("All fields are required!");

} else if(validateInput(pilot)==="Is a Number" || validateInput(copilot)==="Is a Number" || validateInput(fuelLevel)==="Not a Number" 
|| validateInput(cargoLevel)==="Not a Number"){
   alert("Invalid information!"); 

} else if(fuelLevel<10000 && cargoLevel>10000){
   list.style.visibility = "visible"; 
   fuelStatus.innerHTML = "Fuel level too low for launch";
   cargoStatus.innerHTML = "Cargo mass too heavy for launch";
   launchStatus.innerHTML = "Shuttle not ready for launch";
   launchStatus.style.color = "red";

} else if(fuelLevel<10000){
      list.style.visibility = "visible"; 
      fuelStatus.innerHTML = "Fuel level too low for launch";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
      launchStatus.style.color = "red";

} else if(cargoLevel > 10000){
      list.style.visibility = "visible";
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      fuelStatus.innerHTML = "Fuel level high enough for launch";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";

} else {
      list.style.visibility = "visible";
      launchStatus.innerHTML =  "Shuttle is ready for launch";
      launchStatus.style.color = "green";   
      fuelStatus.innerHTML = "Fuel level high enough for launch";
      cargoSttaus.innerHTML = "Cargo mass low enough for launch";
}  
 
}


/*async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    response.json()

    });

    return planetsReturned;
}

function pickPlanet(planets) {
   function randomSelection(arr){
      let index = Math.floor(Math.random()*arr.length);
      return arr[index];
   }
   let indexPlanets = randomSelection(planets);
   return indexPlanets;
}*/

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
