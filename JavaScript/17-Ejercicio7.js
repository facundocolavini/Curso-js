'use strict'

/*
Tabla de multiplicar de un numero introducido por  pantalla

*/


var numero1 = parseInt(prompt("Ingrese el numero de la tabla que quiere",0));
var resultado=0;
var i=1;

document.write("<h1>La tabla del "+numero1+"</h1>");

for(var i=1;i<=10;i++){
	resultado=numero1*i;
	document.write(numero1+"x"+i+"="+resultado+"<br/>");
}
//Todas las tablas
document.write("<h1>Todas las tablas</h1>");
for(var k=1;k<=10;k++){
	document.write("<h1>La tabla del "+k+"</h1>");
	for(var i=1;i<=10;i++){
		resultado=k*i;
		document.write(k+"x"+i+"="+resultado+"<br/>");
		
	}
}