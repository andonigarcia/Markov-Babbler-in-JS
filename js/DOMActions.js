// Andoni Garcia's Markov Babbler in JS. 2014

function aboutFn(){
    var section = document.getElementById("contentSection");
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
    var text1 = "A Markov Chain is a weighted directed graph that maps possible next states from your current state based on their probability. As such, from each point in the chain, you stochastically (and in our case pseud-randomly) move to a next possible point based on the probability of the next point occuring from your current point.";
    var text2 = "Markov Babbling applies this concept of Markov Chains to word choice. We analyze a piece of text (say Shakepeare's Sonnets or Huckleberry Finn) to make our model. Then from a given word (A capital first word as a starting point), we see the probability of the words that follow after in the text. Using our pseudo-random generator, we then take the path of possible next words, writing a somewhat coherent sentence. The eventual application of this is to be able to create rhyming raps based on more sophisticated models or reproduce coherent articles based on a subject. Markov Babbling has been seen in many different contexts, and here is my project playing around with them! Hope you enjoy, and if you have any feedback, feel free to contact me!";
    var text = [text1, text2];
    for(var i = 0; i < text.length; i++){
        var para = document.createElement("p");
        var node = document.createTextNode(text[i]);
        para.appendChild(node);
        section.appendChild(para);
    }
}

function contactFn(){
    var section = document.getElementById("contentSection");
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
    var text1 = "Andoni M. Garcia";
    var text2 = "andoni@uchicago.edu";
    var text = [text1, text2];
    var src1 = "http://andonigarcia.com";
    var src2 = "mailto:andoni@uchicago.edu";
    var src = [src1, src2];
    for(var i = 0; i < text.length; i++){
        var anch = document.createElement("a");
        anch.setAttribute("href", src[i]);
        anch.setAttribute("target", "_blank");
        anch.innerHTML = text[i];
        if(i === 0){
            anch.setAttribute("style", "font-size: 32px; font-family: impact, serif; text-decoration: underline; color: #580c64;");
        } else if(i === 1){
            anch.setAttribute("style", "font-size: 24px; text-decoration: underline; color: #580c64;");
        }
        var para = document.createElement("p");
        para.appendChild(anch);
        section.appendChild(para);
    }
    var desc = "I am a junior at the University of Chicago, just having fun. I am a frontend web developer playing around with a couple things on my mind. I also am co-founder of a developing start-up. Click my name to see my full bio and website, or checkout my GitHub repo to see some of my public projects.";
    var paraD = document.createElement("p");
    var nodeD = document.createTextNode(desc);
    paraD.appendChild(nodeD);
    section.appendChild(paraD);
}

function showBabblerList(){
    var navList = document.getElementById("navList");
    navList.style.visibility = "visible";
}



function huckFn(){
    TABLE = new htable(157);
    
    var section = document.getElementById("contentSection");
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
    
    var div1 = document.createElement("div");
    div1.setAttribute("class", "forms");
    
    var button1 = document.createElement("button");
    button1.setAttribute("type", "button");
    button1.setAttribute("disabled", "disabled");
    button1.setAttribute("id", "descript");
    var text1 = document.createTextNode("Huckleberry Finn");
    button1.appendChild(text1);
    div1.appendChild(button1);
    
    var br = document.createElement("br");
    div1.appendChild(br);
    
    var form = document.createElement("form");
    form.setAttribute("name", "userInput");
    var label1 = document.createElement("label");
    var text2 = document.createTextNode("Sentences:");
    label1.appendChild(text2);
    var input1 = document.createElement("input");
    input1.setAttribute("type", "number");
    input1.setAttribute("name", "sentences");
    input1.setAttribute("min", "1");
    input1.setAttribute("max", "10");
    input1.setAttribute("step", "1");
    input1.setAttribute("value", "3");
    label1.appendChild(input1);
    form.appendChild(label1);
    var label2 = document.createElement("label");
    var text3 = document.createTextNode("Pragraphs:");
    label2.appendChild(text3);
    var input2 = document.createElement("input");
    input2.setAttribute("type", "number");
    input2.setAttribute("name", "paragraphs");
    input2.setAttribute("min", "1");
    input2.setAttribute("max", "5");
    input2.setAttribute("step", "1");
    input2.setAttribute("value", "2");
    label2.appendChild(input2);
    form.appendChild(label2);
    var br2 = document.createElement("br");
    form.appendChild(br2);
    var button2 = document.createElement("button");
    button2.setAttribute("type", "button");
    button2.setAttribute("onclick", "start(this.form.sentences.value, this.form.paragraphs.value)");
    var text4 = document.createTextNode("Ready, Set, Babble!");
    button2.appendChild(text4);
    form.appendChild(button2);
    div1.appendChild(form);
    section.appendChild(div1);
    
    var div2 = document.createElement("div");
    div2.setAttribute("id", "writeHere");
    section.appendChild(div2);
    
    huckInit();
}

