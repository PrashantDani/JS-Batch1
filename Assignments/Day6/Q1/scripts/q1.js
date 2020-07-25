var i = 0;
function change() {
  var  doc = document.getElementById("bck");
  var  color = ["red", "green", "purple", "violet","yellow","pink","orange"];
  document.body.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 5000);
