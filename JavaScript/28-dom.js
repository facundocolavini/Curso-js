'use strict'

//DOM -Document Objet Model
// que es lo que conforma al dom y con que trabaja 
// <body>,<h1>,<p> estos ejemplos de los  elementos del dom 
//get element by id selecionar elemento desde el index con div
//Busco los elementos en el html con div 

//Una etiqueta es un elemento del DOM
//Conseguir elementos con un ID concreto
/*
function cambiaColor(color){
	caja.style.color=color;
}
*/

//Cambiar propiedades de un elemento selecionandolo
//Poner en el index  la etiqueta <script> debajo de todo para que pueda selecionar y ejecutar el querySelector
//Modificar contenido de la etiqueta 
//Modifica los atributos que tiene el elemento
	function cambiarColor(color){
		caja.style.background= color;
	}
									 //id
//var caja = document.getElementById("micaja"); //innerHTML saca el texto que tengo en la etiqueta del div
//Otra Forma de selecionar un elemento dentro del DOM usando Query selector
//con la almohadilla # selecionamos el ID y con el . selecionamos el nombre de clase
var caja = document.querySelector("#micaja");
caja.innerHTML= "ESTE TEXTO MODIFICADO DE LA ETIQUETA DIV ";//Modifico el texto de la etiqueta del index
caja.style.background ="red";
caja.style.padding="30px";
caja.style.color= "white";
//modifico  al elemento y le agrego un nombre de clase a la etiqueta con className
caja.className = "hola";

//console.log(caja);

//Etiquetas de HTML = se le dice elemento
//Conseguir elementos por su etiqueta
 
var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miseccion");
var hr=document.createElement("hr");



//Accerder a uno de los elementos del array de las etiquetas
var contenidoEnTexto= todosLosDivs[2]

//innerHTML permite modificar el valor del string del contenido
//contenidoEnTexto.innerHTML= "Hola 2!!!";
//contenidoEnTexto.style.background ="red";

//Recorrer los divs
var valor;
 
for(valor in todosLosDivs){
	if(typeof todosLosDivs[valor].textContent == 'string'){
		var parrafo = document.createElement("p"); //creo un parrafo 
		var texto = document.createTextNode(todosLosDivs[valor].textContent);//creo un texto y lo pongo dentro del parrafo
		parrafo.append(texto);
		seccion.append(parrafo);
	}	
 }

	seccion.append(hr);
//console.log(contenidoEnTexto);
/*

//var contenidoEnTexto= todosLosDivs[2];
var hr = document.createElement("hr");

var valor;
var seccion = document.querySelector("#miseccion");
for(valor in todosLosDivs){	
	if(typeof todosLosDivs[valor].textContent == 'string'){
		var  parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.append(texto);//append =añade despues
		seccion.append(parrafo); //prepend = añade antes
	}
}

seccion.append(hr);
//contenidoEnTexto.innerHTML="Otro texto para el segundo elemento"; //Manipulo el div

//console.log(contenidoEnTexto);


//Conseguir elementos por su clase  css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');

var div;

for (div in divsRojos){
	if (divsRojos[div].className =='rojo'){
		divsRojos[div].style.background ="red";
	}
}
*/



var div;
var divsRojos=document.getElementsByClassName("rojo");
var divsAmarillos=document.getElementsByClassName("amarillo");
divsAmarillos[0].style.background="yellow";
//console.log(divsAmarillos);

for(div in divsRojos){
	if( divsRojos[div].className == 'rojo'){
		divsRojos[div].style.background= "red";
	}
}
//console.log(divsRojos);

//console.log(caja);
//Query Selector sirve mas para salecionar una  id 
 
//console.log(todosLosDivs);

var id = document.querySelector("div.amarillo");
console.log(id);


var classRojo = document.querySelectorAll("div.rojo");
console.log(classRojo);

var classAmarillo = document.querySelectorAll("div.amarillo");
console.log(classAmarillo);
