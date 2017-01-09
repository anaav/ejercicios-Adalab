"use strict"
var menu=document.querySelector("#menu-pequeño")
var boton= document.querySelector("#logo-rayas")

function pulsarBoton(){
  menu.classList.toggle("activo")
}
boton.addEventListener("click", pulsarBoton)


