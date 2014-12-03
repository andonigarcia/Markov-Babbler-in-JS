// Andoni Garcia's Markov Babbler in JS. 2014

// =====================================================================
// ========================= Initializations ===========================
// =====================================================================
var TABLEARR = [];

function isInitialized(s){
	var t = [false, null];
	for(var i = 0; i < TABLEARR.length; i++){
		var x = TABLEARR[i];
		if(x[0] === "Huck"){
			t[0] = true;
			t[1] = x[1];
			return t;
		}
	}
	return t;
}

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