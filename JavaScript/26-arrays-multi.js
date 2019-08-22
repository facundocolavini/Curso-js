'use strict'

//Array multidimensionales
//Son arrays adentro de otros arrays

var categorias =['Accion','Terror','Comedia'];
var peliculas =['La verdad duele','La vida es bella','Gran Torino'];

var cine = [categorias,peliculas];//array multidimensionales
peliculas.reverse();


//console.log(cine[0][1]);
//console.log(cine[1][2]);

//Añadir elementos al arrray con el metodo push
 
 /*
var elemento ="";	
do{
 	elemento = prompt("Introduce tu pelicula");
	peliculas.push(elemento);
}while(elemento!="ACABAR")
*/

//peliculas[0]=undefined;//Elimina una propiedad del array o pone el elemento en undefeined

//peliculas.pop(); saco un varlo del array

//Sacar un indice(elemento) que yo quiero de un array
var indice = peliculas.indexOf('Gran Torino'); //Busca el numero de indice de ese array

if (indice>-1){      //cual//cuantos
	peliculas.splice( indice ,0 ); //Elimina los indice a partir del cual se le  indica
}

//CONVERTIR UN ARRAY A TEXTO CON JOIN

var peliculas_string = peliculas.join();
console.log(typeof(peliculas_string));
//CONVERTIR UN STRING A UN ARRAY

var cadena="texto1,texto2,texto3";
var cadena_array=cadena.split(",");//
console.log(peliculas_string);//que me convierta  en un array todo lo que este separado por coma
 
console.log(cadena_array);
