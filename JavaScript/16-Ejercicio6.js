'use strict'

/*
 Que nos diga si un numero es pa  o impar.
1. Ventana prompt
2.Si no es valido que nos pida de nuevo el numero 

*/


var numero = parseInt(prompt("Ingrese un numero",0));

while (isNaN(numero)){
numero = parseInt(prompt("Ingrese un numero",0));
}
	if (numero%2==0){
		alert("El "+numero +" es par");
	}else if(numero%2==1){
		alert("El "+numero+ " es impar");
	
	}
