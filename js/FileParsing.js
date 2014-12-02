// Andoni Garcia's Markov Babbler in JS. 2014

// =====================================================================
// ========================== File Parsing =============================
// =====================================================================

// Credit to Stack Overflow user Paolo Moretti:
// http://stackoverflow.com/users/63011/paolo-moretti
function readSingleFile(e){
	var output;

	var file = e.target.files[0];
	if(!file){
		return;
	}
	var reader = new FileReader();
	reader.onload = function(e){
		var contents = e.target.result;
		output = fileToParsableText(contents);
	};
	reader.readAsText(file);

	return output;
}

function fileToParsableText(contents){
	var textArr = contents.split(" ");
	return textArr;
}