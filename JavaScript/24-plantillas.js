'use strict'

//Plantillas de texto

var nombre = prompt("PONER UN NOMBRE");
var apellidos = prompt ("PONER TU APELLIDO");

//var texto ="Mi nombre es : " +nombre + " <br/>Mis apellidos : "+apellidos;

//Plantilla 
var texto =`
	<h1> Hola que tal </h1>
	<h3>Mi nombre es: ${nombre}</h3>
	<h3>Mi apellidos es: ${apellidos}</h3>
`;
document.write(texto);