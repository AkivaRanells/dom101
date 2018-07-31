var para = document.createElement("p");
let textnode = document.createTextNode("Hello world!");
para.appendChild(textnode);
document.getElementById("container").appendChild(para);
var btn = document.createElement('button');
var text = document.createTextNode("dont Click Me!");
btn.appendChild(text);
document.getElementById('someID').appendChild(btn);
document.getElementById('btn').onclick = function() {
    alert("You clicked me");
}
var eventHandler = function() {
    document.getElementById('para1').innerHTML = "Supew Awesome";
}
const eventHandler1 = function(){
    document.getElementById('para1').innerHTML="Hover over me again";
}
const addListItem  = function(){
   let newLI =  document.createElement("LI");
   let oldLI = document.getElementById('item1');
   oldLI.appendChild(newLI);
   let textnode = document.createTextNode("Amazing");
   newLI.appendChild(textnode);
}
let link = document.createElement("a");
let linkText=document.createTextNode('Elevation website');
link.setAttribute('href', 'www.elevationacademy.co');
let p1 = document.getElementById('p1');
p1.appendChild(link);
link.appendChild(linkText);
link.style.backgroundColor="red";
let clickCounter = 0;
const changer=function(){
    if(clickCounter%2===0){
        document.getElementById('change').innerHTML="Now Click Again";
        clickCounter++;
    }else{
        document.getElementById('change').innerHTML="Try Clicking Me"; 
        clickCounter++;
    }
}
