// Andoni Garcia's Markov Babbler in JS. 2014

// =====================================================================
// ========================= Initializations ===========================
// =====================================================================

function init(file){
	insertFile(readFile(file));
}

function start(sent, par){
	var text = babble(sent, par);
	document.getElementById("writeToMe").innerHTML = text;
}