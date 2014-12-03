// Andoni Garcia's Markov Babbler in JS. 2014

// =====================================================================
// ========================= Initializations ===========================
// =====================================================================

function start(sent, par){
	var bab = babble(par, sent);

	var parent = document.getElementById("writeHere");
	while(parent.firstChild){
		parent.removeChild(parent.firstChild);
	}

	for(var i = 0; i < bab.length; i++){
		var text = bab[i];
		var para = document.createElement("p");
		var node = document.createTextNode(text);
		para.appendChild(node);
		parent.appendChild(para);
	}
}