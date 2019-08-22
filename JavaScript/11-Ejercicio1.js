'use strict'

 /*
Programa que pida 2 numeros y que  nos diga cual es el mayor,el menor y si son iguales.
 PLUS: Si los numeros no son un numero o son menores o iguales a cero  , que nos vuelva a pedir los numeros
 */

 var numero1 = parseInt(prompt('Ingrese el primer numero ',0));
 var numero2 = parseInt(prompt('Introduce el segundo numero',0));

while(numero1<=0 ||numero2<=0||isNaN(numero1)||isNaN(numero1)){
 numero1 = parseInt(prompt('Ingrese el primer numero ',0));
 numero2 = parseInt(prompt('Introduce el segundo numero',0));
}

 if(numero1>numero2){
 	//console.log("El numero1 que es "+numero1+" es mayor al numero2,que es "+numero2);
 	alert("EL NUMERO MAYOR ES EL: " +numero1);
 	alert("EL NUMERO MENOR ES EL: " +numero2);
 }else if(numero1 == numero2){
 	//console.log("El numero1 que es "+numero1+" es igual al numero2,que es "+numero2);
 	alert("EL NUMERO1 ES IGUAL AL NUMERO2");
 }else if(numero2>numero1){
 	//console.log("El numero2 que es "+numero2+" es mayor al numero1 que es "+numero1);
 	alert("EL NUMERO MAYOR ES EL: " +numero2);
 	alert("EL NUMERO MENOR ES EL: " +numero1);
 }else{
 	alert("INTRODUCE NUMEROS CORRECTOS");
 }