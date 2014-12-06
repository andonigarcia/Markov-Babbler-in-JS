// Andoni Garcia's Markov Babbler in JS. 2014

// =====================================================================
// ===================== File Initialization ===========================
// =====================================================================

function initFile(s, t){
    var text = "";
    $.get(s, function(data){
        text = data;
        var arr = fileToParsableText(text);
        insertFile(arr, t);
    });
}

// =====================================================================
// ========================= Initializations ===========================
// =====================================================================

var TABLE_ARRAY = [];
var HUCKTABLE = new htable(157);
initFile("docs/HuckleberryFinn.txt", HUCKTABLE);
TABLE_ARRAY.push(HUCKTABLE);
var ROMEO = new htable(157);
initFile("docs/RomeoAndJuliet.txt", ROMEO);
TABLE_ARRAY.push(ROMEO);

// =====================================================================
// ========================= Start Function ============================
// =====================================================================

function start(sent, par, t){
	var bab = babble(par, sent, t);
        var parent = $("#writeHere");
        parent.empty();
	for(var i = 0; i < bab.length; i++){
            var text = bab[i];
            var para = $("<p></p>").append(text);
            parent.append(para);
	}
}