'use strict'

var texto= "Hola mundo soy una variable global";
var numero= 12;

function holaMundo(texto){
	var hola_mundo= "Texto dentro de funcion";

	console.log(texto);
	console.log(typeof numero.toString());
	console.log(hola_mundo);
}


holaMundo(texto);

