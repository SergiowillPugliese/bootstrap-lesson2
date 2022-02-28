let caricamento = document.getElementById("caricamento")
let container = document.getElementById("container")
let navbar = document.getElementById("navbar")
let titolo = document.getElementById("titolo")
let immagine = document.getElementById("immagine")
immagine.style.display = "none"
let i = 0

let progress = setInterval(function () {
    if (i <= 100) {
        caricamento.style = "width:" + i + "%"
        titolo.innerText = "Caricamento al " + i + "%"
        i++
    } else {
        clearInterval(progress)   
        immagine.style.display ="block"
        immagine.style.textAlign = "center"
    }
}, 100);
