//Andoni Garcia's Markov Babbler in JS. 2014

var MAX_WORD = 257;
var MAX_BUFF = 2500;  //25 chars/word * 100 words/sentence
var SENT = [];

// =====================================================================
// ====================== Hash Table Structs  ==========================
// =====================================================================

// My general "hash" function. Just assigns a number to the each word
// that is "somewhat" unique. THIS FUNCTION DOES NOT preserve properties
// like backtracking resistance or collision resistance.
function hashFn(word){
	var res = 17;
	for(var i = 0; i < word.length; i++){
		var tmp = word.charCodeAt(i) * 31;
		tmp *= 23;
		res += tmp;
	}
	return res;
}

function newList(word){
	this.word = word;
	this.count = 1;
	this.nextWord = null;
}

function newEntry(word){
	this.word = word;
	this.count = 1;
	this.nextWord = null;
}

function newBucket(entry){
	this.e = entry;
	this.nextBucket = null;
}

function newHtable(nBucks){
	var bucks = [null];
	for(var i = 0; i < nBucks; i++){
		bucks.push(null);
	}

	this.nBuckets = nBucks;
	this.buckets = bucks;
}

// =====================================================================
// ====================== Membership Testing ===========================
// =====================================================================

function bucketMem(s, b){
	var tmp = b;
	while(tmp != null){
		if(tmp.e.word === s)
			return true;
		tmp = tmp.nextBucket;
	}
	return false;
}

function listMem(s, l){
	var tmp = l;
	while(tmp != null){
		if(tmp.word === s)
			return true;
		tmp = tmp.nextWord
	}
	return false;
}

function htableMem(s, t){
	var nBucks = t.nBuckets;
	var hash = hashFn(s);
	hash %= nBucks;
	return bucketMem(s, t.buckets[hash]);
}

// =====================================================================
// ====================== Insertion Functions ==========================
// =====================================================================

function endOfSent(s){
	var lastChar = s.charAt(s.length - 1);
	if(lastChar === "." || lastChar === "?" || lastChar === "!")
		return true;
	return false;
}

// I Believe this has a bug at the fact that it returns in the forloop.
function isPrintable(s){
	for(var i = 0; i < s.length; i++){
		var c = s.charCodeAt(i);
		if((48 <= c && c <= 57) || (65 <= c && c <= 90) ||
			(97 <= c && c <= 122) || c === "-")
			return true;
	}
	return false;
}

function strCleanup(s){
	var newStr = "";
	for(var i = 0; i < s.length; i++){
		var c = s.charAt(i);
		if((48 <= c && c <= 57) || (65 <= c && c <= 90) ||
			(97 <= c && c <= 122) || c === "-")
			newStr += c;
	}
	return newStr;
}

function htableInsert(t, s, nextW){
	var a = t.nBuckets;
	var b = hashFn(s);
	var hash = b % a;	

	var curr = t.buckets[hash];
	// If the bucket already contains the current word
	if(bucketMem(s, curr)){
		// Finds the appropriate entry
		while(!(curr.e.word === s))
			curr = curr.nextBucket;
		var ent = curr.e;
		// Increments the entry's count
		ent.count++;

		// If the entry already contains the next word
		if(listMem(nextW, ent.nextWord)){
			var nextWd = ent.nextWord;
			// Finds the appropriate list
			while(!(nextWd.word === nextW))
				nextWd = nextWd.next;
			// Increments the list's count
			nextWd.count++;
			return t;
		// The entry does not contain the word
		} else {
			var newL = new newList(nextW);
			newL.next = ent.nextWord;
			ent.nextWord = newL;
			return t;
		}
	// The bucket does not contain the current word
	} else {
		var lnew = new newList(nextW);
		var enew = new newEntry(s);
		enew.nextWord = lnew;
		var bnew = new newBucket(enew);
		bnew.nextBucket = curr;
		t.buckets[hash] = bnew;
		return t;
	}
}

// Treating a file as a giant array of words
function insertFile(upload, table){
	var currentWord, nextWord;

	var ct = 0;
	// Grabs the first word of the array
	currentWord = upload[ct++];
	// Keeps grabbing until it gets a "printable" word
	while(!isPrintable(currentWord))
		currentWord = upload[ct++];
	// Grabs the next word
	while(nextWord = upload[ct++] && nextWord != null && nextWord != undefined){
		// Keeps grabbing until it gets a "printable" word
		while(!isPrintable(nextWord))
			nextWord = upload[ct++];
		// Checks if currentWord is the end of the sentence
		if(endOfSent(currentWord)){
			// If so, it inserts the next word as EOS and uses the next
			// word as a first word for the next iteration.
			var tmp = strCleanup(currentWord);
			table = htableInsert(table, tmp, "EOS");
			currentWord = NextWord;
			continue;
		// Else insert it normally
		} else {
			var tmp1 = strCleanup(currentWord);
			var tmp2 = strCleanup(nextWord);
			table = htableInsert(table, tmp1, tmp2);
			currentWord = NextWord;
		}
	}
	// Handling the end case
	var tmp3 = strCleanup(currentWord);
	table = htableInsert(table, tmp3, "EOS");
	return table;
}

