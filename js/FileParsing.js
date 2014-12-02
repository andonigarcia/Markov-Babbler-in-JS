// Andoni Garcia's Markov Babbler in JS. 2014

// =====================================================================
// ========================== File Parsing =============================
// =====================================================================

// Credit to Stack Overflow users Karanpreet Singh and NathanKatwijk:
// http://stackoverflow.com/users/1969433/karanpreet-singh
// http://stackoverflow.com/users/2567785/nathankatwijk
function readFile(file){
	var txt = "";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
			txt = xmlhttp.responseText;
		}
	};
	xmlhttp.open("GET", file, true);
	xmlhttp.send();

	return fileToParsableText(txt);
}

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