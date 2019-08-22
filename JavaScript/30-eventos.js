'use strict'

//Eventos
//Un evento es una funcion que se ejecuta cuando sucede algo
 
//Eventos del raton 
//on click para cuando el usuario clique el boton se ejecute algo
//ondblclick

window.addEventListener('load',function(){
var boton = document.querySelector('#boton');
 
	function cambiarColor(){
		console.log("ME PRESIONASTES");
		var bg= boton.style.background;
		if(bg == "green"){
			boton.style.background="red";
		}else{
			boton.style.background="green";
		}

		//boton.style.padding="10px";
		//boton.style.border="1px solid #ccc"; // Estilo de manera global

		return true;
	}
	//Operador this  acede a los eventos  y objetos  aplicados 
	//Click
 	boton.addEventListener ('click',function(){
 		cambiarColor();
 		this.style.border ="2px solid black" //da referencia al objeto o elemento que estoy aplicando  ejemplo el boton
 	});
 	//Mouse Over
 	boton.addEventListener('mouseover',function(){
 		boton.style.background ="#ccc";
 	});
 	//Mouse Out
 	boton.addEventListener('mouseout',function(){
 		boton.style.background ="yellow";
 	});
 	//Focus
 	var input = document.querySelector('#campo_nombre');
 	input.addEventListener('focus',function(){
 		console.log('[focus]Estas dentro del input');
 	});
 	//Blur
	var input = document.querySelector('#campo_nombre');
 	input.addEventListener('blur',function(){
 		console.log('[blur]Estas fuera del input');
 	});
 	//Keydown
 	var input = document.querySelector('#campo_nombre');
 	input.addEventListener('keydown',function(event){
 		console.log('[keydown]Estas pulsando esta tecla:',String.fromCharCode(event.keyCode));
 	});
 	//Keypress
 	var input = document.querySelector('#campo_nombre');
 	input.addEventListener('keypress',function(event){
 		console.log('[keypress]Tecla presionada',String.fromCharCode(event.keyCode));
 	});
 	//Keyup
 	var input = document.querySelector('#campo_nombre');
 	input.addEventListener('keyup',function(event){
 		console.log('[keyup]Tecla soltada',String.fromCharCode(event.keyCode));
 	});
 });//endload
/*s
	//FORMA CORRECTA DE UTILIZAR EVENTOS Y CAPTURARLOS CON LISTENER

	var boton = document.querySelector("#boton");

	//Evento click captura el click
	boton.addEventListener('click', function(){
		cambiarColor();
	});


	//Mouse over , cuando se pase por encima del boton te lo cambia de colo

	boton.addEventListener('mouseover',function(){
		boton.style.background='yellow';
	});

	//Mouse out   cuando yo salgo del boton  se ejecuta el mouseout 

	boton.addEventListener('mouseout',function(){
		boton.style.background='#ccc';
	});

	//Focus
	var input = document.querySelector("#campo_nombre");
	input.addEventListener('focus', function(){
		console.log("[focus]]Estas dentro del Input");
	});

	//Blur
	var input = document.querySelector("#campo_nombre");
	input.addEventListener('blur', function(){
		console.log("[blur]Estas fuera del Input");
	});
		
	//Keydown
	var input = document.querySelector("#campo_nombre");
	input.addEventListener('keydown', function(event){
		console.log("[keydown]Pulsando esta tecla",String.fromCharCode(event.keyCode));//Sirve para capturar cosas del teclado pasadole un event pasa un keycode a un string

	});

	//Keypress cuando presiono una tecla 
	//var input = document.querySelector("#campo_nombre");
	input.addEventListener('keypress', function(event){
		console.log("[keypress]Tecla presionada",String.fromCharCode(event.keyCode));
	});

	//Keyup nos permite capturar el evento cuando levantamos el dedo de la tecla

	input.addEventListener('keyup', function(event){
		console.log("[keyup]Tecla soltada",String.fromCharCode(event.keyCode));
	});

	});//Load  lanza el evento cuando todos los elementos y todas las etiquetas de HTML estan cargadas

	*/