// =====================================================================
// ====================== Babbling Functions ===========================
// =====================================================================

function nextWord(e){
	var randNum = Math.floor(Math.random() * e.count);
	var list = e.nextWord;
	while(list != null){
		randNum -= list.count;
		if(randNum <= 0)
			return list.word;
		list = list.nextWord;
	}
	exit(1);
}

function firstWord(t){
	var checks = Math.floor(Math.random() * 6);
	var randNum = Math.floor(Math.random() * t.nBuckets);
	var bucks = t.buckets[randNum];
	var firstWord;
	while(checks != 0){
		if(bucks == null){
			randNum = Math.floor(Math.random() * t.nBuckets);
			bucks = t.buckets[randNum];
			continue;
		}

		var tmp = bucks.e.word;
		var c = tmp.charCodeAt(0);
		if(65 <= c && c <= 90){
			checks--;
			firstWord = tmp;
			if(bucks.next == null){
				randNum = Math.floor(Math.random() * t.nBuckets);
				bucks = t.buckets[randNum];
				continue;
			} else {
				bucks = bucks.next;
				continue;
			}
			if(bucks.next == null){
				randNum = Math.floor(Math.random() * t.nBuckets);
				bucks = t.buckets[randNum];
				continue;
			} else {
				bucks = bucks.next;
				continue;
			}
		}
	}
	return firstWord;
}

function htableSearch(t, s){
	var a = t.nBuckets;
	var b = hashFn(s);
	var c = (b % a);
	var bucks = t.buckets[c];
	while(bucks.e.word !== s)
		bucks = bucks.next;
	return bucks.e;
}

function sentence(t){
	var sent = [""];

	var words = Math.floor(Math.random() * 25);
	while(words === 1)
		words = Math.floor(Math.random() * 25);
	//Creates the sentence
	var first = firstWord(t);
	var e = htableSearch(t, first);
	while(words !== 0){
		sent.push(e.word);
		if(words > 0)
			sent.push(" ");
		var nxt = nextWord(e);
		if(nxt === "EOS")
			break;
		e = htableSearch(t, nxt);
		words--;
	}
	sent.push(".");
	var finalSent = sent.join("");
	return finalSent;
}

function paragraph(t, len){
	var par = [""];
	par.push("\t");
	while(len !== 0){
		par.push(sentence(t));
		par.push(" ");
		len--;
	}
	return par.join("");
}

function babble(pars, sents){	
	console.log("In babble");
	var bab = [""];
	console.log("init the array");
	while(pars !== 0){
		console.log("paragraph!");
		--pars;
		var s = paragraph(TABLE, sents);
		console.log(s);
		bab.push(s);
	}
	document.getElementById("writeToMe").innerHTML = bab.join("");
}

var TABLE = new newHtable(23);

function huckleberryFinnText() {
	var s = "You don't know about me, without you have read a book by the name of The Adventures of Tom Sawyer, but that ain't no matter. That book was made by Mr. Mark Twain, and he told the truth, mainly. There was things which he stretched, but mainly he told the truth. That is nothing. I never seen anybody but lied, one time or another, without it was Aunt Polly, or the widow, or maybe Mary. Aunt Polly- Tom's Aunt Polly, she is- and Mary, and the Widow Douglas, is all told about in that book- which is mostly a true book; with some stretchers, as I said before. Now the way that the book winds up, is this: Tom and me found the money that the robbers hid in the cave, and it made us rich. We got six thousand dollars apiece- all gold. It was an awful sight ofmoney when it was piled up. Well, Judge Thatcher, he took it and put it out at interest, and it fetched us a dollar a day apiece, all the year round- more than a body could tell what to do with. The Widow Douglas, she took me for her son, and allowed she would sivilize me; but it was rough living in the house all the time, considering how dismal regular and decent the widow was in all her ways; and so when I couldn't stand it no longer, I lit out. I got into my old rags, and my sugar-hogshead again, and was free and satisfied. But Tom Sawyer, he hunted me up and said he was going to start a band of robbers and I might join if I would go back to the widow and be respectable.";
	var textArr = s.split(" ");
	return textArr;
}

function settingUp(text){
	TABLE = insertFile(text, TABLE);
}

function init(){
	settingUp(huckleberryFinnText());
	console.log("Everything's ready to go");
	babble(1, 1);
}