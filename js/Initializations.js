// Andoni Garcia's Markov Babbler in JS. 2014

// =====================================================================
// ========================= Initializations ===========================
// =====================================================================

function init(file){
	insertFile(readFile(file));
}

function start(){
	init("docs/HuckleberryFinn.txt");
	console.log("Initialization worked");
	var text = babble(1, 1);
	document.getElementById("writeToMe").innerHTML = test;
}