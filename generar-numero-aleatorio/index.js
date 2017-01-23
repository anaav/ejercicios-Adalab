"use strict"

var div=document.querySelector("#div")
var boton=document.querySelector("#boton")


function generarNumero(){
  var numero=Math.ceil(Math.random()*10)
  div.innerHTML= numero
}

boton.addEventListener("click", generarNumero)
generarNumero()

