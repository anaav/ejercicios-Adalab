
"use strict"
var numeroAAdivinar= Math.floor(Math.random()*100)+1
var boton=document.querySelector("#boton")
var input= document.querySelector("#meter-numero")
var mensajes=document.querySelector("#mensajes")


function comparaNumero(numeroAAdivinar, numeroUsuarioElige){
  if (numeroUsuarioElige<numeroAAdivinar) {
    return "Demasiado bajo"
  }else if (numeroUsuarioElige>numeroAAdivinar){
    return "Demasiado alto"
  }else{
    return "Lo has acertado"
  }
}
function pulsarBoton(){

  var resultado=comparaNumero(numeroAAdivinar, input.value)
  mensajes.innerHTML=resultado
}
boton.addEventListener("click",pulsarBoton)
