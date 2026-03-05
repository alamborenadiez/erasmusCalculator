let elementos = []

function agregar(valor){

elementos.push(valor)

document.getElementById("pantalla").value = elementos.join("")

}

function limpiar(){

elementos = []

document.getElementById("pantalla").value = ""

}

function calcular(){

let operacion = elementos.join("")

let resultado = eval(operacion)

elementos = [resultado]

document.getElementById("pantalla").value = resultado

}