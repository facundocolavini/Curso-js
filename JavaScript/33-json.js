'use strict'

//JSON - JavaScript Object Notation


//Objeto JSON
//Sirve para almacenar informacion es un objeto.
var pelicula = {
	titulo: 'Barman vs Superman',
	year: 2017,
	pais:'Estado Unidos'
};

//JSON en Array JS
var peliculas =[{titulo: "La verdad duele",year:'2016',pais:'Francia'},pelicula];
console.log (peliculas);

//recorrerlo
var index;
var caja_peliculas=document.querySelector('#peliculas');
 for (index in peliculas){

 	var p= document.createElement("p");
 	 
 	p.append(peliculas[index].titulo +"-"+peliculas[index].year);
 	caja_peliculas.append(p);
 }

//Aceder a las propiedas del Objeto
// Ej :pelicula.titulo asi te muestra el nombre de la pelicula y acedes 
// Para modificar algun dato es pelicula.titulo ='modifico el titulo'

