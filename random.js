

const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"

const item = alphabet[Math.floor(Math.random()*alphabet.length)]

  console.log(alphabet)
let text = document.getElementById("test")
text.innerHTML = item
document.addEventListener("keydown", (event) => {
  console.log("boo")

// text.style.color = "red";
text.style.color = "green";
});


console.log(alphabet)
