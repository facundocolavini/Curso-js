'use strict'


//Arrays ,arreglos , matrices
//Con una array podes tener  varios  valores dentro del mismo de varios tipos

//Indice   		0				1				2				3	   4	5
var nombre=["Victor Robles","Juan Lopez","Manolo Garcia","Jose Martin",52,true];

var lenguajes= new Array("PHP","JS","Go","Java","C++","Pascal");

console.log(nombre);
console.log(lenguajes);
console.log(nombre.length); //mostrar por indice de posicion del array 
/*
var indice = parseInt( prompt ("Que elemento del array quieres?",0));

if(indice<nombre.length){
	alert("El usuario es : "+ nombre[indice]);
}else{

	alert("Introducir el numero correcto menor que : " +nombre.length );

}
*/
document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");
/*
//Recorrer un array con for
for (var i =0 ; i<lenguajes.length;i++){
	document.write("<li>"+lenguajes[i]+ "</li>");
 
}
document.write("</ul>");
*/
//Recorrer con forEach
/*
lenguajes.forEach((elemento,indice,arr)=>{
	console.log(arr);
	document.write("<li>"+indice+"-" +elemento+ "</li>");
});
*/
//Recorrer un array con for in 	
for(let lenguaje in lenguajes){ 
	document.write("<li>"+lenguajes[lenguaje]+ "</li>");
}

document.write("<ul>");   

//Busquedas
//Primera forma de hacerlo
/*
var  busqueda = lenguajes.find(function(lenguaje){
	return lenguaje =="PHP";
});
*/

//Con flechas
var  busqueda = lenguajes.findIndex(lenguaje =>lenguaje =="JS");

console.log(busqueda);

//con arrays de numeros
var precios= [10,20,50,80,12];

var  busqueda = precios.some(precio =>precio=80);

console.log(busqueda);