function shakespFn(){
    TABLE = new htable(157);
    
    var section = document.getElementById("contentSection");
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
    
    var div1 = document.createElement("div");
    div1.setAttribute("class", "forms");
    
    var button1 = document.createElement("button");
    button1.setAttribute("type", "button");
    button1.setAttribute("disabled", "disabled");
    button1.setAttribute("id", "descript");
    var text1 = document.createTextNode("Shakespeare Sonnets");
    button1.appendChild(text1);
    div1.appendChild(button1);
    
    var br = document.createElement("br");
    div1.appendChild(br);
    
    var form = document.createElement("form");
    form.setAttribute("name", "userInput");
    var label1 = document.createElement("label");
    var text2 = document.createTextNode("Sentences:");
    label1.appendChild(text2);
    var input1 = document.createElement("input");
    input1.setAttribute("type", "number");
    input1.setAttribute("name", "sentences");
    input1.setAttribute("min", "1");
    input1.setAttribute("max", "10");
    input1.setAttribute("step", "1");
    input1.setAttribute("value", "3");
    label1.appendChild(input1);
    form.appendChild(label1);
    var label2 = document.createElement("label");
    var text3 = document.createTextNode("Pragraphs:");
    label2.appendChild(text3);
    var input2 = document.createElement("input");
    input2.setAttribute("type", "number");
    input2.setAttribute("name", "paragraphs");
    input2.setAttribute("min", "1");
    input2.setAttribute("max", "5");
    input2.setAttribute("step", "1");
    input2.setAttribute("value", "2");
    label2.appendChild(input2);
    form.appendChild(label2);
    var br2 = document.createElement("br");
    form.appendChild(br2);
    var button2 = document.createElement("button");
    button2.setAttribute("type", "button");
    button2.setAttribute("onclick", "notReadyYet('Shakespeare Sonnets')");
    var text4 = document.createTextNode("Ready, Set, Babble!");
    button2.appendChild(text4);
    form.appendChild(button2);
    div1.appendChild(form);
    section.appendChild(div1);
    
    var div2 = document.createElement("div");
    div2.setAttribute("id", "writeHere");
    section.appendChild(div2);
}

