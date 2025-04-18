
const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
//initial instnace
let item = alphabet[Math.floor(Math.random() * alphabet.length)]


let text = document.getElementById("character")


text.innerHTML = item


const green = () => {
  text.style.color = "green"
  setTimeout(refreshItem, 2500);
}

const red = () => {
  setTimeout(refreshItem, 2500);
  text.style.color = "red"

}

const refreshItem = () => {
  text.style.color = "black"
  item = alphabet[Math.floor(Math.random() * alphabet.length)]
  text.innerHTML = item

}



document.addEventListener("keydown", (event) => {

  if (item != event.key) {
    red()
  }
  if (item == event.key) {
    green()
  }
})



console.log(alphabet)
