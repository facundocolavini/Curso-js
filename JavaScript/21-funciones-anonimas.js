'use strict'

//Funcion anonimas
//no tienen nombre , se utiliza para callbacks
//Es una funcion que no tiene nombre

//funcion anonima
var pelicula= function(nombre){
	return "La pelicula es:" +nombre;
} 

//Callbacks  es un funcion dentro de otra funcion
									//funcionanonimas			
function sumame(numero1,numero2,sumaYmuestra,sumaPorDos){
	var sumar= numero1+numero2;
	sumaYmuestra(sumar);
	sumaPorDos (sumar);
	
	return sumar;
}
				
sumame(5,7,function(dato){
	console.log("La suma es: ",dato);
},function(dato){
	console.log("La suma por dos es: ",(dato*2));
});

//CON FLECHA

sumame(5,7,(dato) =>{
	console.log("La suma es: ",dato);
},(dato)=>{
	console.log("La suma por dos es: ",(dato*2));
});
