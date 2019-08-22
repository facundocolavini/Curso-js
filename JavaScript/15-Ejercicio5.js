'use strict'

/*
Muestre todos los numeros divisores de un numero introducido por el usuario por un prompt
*/

var numero=parseInt(prompt("Ingrese un numero",1));


for(var i=0;i<=numero;i++){
	if(numero%i==0){
		console.log("Divisores del numero ingresado: "+i);
	}
}
