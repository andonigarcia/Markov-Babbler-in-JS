//Andoni Garcia's Markov Babbler in JS. 2014

var TABLE = new htable(51);

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

function list(word){
	this.word = word;
	this.count = 1;
	this.nextWord = undefined;
}

function entry(word){
	this.word = word;
	this.count = 1;
	this.nextWord = undefined;
}

function bucket(entry){
	this.e = entry;
	this.nextBucket = undefined;
}

function htable(nBucks){
	var bucks = [];
	for(var i = 0; i < nBucks; i++){
		bucks.push(undefined);
	}

	this.nBuckets = nBucks;
	this.buckets = bucks;
}

// =====================================================================
// ====================== Membership Testing ===========================
// =====================================================================

function bucketMem(s, b){
	var tmp = b;
	while(tmp != undefined && tmp != null){
		if(tmp.e.word === s)
			return true;
		tmp = tmp.nextBucket;
	}
	return false;
}

function listMem(s, l){
	var tmp = l;
	while(tmp != undefined && tmp != null){
		if(tmp.word === s)
			return true;
		tmp = tmp.nextWord
	}
	return false;
}

function htableMem(s){
	var nBucks = TABLE.nBuckets;
	var hash = hashFn(s);
	var whichBucket = hash % nBucks;
	return bucketMem(s, TABLE.buckets[whichBucket]);
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

// Checks that at least 1 character in the String is printable
function isPrintable(s){
	for(var i = 0; i < s.length; i++){
		var c = s.charCodeAt(i);
		if((48 <= c && c <= 57) || (65 <= c && c <= 90) ||
			(97 <= c && c <= 122) || c === 45 || c === 39)
			return true;
	}
	return false;
}

function strCleanup(s, bool){
	var newStr = "";
	for(var i = 0; i < s.length; i++){
		var c = s.charCodeAt(i);
		var d = s.charAt(i);
		if(bool && i === (s.length - 1)){
			if(d === "." || d === "?" || d === "!"){
				newStr += d;
				continue;
			}
		}
		if((47 < c && c < 58) || (64 < c && c < 91) || (96 < c && c < 123) || c === 45 || c === 39)
			newStr += d;
	}
	return newStr;
}

function htableInsert(s, nextW){
	var a = TABLE.nBuckets;
	var b = hashFn(s);
	var hash = b % a;	

	var curr = TABLE.buckets[hash];
	// If the bucket already contains the current word
	if(bucketMem(s, curr)){
		// Finds the appropriate entry
		while(curr.e.word !== s)
			curr = curr.nextBucket;
		var ent = curr.e;
		// Increments the entry's count
		ent.count++;

		// If the entry already contains the next word
		if(listMem(nextW, ent.nextWord)){
			var nextWd = ent.nextWord;
			// Finds the appropriate list
			while(nextWd.word !== nextW)
				nextWd = nextWd.nextWord;
			// Increments the list's count
			nextWd.count++;
			return;
		// The entry does not contain the word
		} else {
			var newL = new list(nextW);
			newL.nextWord = ent.nextWord;
			ent.nextWord = newL;
			return;
		}
	// The bucket does not contain the current word
	} else {
		var lnew = new list(nextW);
		var enew = new entry(s);
		enew.nextWord = lnew;
		var bnew = new bucket(enew);
		bnew.nextBucket = curr;
		TABLE.buckets[hash] = bnew;
		return;
	}
}

// Treats a "file" as a giant array of words
function insertFile(upload){
	var currentWord, nextWord;

	var ct = 0;
	var maxlen = upload.length;
	// Grabs the first word of the array
	currentWord = upload[ct++];
	// Keeps grabbing until it gets a "printable" word
	while(!isPrintable(currentWord) && ct < maxlen)
		currentWord = upload[ct++];
	// Grabs the next word
	while(nextWord = upload[ct++] && ct < maxlen){
		// Keeps grabbing until it gets a "printable" word
		while(!isPrintable(nextWord) && ct < maxlen)
			nextWord = upload[ct++];
		// Checks if currentWord is the end of the sentence
		if(endOfSent(currentWord)){
			// If so, it inserts the next word as EOS and uses the next
			// word as a first word for the next iteration.
			var tmp = strCleanup(currentWord, true);
			htableInsert(tmp, "EOS");
			currentWord = nextWord;
			continue;
		// Else insert it normally
		} else {
			var tmp1 = strCleanup(currentWord, false);
			var tmp2 = strCleanup(nextWord, false);
			htableInsert(tmp1, tmp2);
			currentWord = nextWord;
		}
	}
	// Handling the end case
	var tmp3 = strCleanup(currentWord, true);
	htableInsert(tmp3, "EOS");
	return;
}

// =====================================================================
// ====================== Babbling Functions ===========================
// =====================================================================

function nextWord(e){
	var randNum = Math.floor(Math.random() * e.count);
	var list = e.nextWord;
	while(list != undefined){
		randNum -= list.count;
		if(randNum <= 0)
			return list.word;
		list = list.nextWord;
	}
	return;
}

function firstWord(){
	// Plus one so checks is never zero
	var checks = Math.floor(Math.random() * 5) + 1;
	var randNum = Math.floor(Math.random() * TABLE.nBuckets);
	var bucks = TABLE.buckets[randNum];
	var firstWord = "";
	while(checks != 0){
		if(bucks == undefined){
			randNum = Math.floor(Math.random() * TABLE.nBuckets);
			bucks = TABLE.buckets[randNum];
			continue;
		}
		var tmp = bucks.e.word;
		var c = tmp.charCodeAt(0);
		if(65 <= c && c <= 90){
			checks--;
			firstWord = tmp;
			if(bucks.nextBucket == undefined){
				randNum = Math.floor(Math.random() * TABLE.nBuckets);
				bucks = TABLE.buckets[randNum];
				continue;
			} else {
				bucks = bucks.nextBucket;
				continue;
			}
		}
		if(bucks.nextBucket == undefined){
			randNum = Math.floor(Math.random() * TABLE.nBuckets);
			bucks = TABLE.buckets[randNum];
			continue;
		} else {
			bucks = bucks.nextBucket;
			continue;
		}
	}
	return firstWord;
}

function htableSearch(s){
	var a = TABLE.nBuckets;
	var b = hashFn(s);
	var c = (b % a);
	var bucks = TABLE.buckets[c];
	if(htableMem(s)){
		while(bucks.e.word !== s)
			bucks = bucks.nextBucket;
		return bucks.e;
	}
	return undefined;
}

function sentence(){
	var sent = [];

	var words = Math.floor(Math.random() * 25);
	while(words < 2)
		words = Math.floor(Math.random() * 25);
	//Creates the sentence
	var first = firstWord();
	var lastWord = first;
	var e = htableSearch(first);
	while(words !== 0){
		sent.push(e.word);
		if(words > 0)
			sent.push(" ");
		var nxt = nextWord(e);
		lastWord = nxt;
		if(nxt === "EOS")
			break;
		e = htableSearch(nxt);
		if(e == undefined)
			break;
		words--;
	}
	if(!(endOfSent(lastWord)))
		sent.push(".");
	return sent.join("");
}

function paragraph(len){
	var par = [];
	par.push("\t");
	while(len !== 0){
		par.push(sentence());
		par.push(" ");
		len--;
	}
	return par.join("");
}

function babble(pars, sents){
	var bab = [];
	while(pars !== 0){
		bab.push(paragraph(sents));
		bab.push("\n");
		pars--;
	}
	return bab.join("");
}

// =====================================================================
// ========================= Initializations ===========================
// =====================================================================

function huckleberryFinnText() {
	var s = "You don't know about me, without you have read a book by the name of The Adventures of Tom Sawyer, but that ain't no matter. That book was made by Mr. Mark Twain, and he told the truth, mainly. There was things which he stretched, but mainly he told the truth. That is nothing. I never seen anybody but lied, one time or another, without it was Aunt Polly, or the widow, or maybe Mary. Aunt Polly- Tom's Aunt Polly, she is- and Mary, and the Widow Douglas, is all told about in that book- which is mostly a true book; with some stretchers, as I said before. Now the way that the book winds up, is this: Tom and me found the money that the robbers hid in the cave, and it made us rich. We got six thousand dollars apiece- all gold. It was an awful sight ofmoney when it was piled up. Well, Judge Thatcher, he took it and put it out at interest, and it fetched us a dollar a day apiece, all the year round- more than a body could tell what to do with. The Widow Douglas, she took me for her son, and allowed she would sivilize me; but it was rough living in the house all the time, considering how dismal regular and decent the widow was in all her ways; and so when I couldn't stand it no longer, I lit out. I got into my old rags, and my sugar-hogshead again, and was free and satisfied. But Tom Sawyer, he hunted me up and said he was going to start a band of robbers and I might join if I would go back to the widow and be respectable. I was pretty tired, and the first thing I knowed, I was asleep. When I woke up I didnt know where I was, for a minute. I set up and looked around, a little scared. Then I remembered. The river looked miles and miles across. The moon was so bright I could a counted the drift logs that went a slipping along, black and still, hundreds of yards out from shore. Everything was dead quiet, and it looked late, and smelt late. You know what I mean- I dont know the words to put it in. I took a good gap and a stretch, and was just going to unhitch and start, when I heard a sound away over the water. Pretty soon I made it out. It was that dull kind of a regular sound that comes from oars working in rowlocks when its a still night. I peeped out through the willow branches, and there it was- a skiff, away across the water. I couldnt tell how many was in it. It kept a-coming, and when it was abreast of me I see there warnt but one man in it. Thinks I, maybe its pap, though I warnt expecting him. He dropped below me, with the current, and by-and-by he come a-swinging up shore in the easy water, and he went by so close I could a reached out the gun and touched him. Well, it was pap, sure enough- and sober, too, by the way he laid to his oars. I didnt lose no time. The next minute I was a-spinning down stream soft but quick in the shade of the bank. I made two mile and a half, and then struck out a quarter of a mile or more towards the middle of the river, because soon I would be passing the ferry landing and people might see me and hail me. I got out amongst the drift-wood and then laid down in the bottom of the canoe and let her float. I laid there and had a good rest and a smoke out of my pipe, looking away into the sky, not a cloud in it. The sky looks ever so deep when you lay down on your back in the moonshine; I never knowed it before. And how far a body can hear on the water such nights! I heard people talking at the ferry landing. I heard what they said, too, every word of it. One man said it was getting towards the long days and the short nights, now. Tother one said this warnt one of the short ones, he reckoned- and then they laughed, and he said it over again and they laughed again; then they waked up another fellow and told him, and laughed, but he didnt laugh; he ripped out something brisk and said let him alone. The first fellow said he lowed to tell it to his old woman- she would think it was pretty good; but he said that warnt nothing to some things he had said in his tune. I heard one man say it was nearly three oclock, and he hoped daylight wouldnt wait more than about a week longer. After that, the talk got further and further away, and I couldnt make out the words any more, but I could hear the mumble; and now and then a laugh, too, but it seemed a long ways off. I was away below the ferry now. I rose up and there was Jacksons Island, about two mile and a half down stream, heavy-timbered and standing up out of the middle of the river, big and dark and solid, like a steamboat without any lights. There warnt any signs of the bar at the head- it was all under water, now. It didnt take me long to get there. I shot past the head at a ripping rate, the current was so swift, and then I got into dead water and landed on the side towards the Illinois shore. I run the canoe into a deep dent in the bank that I knowed about; I had to part the willow branches to get in; and when I made fast nobody could a seen the canoe from the outside. I went up and set down on a log at the head of the island and looked out on the big river and the black driftwood, and away over to the town, three mile away, where there was three or four lights twinkling. A monstrous big lumber raft was about a mile up stream, coming along down, with a lantern in the middle of it. I watched it come creeping down, and when it was most abreast of where I stood I heard a man say, Stern oars, there! heave her head to stabboard! I heard that just as plain as if the man was by my side. There was a little gray in the sky, now; so I stepped into the woods and laid down for a nap before breakfast.";

	var textArr = s.split(" ");
	return textArr;
}

function settingUp(text){
	insertFile(text);
}

function init(){
	settingUp(huckleberryFinnText());
	console.log("Everything's ready to go");
	var test = babble(1, 1);
	document.getElementById("writeToMe").innerHTML = test;
}


// =====================================================================
// ====================== Debugging Functions ==========================
// =====================================================================

function printList(l){
	var list = l;
	while(list !== undefined){
		console.log("\t"+list.word+" - "+list.count);
		list = list.nextWord;
	}
	return;
}

function printEntry(e){
	var entry = e;
	console.log("   "+entry.word+" - "+entry.count);
	printList(entry.nextWord);
	return;
}

function printBucket(b){
	var bckt = b;
	while(bckt !== undefined){
		printEntry(bckt.e);
		bckt = bckt.nextBucket;
	}
	return;
}

function printHtable(t){
	var tbl = t;
	console.log(t.nBuckets+" buckets");
	for(var i = 0; i < t.nBuckets; i++){
		console.log(i+"\n");
		printBucket(tbl.buckets[i]);
	}
	console.log("END\n");
}