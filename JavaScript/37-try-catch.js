'use strict'
//try-catch controla  y captura los errores y avisar al usuario
 
//todo codigo suceptible a fallos se mete dentro del try que significa prueba
try{
var year = 2019;
alert (year);
var vector = new Array(999999999999999999);// Si se define un array muy grande va a fallar y  da un error

console.log(decodeURIComponent("https://v&%ctdorroblesweb.es")); //se usa este metodo cuando tiene una url  decodificada, la url en la consola
}catch (error){
	console.log(error);
	alert('A ocurrido un error en el codigo');
} //Captura el error del try  o puede hacer algo 
