"use strict"
var baraja=[]
var palos=["corazones", "rombos", "treboles", "picas"]

for (var i = 1; i <= 13; i++) {

  for (var j = 0; j < palos.length; j++) {

    var carta = {palo: palos[j], valor: i}
    baraja.push(carta)

  }

}

console.log (baraja)

function puntuacionMano(mano) {
  var resultado= 0

  for (var i = 0; i < mano.length; i++) {
    resultado= resultado + mano[i] ["valor"]
  }
  console.log ("El resultado es " + resultado)
  var divPuntuacion=document.querySelector(".puntuacion")

  if (resultado>21) {
    divPuntuacion.innerHTML="Has perdido"
  } else {
    divPuntuacion.innerHTML=resultado
  }
  return resultado
}


function nuevoJuego(){
 var cartaImg=document.querySelector(".cartas-jugadas img")
 cartaImg.src= ""
 cartasMano=[]
 var divPuntuacion=document.querySelector(".puntuacion")
 divPuntuacion.innerHTML=0
 
}

var botonNuevo=document.querySelector("#nueva-jugada")
botonNuevo.addEventListener("click", nuevoJuego)


var cartasMano=[]
function cartaAleatoria(){
  var posicionCartaAlAzar=Math.floor(Math.random()*baraja.length)
  var cartaAlAzar=baraja[posicionCartaAlAzar]  
  var cartaImg=document.querySelector(".cartas-jugadas img")
  cartaImg.src= "images/"+ cartaAlAzar["valor"] + "-" + cartaAlAzar["palo"] + ".png"
  cartasMano.push(cartaAlAzar)
  puntuacionMano(cartasMano)
}

var botonPedirCarta=document.querySelector("#pedir-carta")
botonPedirCarta.addEventListener ("click", cartaAleatoria)


function plantarse(){

var divPuntuacion=document.querySelector(".puntuacion")
var resultado= puntuacionMano(cartasMano)


  if (resultado<10) {
    divPuntuacion.innerHTML="Te has plantado demasiado pronto"

  }else if(resultado<21){
    divPuntuacion.innerHTML="Otra vez será"
  

  }else  {
    divPuntuacion.innerHTML="Lo has hecho perfecto"

  }
}
var botonMePlanto= document.querySelector("#me-planto")
botonMePlanto.addEventListener("click", plantarse)