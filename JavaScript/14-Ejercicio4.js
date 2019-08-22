'use strict'

/*
Mostrar todos los numeros impares ,entre 2 numeros introducido por el teclado(usuario)
*/

var numero1 =parseInt(prompt("Ingrese el primer numero",0));
var numero2 =parseInt(prompt("Ingrese el segundo numero",0));

while(isNaN(numero1||numero2)){
	alert("INGRESE NUMEROS");
	numero1 =parseInt(prompt("Ingrese el primer numero",0));
	numero2 =parseInt(prompt("Ingrese el segundo numero",0));
}
	document.write("<h1>Los numeros Impares de "+numero2+ " a "+ numero1+ " son:</h1>");
	if(numero1>numero2){
		for(numero2;numero2<numero1;numero2++){
			if (numero2%2==1){
				document.write(numero2+"<br/>");
			}
		}
	}else{
		document.write("<h1>Los numeros Impares de "+numero1+ " a "+ numero2+ " son:</h1>");
		for(numero1;numero1<numero2;numero1++){
			if (numero1%2==1){
				document.write(numero1+"<br/>");
			}
		}
	}