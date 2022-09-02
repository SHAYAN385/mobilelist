function abc(message) {
  console.log(message);
}

// jis element pr click horgha hoga woo pura element chiyan
function imgclick(element) {
  console.log(element);
  element.src = "index.jpg";
}
// getElementbyId == element ko id se get kary ga

function closeBox() {
  var box = document.getElementById("box");
  box.style.display = "none";
  console.log(box);
}

function shape(clas) {
  var box = document.getElementById("box");
  box.className = clas;
}
