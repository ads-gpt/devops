// Show the entered name and register number inside the empty box.
var button = document.getElementById("showDetailsBtn");
var output = document.getElementById("output");

function makeDetailLine(label, value) {
  var line = document.createElement("p");
  line.textContent = label + ": " + value;
  return line;
}

button.addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var regno = document.getElementById("regno").value;

  output.innerHTML = "";
  output.appendChild(makeDetailLine("Name", name));
  output.appendChild(makeDetailLine("Register Number", regno));
  output.appendChild(makeDetailLine("Programme", "MCA"));
});
