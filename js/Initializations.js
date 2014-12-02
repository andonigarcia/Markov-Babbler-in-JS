// Andoni Garcia's Markov Babbler in JS. 2014

// =====================================================================
// ========================= Initializations ===========================
// =====================================================================

function init(file){
	insertFile(readSingleFile(file));
}

function start(pars, sents){
	var text = babble(pars, sents);
	document.getElementById("writeToMe").innerHTML = test;
}