function rapgenFn(){
    TABLE = new htable(157);
    
    var section = document.getElementById("contentSection");
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
    
    var div1 = document.createElement("div");
    div1.setAttribute("class", "forms");
    
    var button1 = document.createElement("button");
    button1.setAttribute("type", "button");
    button1.setAttribute("disabled", "disabled");
    button1.setAttribute("id", "descript");
    var text1 = document.createTextNode("Rap Generator");
    button1.appendChild(text1);
    div1.appendChild(button1);
    
    var br = document.createElement("br");
    div1.appendChild(br);
    
    var form = document.createElement("form");
    form.setAttribute("name", "userInput");
    var label1 = document.createElement("label");
    var text2 = document.createTextNode("Sentences:");
    label1.appendChild(text2);
    var input1 = document.createElement("input");
    input1.setAttribute("type", "number");
    input1.setAttribute("name", "sentences");
    input1.setAttribute("min", "1");
    input1.setAttribute("max", "10");
    input1.setAttribute("step", "1");
    input1.setAttribute("value", "3");
    label1.appendChild(input1);
    form.appendChild(label1);
    var label2 = document.createElement("label");
    var text3 = document.createTextNode("Pragraphs:");
    label2.appendChild(text3);
    var input2 = document.createElement("input");
    input2.setAttribute("type", "number");
    input2.setAttribute("name", "paragraphs");
    input2.setAttribute("min", "1");
    input2.setAttribute("max", "5");
    input2.setAttribute("step", "1");
    input2.setAttribute("value", "2");
    label2.appendChild(input2);
    form.appendChild(label2);
    var br2 = document.createElement("br");
    form.appendChild(br2);
    var button2 = document.createElement("button");
    button2.setAttribute("type", "button");
    button2.setAttribute("onclick", "notReadyYet('Rap Generator')");
    var text4 = document.createTextNode("Ready, Set, Babble!");
    button2.appendChild(text4);
    form.appendChild(button2);
    div1.appendChild(form);
    section.appendChild(div1);
    
    var div2 = document.createElement("div");
    div2.setAttribute("id", "writeHere");
    section.appendChild(div2);
}

function notReadyYet(s){
    var parent = document.getElementById("writeHere");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    var text = "Sorry, we are still working to compile the manuscript for ";
    text += s;
    text += ". We will be fully functional soon! For now, Huckleberry Finn works!";
    var para = document.createElement("p");
    var node = document.createTextNode(text);
    para.appendChild(node);
    parent.appendChild(para);   
}

function inputFn(){
    TABLE = new htable(157);
    
    var section = document.getElementById("contentSection");
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
    
    var div1 = document.createElement("div");
    div1.setAttribute("class", "forms");
    
    var button1 = document.createElement("input");
    button1.setAttribute("type", "file");
    button1.setAttribute("id", "files");
    button1.setAttribute("name", "files[]");
    div1.appendChild(button1);
    
    var br = document.createElement("br");
    div1.appendChild(br);
    
    var form = document.createElement("form");
    form.setAttribute("name", "userInput");
    var label1 = document.createElement("label");
    var text2 = document.createTextNode("Sentences:");
    label1.appendChild(text2);
    var input1 = document.createElement("input");
    input1.setAttribute("type", "number");
    input1.setAttribute("name", "sentences");
    input1.setAttribute("min", "1");
    input1.setAttribute("max", "10");
    input1.setAttribute("step", "1");
    input1.setAttribute("value", "3");
    label1.appendChild(input1);
    form.appendChild(label1);
    var label2 = document.createElement("label");
    var text3 = document.createTextNode("Pragraphs:");
    label2.appendChild(text3);
    var input2 = document.createElement("input");
    input2.setAttribute("type", "number");
    input2.setAttribute("name", "paragraphs");
    input2.setAttribute("min", "1");
    input2.setAttribute("max", "5");
    input2.setAttribute("step", "1");
    input2.setAttribute("value", "2");
    label2.appendChild(input2);
    form.appendChild(label2);
    var br2 = document.createElement("br");
    form.appendChild(br2);
    var button2 = document.createElement("button");
    button2.setAttribute("type", "button");
    button2.setAttribute("onclick", "start(this.form.sentences.value, this.form.paragraphs.value)");
    var text4 = document.createTextNode("Ready, Set, Babble!");
    button2.appendChild(text4);
    form.appendChild(button2);
    div1.appendChild(form);
    section.appendChild(div1);
    
    var div2 = document.createElement("div");
    div2.setAttribute("id", "writeHere");
    section.appendChild(div2);
    
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
}