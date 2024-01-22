const container = document.getElementById("container");

container.innerHTML = "<button>Buy!</button>";

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

let para = document.getElementsByTagName("button")[0];

para.addEventListener("click", function () {
  container.innerHTML += "<p>Thank you for buying!</>";
});
