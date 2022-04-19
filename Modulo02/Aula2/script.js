const list = [
  "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/03/primavera-destinos-norte-capa-01-820x430.jpg",
  "https://s.calendarr.com/upload/de/62/inicio-do-verao.jpg",
  "https://s3.static.brasilescola.uol.com.br/be/2021/03/outono.jpg",
  "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/inverno-datas-e-caracteristicas.jpg",
];

const estacao = document.querySelector("#estacao");
const img = document.querySelector("#principal");
const button = document.querySelector("#Botão");
const botaoimg = document.querySelector(".bi-tropical-storm");
const figcapture = document.querySelector("figcaption")



function handleChangeImg() {
 if (img.attributes.src.value === list[0]){
     img.setAttribute('src', list[1])
     figcapture.innerHTML = 'Verao'
 } else if (img.attributes.src.value === list[1]){
    img.setAttribute('src', list[2])
    figcapture.innerHTML = 'Outono'
} else if (img.attributes.src.value === list[2]){
    img.setAttribute('src', list[3])
    figcapture.innerHTML = 'Inverno'
} else {
    figcapture.innerHTML = 'Primavera'
    img.setAttribute('src', list[0])
} 
}
botaoimg.addEventListener("click", handleChangeImg);