'use strict'

//Transformacion de textos
var numero = 444; 
var texto1 = "      Bienvenido al curso de javaScript curso de tu mama            ";
var texto2= "es muy buen curso";

/*
var dato = numero.toString()
	dato = texto1.toLowerCase();
	dato = texto2.toUpperCase();
console.log(dato);


//Calcular longitud 
var nombre = "pepe";
var nombre = ["hola","mama"]; 

console.log(nombre.length); //cuenta las letras de una cadena de texto tambien  
							//puede cantar la cantidad de elementos de un array
							
//Concatenar - Unir textos

//var textoTotal = texto1+" "+texto2;
var textTotal= texto1.concat(" "+texto2);
console.log(textoTotal);  
*/

//BUSCAR UNA PALBRA EN UN TEXTO
//indexOf busca  la palabra de referencia y dice en que distancia esta
//lastIndexOf la ultima coecidencia si existiera
//search para realizar busquedas es parecida a indexOf si no aparece una palabra o noexiste la palabra a buscar te pone -1.
//match nos va a devolver una coleccion de resultados  que va a encontrar para buscar mas coencidencias se le pone barra /  /gi.
//substr sacar  la palabra de que empieza de tal  lugar a tal  
//charAt sirve para sacar una letra en concreto con la posicion de la letra 
//startsWith siver para buscar un texto y que te diga si es True(LO ENCONTRO)  o False (NO LO ENCONTRO)
//endsWith eso busca  un texto que se encuentre al final True (Encuentra) false (si no lo encuentra)
//includes buscar una palabra  exactamente True(encuentra)/ false(No lo encuentra)
//replace remplaza el texto por otro  (aremplazar,porcualseremplaza)
//slice Separa el String a partir del caracter que  yo quiera
//split separa las palabras y lo pone en un array tambien hacer array con espacios 
//trim llamo al metodo trim () recorta o quita los espacios que tenga por delante o por detras el string

//Plantillas de textos
//Sustituye 

var busqueda =  texto1.trim();
console.log(busqueda);


