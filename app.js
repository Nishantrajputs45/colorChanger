const letters = "0123456789ABCDEF";
const button = document.querySelector("#button");

function colorChanger(letters, button) {
  button.addEventListener("click", (btn) => {
    btn.target.previousElementSibling.style.backgroundColor =
      randomColor(letters);
  });
}

function randomColor(letters) {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

colorChanger(letters, button);
