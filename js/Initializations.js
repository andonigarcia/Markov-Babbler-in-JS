// Andoni Garcia's Markov Babbler in JS. 2014

// =====================================================================
// ========================= Initializations ===========================
// =====================================================================

function init(file){
	insertFile(readFile(file));
}

function start(sent, par){
	var bab = babble(sent, par);
	for(var i = 0; i < bab.length; i++){
		var text = bab[i];
		var para = document.createElement("p");
		var node = document.createTextNode(text);
		para.appendChild(node);
		document.getElementById("writeToMe").appendChild(para);
	}
}