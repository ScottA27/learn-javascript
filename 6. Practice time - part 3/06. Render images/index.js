// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

const container = document.getElementById("container");

function render() {
  let images = "";
  for (i = 0; i < imgs.length; i++) {
    images += `
    <img alt="Employee in the company" class="team-img" src="${imgs[i]}">
    `;
  }
  container.innerHTML = images;
}

render();
