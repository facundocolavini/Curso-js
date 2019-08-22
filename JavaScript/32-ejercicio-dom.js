'use strict'


window.addEventListener('load',function(){
	console.log('DOM Cargado');

var formulario = document.querySelector("#formulario");
var box_dashed = document.querySelector(".dashed"); 
box_dashed.style.display= "none";



formulario.addEventListener('submit',function(){
	console.log ('Submit capturado');

	var nombre = document.querySelector("#nombre").value;
	var apellido = document.querySelector("#apellido").value;
	var edad = parseInt(document.querySelector("#edad").value);
 	
 	if (nombre.trim() == null || nombre.trim().length == 0){
 		alert('Nombre no es valido');
 		document.querySelector("#error_nombre").innerHTML = 'El nombre no es valido !';
 		return false;
 	}else{
 		document.querySelector("#error_nombre").style.display ="none";
 	}
 	if (apellido.trim() == null || apellido.trim().length == 0){
 		document.querySelector("#error_apellido").innerHTML= 'El apellido no es valido !';
 		alert('El apellido no es valido');
 		return false;
 	}else{
 		document.querySelector("#error_apellido").style.display ="none";
 	}	
 	if (edad == null || edad <= 0 || isNaN(edad)){
 		document.querySelector("#error_edad").innerHTML = 'La edad no es valida !';
 		alert('La edad no es valido');
 		return false;
 	}else{
 		document.querySelector("#error_edad").style.display ="none";
 	}	

 	box_dashed.style.display= "block";

	var p_nombre = document.querySelector("#p_nombre span");
	var p_apellido = document.querySelector("#p_apellido span");
	var p_edad = document.querySelector("#p_edad span");

	p_nombre.innerHTML = nombre;
	p_apellido.innerHTML = apellido;
	p_edad.innerHTML = edad;

	/*
 	var indice;
	var datosUsuario=[nombre,apellido,edad];
	for (indice in datosUsuario){	
	var  parrafo = document.createElement("p");
		parrafo.append(datosUsuario[indice]);
		box_dashed.append(parrafo);
	}
	*/
});

});
