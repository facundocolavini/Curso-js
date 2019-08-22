'use strict'

//Operadores

var numero1= 7;
var numero2=12;
var operacion= numero1 * numero2;

alert("El resultado de la operacion es: "+operacion);


//Tipos de datos
//entero , string(cadena de texto ,caracteres),comaflotante decimal,booleano,array y objetos.

var numero_entero=44;
var cadena_texto="Hola que tal";
var verdadero_o_falso =true;//se puede poner tambien como 1 (true) o 0 como (false)
var  numero_falso="33";

//Number ()// transforma un strin a un flotante o otro numero decimal
//parseInt()//transforma un string a entero
//parseFloat()//transforma un string a un float
//String a entero 
console.log(parseFloat(numero_falso)+5);

//Entero a string concatenacion 
//String Cconvierte el contenido de la variable a texto
console.log (String(numero_entero)+4);

//typeof () indica de que tipo es mi variable
console.log (typeof numero_entero);
console.log (typeof cadena_texto);
console.log (typeof verdadero_o_falso);
console.log (typeof numero_falso);
