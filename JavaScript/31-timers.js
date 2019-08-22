'use strict'

window.addEventListener('load',function(){
//Timers ejecuta algo cada tanto tiempo
//setTimeout solamente se ejecuta una vez en cierta cantidad de tiempo en este caso 3 segundos.
//setInterval nos permite ejecutar una funcion cada tanto tiempo
	function intervalo (){
	var tiempo = setInterval (function(){
		console.log("Set interval ejecutado");

		var encabezado= document.querySelector("h1");
		if (encabezado.style.fontSize == "50px"){
				encabezado.style.fontSize = "20px";
		}else{
			encabezado.style.fontSize = "50px";
		}	
		 
	},1000);
	return tiempo;
}


var tiempo = intervalo();
var stop= document.querySelector("#stop");
stop.addEventListener("click",function(){
	alert('Se paro el intervalo en bucle');
	clearInterval(tiempo);
});


var start= document.querySelector("#start");
	start.addEventListener("click",function(){
		alert('Se ha iniciado el intervalo en bucle');
		intervalo();
	 
	});

});