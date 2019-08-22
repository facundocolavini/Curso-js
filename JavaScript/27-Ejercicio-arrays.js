'use strict'



/*
1-Pida 6 numeros por pantalla y los meta en un array 
2-Mostrar el array entero todos sus elementos  en el cuerpo de la pagina y en la consola
3-Ordenarlo y mostrarlo 
4-Invertir su orden y mostrarlo
5-Mostrar cuantos elementos tiene el array
6-Busqueda de un valor introducido por  el usuario , que  nos diga si lo encuetra 

*/

var numeros =[]; // TAMBIEN SE PUEDE PONER  new Array (6) el 6 isndica la cantidad de los elementos que va a tener el array 

var numeros = new Array (3);


function mostrarArray(elementos,textoCustom=""){
	document.write("<h1>Array de enteros"+textoCustom +"</h1>");
	document.write("<ul>");
	elementos.forEach((elemento,indice)=>{
	document.write("<li>"+elemento+"</li>")
	});
	document.write("</ul>");
}

//Pedir los numeros
 

for (var i =0;i<6;i++ ){
	
// otra forma de hacerlo numero [i]= parseInt(prompt("INGRESE HASTA 6 NUMEROS",0));

	var numero =parseInt(prompt("INGRESE HASTA 6 NUMEROS",0));
	numeros.push(numero);
	
}
	// Mostrar  en el cuerpo de la pagina
	mostrarArray(numeros);

	//Mostrar en la consola

	console.log(numeros);


	//Contar elementos
	document.write("<h1>El array tiene "+ numeros.length+" elementos</h1>");//	numeros.length;

	//Busqueda
	var busqueda =parseInt(prompt("Buscar un numero",0));
	var posicion = numeros.findIndex(numero =>numero==busqueda);
	
	if (posicion && posicion !=-1){
		document.write("<h1>Encontrado</h1>");
		document.write("<hr/><h1>Posicion de la busqueda:"+posicion+"</h1><hr/>");
	}else {
		document.write("<hr/><h1>No se ha Encontrado</h1><hr/>");
		
	}
	
	//Ordenar y mostrar te ordena  de menor a mayor //con callbacks y no tomando el orden  del alfabeto

	numeros.sort(function(a,b){return a-b});
	mostrarArray(numeros," Ordenado");

	//Invertir y mostrar

	numeros.reverse();
	mostrarArray(numeros,' revertidos');