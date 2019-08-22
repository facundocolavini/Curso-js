'user strict' // modo estricto ayuda y adecua a los standares de la syntaxis correcta

//VARIABLES 
//Una variable es un contenedor de informacion.

var pais = "España"; //variable de tipo texto va en comillas define una variable local 
var continente = "Europa";
var antiguedad = 2019;
var pais_y_continente=pais + ' ' + continente; //concatenacion de variables 
let prueba ="hola"; // variables de prueba
alert(prueba);

//Variables con nombres descriptivos 
//se puede reasignar elvalor de las variables desde la consola 

pais = "Mexico";
continente="Latinoamerica";
 //si pongo aca la concatenacion se me va a remplazar  por los valores Mexico y Latinoamerica

console.log(pais,continente,antiguedad);
alert(pais_y_continente);