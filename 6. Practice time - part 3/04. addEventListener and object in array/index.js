let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

let fetchBtn = document.getElementById("btn");

fetchBtn.addEventListener("click", function () {
  let janeScore = data[0].score;
  console.log(janeScore);
});
