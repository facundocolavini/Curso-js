'use strict'

//Local Storage  es una sesion que mantiene la informacion.
//Que es . HTML5WEB Storage guarda la informacion a modo de sesion para que persista toda infomacion.
//Se aplica  en aplicaciones web.Se utiliza en la sesiones pero a nivel de backend.
//Es una memoria que tenemos en el pc

//Commprobar disponibilidad del local storage
if (typeof (Storage)!=='undefined'){
	console.log("Localstorage disponible");
}else{
	console.log("incompatible con Localstorage");
}

//Guardar datos en el Local Storage
localStorage.setItem("titulo","Curso de js");
//desde la Aplicacion se le puede agregar valores  al Local storage la memoria del ordenador

//Recuperar elemento  y agregarlo a HTML
//Guardo String
document.querySelector('#peliculas').innerHTML=localStorage.getItem("titulo");


//Guardo un Objeto JSON en el Local Storage
var usuario = {
	nombre: "Facundo Colavini",
	email: "facu_colavini@hotmail.com",
	web:"victorroblesweb.es"
};

 localStorage.setItem("usuario",JSON.stringify(usuario));//JSON.stringify() con este metodo combierto mi objeto JSON a un string
//Local Storage no permite guardar un objeto de JS en formato puro. 

//Recuperar del Local Storage a objet JSON de JS
//convertir JSON string  a un JSON usable por JS hay un metodo que se llama JSON.parse convierte un objeto  Json string a Json de JS
var user = JSON.parse(localStorage.getItem("usuario")); 
console.log(user);
document.querySelector("#datos").append(" "+user.web +" - " +user.nombre);

//Remover la memoria de Localstorage
localStorage.clear(); //vacia todo lo que tenga ene localstorage
//localStorage.removeItem("usuario");