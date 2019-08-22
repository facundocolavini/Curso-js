'use strict'


//	BOM - Browser Object Model

function getBom(){
//console.log(window.innerWidth);//Acceder al objeto del navegador de la ventana y saca el ancho
//console.log(window.innerHeight); //Acceder al objeto del navegador de la ventana y saca el alto 
console.log(screen.height);//
console.log(screen.width);//
console.log(window.location);//Indica la url donde estamos href
}


function redirect (url){
window.location.href = url;
}



//Abre ventana del navegador
function abrirVentana (url){
	window.open(url,"","width=900,height=300");
}


getBom();


