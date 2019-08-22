'use strict'

/*
Hacer un programa que muestre todos los numeros entre 2 numeros introducidos por el usuario
*/

var numero1=0;
var numero2=0;

 numero1 =parseInt(prompt('Introducir el ´primer numero',0));
 numero2 =parseInt(prompt('Introducir el segundo numero',0));


if(isNaN(numero1||numero2)){
	numero1 =parseInt(prompt('Introducir el ´primer numero',0));
 	numero2 =parseInt(prompt('Introducir el segundo numero',0));
}else if (numero1>numero2){
	document.write("<h1>De"+numero2+ " a "+ numero1+ " estan estos numeros:</h1>")
	for(numero2;numero2<=numero1;numero2++){
		//console.log(numero2);
		document.write(numero2+" <br/>");
	}

}else {
	document.write("<h1>De"+numero1+ " a "+ numero2+ " estan estos numeros:</h1>")
	for(numero1;numero1<=numero2;numero1++){
		//console.log(numero1);
		document.write(numero1+" <br/>");
	}	
}


