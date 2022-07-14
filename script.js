// Write your JavaScript code here!

const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event){
    
   
   let pilotName = document.querySelector("input[name=pilotName]");
   let pilot = pilotName.value;
   let copilotName = document.querySelector("input[name=copilotName]");
   let copilot = copilotName.value;
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let fuelLevelValue = fuelLevel.value;
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let cargoMassValue = cargoMass.value;
   let faultyItems = document.getElementById("faultyItems");
  formSubmission(document, faultyItems, pilot, copilot, fuelLevelValue, cargoMassValue);
  event.preventDefault()
});
   
    
   /*let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse=myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   let selectedPlanet = pickPlanet(json);
   let destInfo= addDestinationInfo(document,selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, 
    selectedPlanet.moons, selectedPlanet.imageUrl);
    console.log(destInfo);
    
      })*/
    })
