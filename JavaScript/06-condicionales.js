'use strict'

//Condicional if 
//Si A es igual a B entonces haz algo  (comparar algo con otra cosas)
//Operadores relacionales 
/*
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual  ==
Distinto: !=
*/
var edad1=100;
var edad2=12;


//Si pasa esto 
if (edad1>edad2){
	//Ejecuta esto 
	console.log("Edad uno es mayor que edad2");
}else{
	console.log("La edad uno es inferior");	
}


var edad = 74;
var nombre= 'David Suarez';

if (edad>=18){
	console.log(nombre +" tiene "+edad+" años, es mayor de edad");

	if(edad <=33){
		console.log("Todavia sos millenial");	
	}else if (edad>=70) {
		console.log("Sos anciano");	
	}else{
		console.log("Ya no sos millenial");
	}
	

}else{
	console.log(nombre+" tiene "+edad+" años,es menor de edad");

}

/*Operadores Logicos
AND:&&
OR: ||
NEGACION !

*/
//Negacion

var year =2028;
if (year !=2016){
	console.log("El año no es 2016, realmente es: "+year);	
}

//AND

if(year >=2000 && year<=2020 ){
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en la era post moderna");
}

//OR
if (year==2008 || (year >= 2018 && year == 2028)){
	console.log("El año acaba en 8");
}else{
	console.log("AÑO NO REGISTRADO");
}

