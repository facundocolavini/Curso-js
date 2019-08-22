'use strict'

//Prueba con Ley y var

//Prueba con var
var numero =40;
console.log(numero);//valor 40

if(true){
	var numero = 50;
	console.log(numero); //valor 50
}

console.log(numero);//Valor 50



//Prueba con Let
var texto ="Curso JS";
console.log(texto); //valor

if (true){
	let texto="Curso Laravel 5";  // let actua anivel de bloque crea variable nueva 
								  //y la modifica dentro del if y solo conserva ese valor dentro del  if
	console.log(texto);// Valor laravel 5
}
//muestra  el valor de  la varaible local var 
console.log(texto);
