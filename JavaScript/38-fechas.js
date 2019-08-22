
var fecha = new Date(); // Variable del tipo fecha para poder trabajar con fechas 
var year = fecha.getFullYear(); //saco el año en base a una fecha
var mes = fecha.getMonth()+1;//Saca el mes actual
var dia = fecha.getDate();//Saca el dia actual
var hora = fecha.getHours();//Saca la hora actual
var minutos = fecha.getMinutes();//Saca los minutos actuales
var segundos = fecha.getSeconds();//Saca los segundos actuales
var textoHora =`
	El años es : ${year}  
	El mes es : ${mes}
	El dia es : ${dia}
	La hora es : ${hora}:${minutos}:${segundos}
`; // son variables por interpolacion por eso el ${var}
console.log(textoHora)
console.log(Math.ceil(Math.random()*10));
// console.log(Math.ceil()); //Convierte un numero en entero