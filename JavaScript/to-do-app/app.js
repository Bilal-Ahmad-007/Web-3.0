function add() {
  var input = document.getElementById("To");
  var list = document.getElementById("listitem");
  var listElement = document.createElement("li");
  var listText = document.createTextNode(input.value);
  listElement.appendChild(listText);
  list.appendChild(listElement);
  input.value = "";

  var delbtn = document.createElement("button");
  var delbtnText = document.createTextNode("Delete");
  delbtn.appendChild(delbtnText);
  listElement.appendChild(delbtn);
  delbtn.setAttribute("onclick", "dell(this)");

  var editbtn = document.createElement("button");
  var editbtnText = document.createTextNode("Edit");
  editbtn.appendChild(editbtnText);
  listElement.appendChild(editbtn);
  editbtn.setAttribute("onclick", "editt(this)");

}
function del() {
  var list = document.getElementById("listitem");
  // list.innerHTML="";
  list.remove();
}

function dell(e) {
  e.parentNode.remove();
}

function editt(e){
    let li=e.parentNode.firstChild.nodeValue;

  var inputField = prompt("enter updated value",li);

  li= inputField;
}
