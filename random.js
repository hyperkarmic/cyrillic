

const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
let item = alphabet[Math.floor(Math.random()*alphabet.length)]

 const refreshItem = () =>{
 item = alphabet[Math.floor(Math.random()*alphabet.length)]
   text.style.color = "black"

text.innerHTML = item


 }


  console.log("bastards!!!!")
const fu = () =>{
  refreshItem()

}



const itemmaker = () =>{}
let text = document.getElementById("character")
text.innerHTML = item
document.addEventListener("keydown", (event) => {

  if(item != event.key){
      text.style.color = "red"

    setTimeout(fu, 5000);
    }
  if(item == event.key){


 text.style.color = "green"

    setTimeout(fu, 5000);
    }
})



//text.style.color = "green";

console.log(alphabet)
