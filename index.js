function changeColor() {
  var random_color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = random_color;
  document.getElementById("curr_color").innerHTML = random_color;
}
