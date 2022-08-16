//add text from textbox to container
var submit = document.getElementById("submit");
var textbox = $('textarea');
var container = $('#container');
submit.addEventListener("click", addText);
function addText() {
  var textToAdd = textbox.val();
  container.append(`<p>${textToAdd}</p>`);
  textbox.val("");
}

//clear container
var clear = document.getElementById("clear");
clear.addEventListener("click", clearText);
function clearText() {
  container.html("");
}

//save text
var containe = document.getElementById("container");
var save = document.getElementById("save");
var savedTextArray = [];
save.addEventListener("click", saveToLocal);
function saveToLocal() {
  var children = containe.children;
  console.log(children);
  for (var i = 0; i < children.length; i++) {
    savedTextArray[i] = children[i].textContent;
  }
  sessionStorage.setItem('savedItems', JSON.stringify(savedTextArray));
}

//clear saved text
var clearsave = document.getElementById("clearsaved");
clearsave.addEventListener("click", clearSaved);
function clearSaved() {
  savedTextArray = [];
  sessionStorage.setItem('savedItems', "");
  container2.html("");
}

//display saved text
var dispSaved = document.getElementById("dispsaved");
var container2 = $('#container2');
dispSaved.addEventListener("click", displaySavedText);
function displaySavedText() {
  var savedText = JSON.parse(sessionStorage.getItem('savedItems'));
  container2.append(`<p>${savedText}</p>`);
}

//dark mode
var back = $('body');
var darkMode = document.getElementById("changeColor");
darkMode.addEventListener("click", changeColor);
function changeColor() {
  back.css("background-color", "black");
  back.css("color", "white");
  container.css("border", "2px solid white");
  container2.css("border", "2px solid white");
}
//light mode
var lightMode = document.getElementById("lightMode");
lightMode.addEventListener("click", setLightMode);
function setLightMode() {
  back.css("background-color", "white");
  back.css("color", "black");
  container.css("border", "2px solid black");
  container2.css("border", "2px solid black");
}