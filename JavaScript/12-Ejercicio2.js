'use strict'

'use strict'

/*
Utilizando un bucle  mostrar la media y la suma de lo numeros introducidos por el usuario
hasta  que el usuario introduzca un numero negativo y ahi mostrar el resultado

*/

var suma=0; 
var contador=0;
var promedio=0.0;
do{

	var numero =parseInt(prompt('Introducir numeros hasta que se meta uno negativo',0));
	if(isNaN(numero)){
		numero=0;
	}else if (numero>=0){
		suma = suma+ numero;
		contador ++;
		

	}
	console.log("suma : "+suma);
	console.log("contador: "+contador);

}while(numero>=0);

console.log("La suma total de los numeros ingresados es: "+suma);
console.log("El promedio es : "+(suma/contador));


