// Andoni Garcia's Markov Babbler in JS. 2014

// =====================================================================
// ========================= Initializations ===========================
// =====================================================================

function init(file){
	insertFile(readFile(file));
}

function start(pars, sents){
	init("docs/HuckleberryFinn.txt");
	console.log("Initialization worked");
	var text = babble(pars, sents);
	document.getElementById("writeToMe").innerHTML = test;
}