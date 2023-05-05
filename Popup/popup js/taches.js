const evl = document.getElementById("add")
evl.addEventListener("click", addTask)

// ajout de tache(s)
function addTask() {
  var newLi = document.createElement("li");
  var input = document.getElementById("input").value;
  var text = document.createTextNode(input);
  newLi.appendChild(text);

  if (input === '') {
    alert("You must write something!");
  } else {
    document.getElementById("allUl").appendChild(newLi);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newLi.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("o");
  span.className = "";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//fonction qui supprime tout les li avec le bouton "clear all"(il peut changer de nom :) )
const drp = document.getElementById("drop")
drp.addEventListener("click", dropAll)

function dropAll() {
    var lis = document.querySelectorAll('#allUl li');
    for(var i=0; li=lis[i]; i++) {
        li.parentNode.removeChild(li);
    }
}

