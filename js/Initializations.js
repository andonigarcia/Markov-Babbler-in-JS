// Andoni Garcia's Markov Babbler in JS. 2014

// =====================================================================
// ========================= Initializations ===========================
// =====================================================================

function init(file){
	insertFile(readFile(file));
}

function start(){
	var text = babble(1, 1);
	document.getElementById("writeToMe").innerHTML = text;
}