// Show the entered name and register number inside the empty box.
var button = document.getElementById("showDetailsBtn");
var output = document.getElementById("output");

button.addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var regno = document.getElementById("regno").value;

  output.innerHTML =
    "<p>Name: " + name + "</p>" +
    "<p>Register Number: " + regno + "</p>" +
    "<p>Programme: MCA</p>";
});
