// Javascript for eco tips generator


//array of ideas
var activities = ["avoid eating beef today (producing beef takes lots of CO2)","start a community beach/park cleanup", "try a DIY project that turns something old into something new", "put out seeds to feed birds", "plant flowers for bees to visit", "unplug your device so electricity isn't wasted", "turn the lights off that you aren't using", "bring a reusable waterbottle","take out the recycling","take the bike instead of the car", "take the bus instead of the car", "carpool with someone instead of driving alone", "plant a tree or any plant", "join an ecofriendly organization", "take a shower instead of a bath", "buy organic food"];  

// Event listener
loadEventListeners();

function loadEventListeners() {
  addEventListener('submit', generate);
}


//document.getElementById("generator").onclick = function() {generate()};

function generate(){

	var display = Math.floor((Math.random()*(activities.length)));
    
    document.getElementById("generator").innerHTML = activities[display];
    
    
    // Adds a paragraph element to the page when button's clicked
    
    var para = document.createElement("p");
    var node = document.createTextNode(activities[randomInt]);
    para.appendChild(node);

    var element = document.getElementById("tip-container");
    element.appendChild(para)

    console.log()
// 
 
  
}
