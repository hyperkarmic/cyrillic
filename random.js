
const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
//initial instnace
let item = alphabet[Math.floor(Math.random() * alphabet.length)]


let text = document.getElementById("character")


text.innerHTML = item


const green = () => {
  text.style.color = "green"
  let audioElement = new Audio("correct.wav")
  audioElement.play()
  setTimeout(refreshItem, 1250);
}

const red = () => {
  text.style.color = "red"
  let audioElement = new Audio("wrong.mp3")
  audioElement.play()
  setTimeout(refreshItem, 1250);

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
