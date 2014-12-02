// Andoni Garcia's Markov Babbler in JS. 2014

// =====================================================================
// ========================= Initializations ===========================
// =====================================================================

function init(file){
	insertFile(readFile(file));
}

function start(sent, par){
	var bab = babble(par, sent);
	var div = document.createElement("div");

	for(var i = 0; i < bab.length; i++){
		var text = bab[i];
		var para = document.createElement("p");
		var node = document.createTextNode(text);
		para.appendChild(node);
		div.appendChild(para);
	}
	var parent = document.getElementById("writeHere");
	var child = document.getElementById("child");
	parent.replaceChild(div, child);

}