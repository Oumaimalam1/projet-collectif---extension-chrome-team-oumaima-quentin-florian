// const evl = document.getElementById("add")
// evl.addEventListener("click", addTask)

// //function pour ajouter des taches
// function addTask() {
//     let newLi = document.createElement("li")
//     let input = document.getElementById("input").value
//     let text = document.createTextNode(input)
//     newLi.appendChild(text)

//     if (input === '')
//         alert("met les oeufs sur la poelle")
//     else
//         document.getElementById("allUl").appendChild(newLi)
//         //localStorage.setItem(newLi)

//     document.getElementById("input").value = ""

//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
  
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
// }

// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// add.onclick = () => {
//     localStorage.setItem("ajout", input.value)
// }

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
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
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

function dropAll() {
    var span = document.createElement("SPAN");
  var txt = document.createTextNode("o");
  span.className = "select";
  span.appendChild(txt);
  newLi.appendChild(span);

  for (i = 0; i < select.length; i++) {
    select[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}