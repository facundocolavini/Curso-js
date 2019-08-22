'use strict'
//Fetch (ajax) y Peticiones asincronas /Apis rest
//AJAX = ASINCRON JAVASCRIPT ACCES X
//CON JSONPlaceholder : Es una API REST servicio o backend que devuelve datos en JSON 
// con metodos de peticiones POST PUT GET SON HTTP etc.Es un servicio que recibe una 
//informacion y nos  va a dar informacion  en  formato JSON  

//Hacer peticion y listar en Pagina web
//Listado de Post (listado de usuarios) 

//El metodo Fetch accede remotamente a los datos de la peticion.Y se queda esperando a cuando transformemos los datos recibidos a JSON 
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");
//Esto es un encadenamiento de promesas 
//then es para hacer peticiones asincronas
//fetch ('https://reqres.in/api/users') // Esto es una promesa por lo tanto va then (ajax)
	getUsuarios()//Devuelve  el resultado es una promeso entonces puede hacer el then
	.then(data => data.json()) //convertimos js a un objeto Json cuando recibamos los datos YA HACE RETURN
	.then(users => {//Los captura a los usuarios 
		listadoUsuarios (users.data); //listamos los datos de los usuarios
		return getInfo();
//Mostrar informacion en la pagina  map es igual forEach 
	})
	.then(data =>{
		div_profesor.innerHTML= data;
		return getJanet();
	})
	.then(data => data.json())
	.then(user =>{
		mostrarJanet(user.data);
	})
	.catch(error =>{ //Catch : Captura errores 
		alert('Error en  las peticiones');
	});
	
function getUsuarios(){
	return fetch('https://reqres.in/api/users'); //promesa y peticion al servidor
}
function getJanet(){
	return fetch('https://reqres.in/api/users/2');//promesa
	
}

function getInfo(){
	var profesor ={
		 nombre: 'Victor',
		 apellido:'Robles',
		 url:'http://victorroblesweb.es'
	};

	return new Promise((resolve,reject)=>{
		
		var profesor_string = " ";
		setTimeout(function(){
			var profesor_string = JSON.stringify(profesor);
			if(typeof profesor_string !='string'|| profesor_string =='') return reject('error');
		
		return resolve(profesor_string);
		},3000);

	}); //El new es para instancia una clase o para instanciar un objeto
}

	//convierte el data a un objeto JSON usable

	//Tambien asi es igual 
/*
fetch ('https://reqres.in/api/users?page=2')
	.then(data=>
	 return data.json()) //convertimos js a un objeto Json
	.then(users=>{ //ya tenemos la informacion formateada  y  la capturamos
		usuarios = data; la capturamos
		console.log (usuarios);
	});
	*/
	//Promesas y Fetch 
function listadoUsuarios (usuarios){
	usuarios.map((user,i)=> {
			let nombre = document.createElement('h3');
			nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name; 
			div_usuarios.appendChild(nombre);
			document.querySelector(".loading").style.display='none';
		});
}
function mostrarJanet (user){//Le paso el usuario no uso map por que es un objeto limpio
			console.log(user);
			let nombre = document.createElement('h4');
			let avatar = document.createElement('img');
			nombre.innerHTML =  user.first_name + " " + user.last_name; 
			avatar.src= user.avatar;
			avatar.width= '100';
			div_janet.appendChild(nombre);
			div_janet.appendChild(avatar);
			document.querySelector("#janet .loading").style.display='none';
}