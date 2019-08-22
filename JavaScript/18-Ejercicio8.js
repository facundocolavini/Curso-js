'use strict'

/*
Hacer una calculadora
-Pida 2 numeros por pantalla
-Si metemos uno mal que nos los vuelva a pedir
-En el cuerpo de la pagina,en una alerta y por la consola el resultado de 
suma,restar,multiplicar y dividir esas 2 cifras
*/



var numero1 =parseInt(prompt("Ingrese el primer numero",0));
var numero2 =parseInt(prompt("Ingrese el segundo numero",0));
var suma=0;
var multiplicar=0;
var dividir =0.0;
var resta=0;

while(isNaN(numero1||numero2)){
	alert("INGRESE NUMEROS");
	numero1 =parseInt(prompt("Ingrese el primer numero",0));
	numero2 =parseInt(prompt("Ingrese el segundo numero",0));
}

var resultado="La suma es: "+(numero1+numero2)+" <br/>"+
			  "La resta es: "+(numero1-numero2)+" <br/>"+
			  "La multiplicacion es: "+(numero1*numero2)+" <br/>"+
			  "La division es: "+(numero1/numero2)+" <br/>";

var resultadoCMD="La suma es: "+(numero1+numero2)+"\n"+
			  "La resta es: "+(numero1-numero2)+" \n"+
			  "La multiplicacion es: "+(numero1*numero2)+" \n"+
			  "La division es: "+(numero1/numero2)+" \n";
alert(resultadoCMD);
console.log(resultadoCMD);
document.write(resultado);


//mi foma
suma=numero1+numero2;
alert("SUMA:"+suma );
console.log("SUMA:"+suma);
document.write("<h1>SUMA:"+suma+"</h1>");

resta=numero1-numero2;
alert("RESTA:"+resta );
console.log("RESTA:"+resta);
document.write("<h1>RESTA:"+resta+"</h1>");

multiplicar=numero1*numero2;
alert("MULTIPLICACION:"+multiplicar );
console.log("MULTIPLICACION:"+multiplicar);
document.write("<h1>MULTIPLICACION:"+multiplicar+"</h1>");

if(numero2!=0){
dividir=numero1/numero2;
alert("DIVISION:"+dividir);
console.log("DIVISION:"+dividir);
document.write("<h1>DIVISION:"+dividir+"</h1>");
}else{
	alert("NO SE PUEDE DIVIDIR POR 0");
	console.log("NO SE PUEDE DIVIDIR POR 0");
	document.write("<h1>NO SE PUEDE DIVIDIR POR 0</h1>");
}

