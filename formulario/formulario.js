"use strict"

var day = {
  min: 1,
  max: 31,
  name: "Day",
  select: document.querySelector("#day")
}

var month = {
  min: 1,
  max: 12,
  name: "Month",
  select: document.querySelector("#month")
}

var year = {
  min: 1905,
  max: 2016,
  name: "Year",
  select: document.querySelector("#year")
}

var meses=[
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
]

function crearOptionsPara(campo) {
  var resultado = "<option>" + campo.color + "</option>"
  for (var i = campo.min; i <= campo.max; i++) {
    if (campo.name === "Month")
      resultado = resultados + "<option>"+ meses[j]+ "</option>"

    resultado = resultado + "<option>"+i+ "</option>"
  }

  return resultado
}

selectMonth.innerHTML= crearOptionsPara(day)
selectDay.innerHTML= crearOptionsPara(day)
selectYear.innerHTML= crearOptionsPara(year)
