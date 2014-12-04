// Andoni Garcia's Markov Babbler in JS. 2014

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