'use strict'

//Funciones
//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

//Defino la funcion 
function porConsola(numero1,numero2){
   		console.log("Suma: " +(numero1+numero2));
		console.log("Resta: " +(numero1-numero2));
		console.log("Multiplicacion: " +(numero1*numero2));
		console.log("Division: " +(numero1/numero2));
		console.log("***********************************");	
}

function porPantalla(numero1,numero2){
		document.write("Suma: " +(numero1+numero2)+"</br>");
		document.write("Resta: " +(numero1-numero2)+"</br>");
		document.write("Multiplicacion: " +(numero1*numero2)+"</br>");
		document.write("Division: " +(numero1/numero2)+"</br>");
		document.write("***********************************</br>");	
}


function calculadora(numero1,numero2,mostrar = false){
	//Conjunto  de instrucciones a ejecutar
	if (mostrar ==false){
		porConsola(numero1,numero2);
	
	}else{
		porPantalla(numero1,numero2);
	}

	return true;
}
//Invocar o llamar a la funcion
//calculadora(1,3);
calculadora(1,2,true);
calculadora(2,23,false);
/*
for(var i=1; i<=10;i++){
	console.log(i);
	calculadora(i,8);

} 
*/