//ESTE ES UN EJERCICIO DE FORMULARIO DE PRUEBA QUE PROBE EN BASE AL TUTORIAL DE YOUTUBE DE J&G PROYECTOS WEB

function validar(){
	var nombre, apellido, telefono, email, edad, expresion_email;
	nombre=document.getElementById("nombre").value;
	apellido=document.getElementById("apellido").value;
	telefono=document.getElementById("telefono").value;
	email=document.getElementById("email").value;
	edad=document.getElementById("edad").value;
	//las expresiones regulares nos permiten evaluar una cadena de caracteres con un formato indicado
	//la expresion para validar el email de manera mas estricta no es esta
	expresion_email= /\w+@\w+\.+[a-z]/;

	if(nombre=="" || apellido=="" || telefono=="" || email=="" || edad==""){
		alert("Todos los campos son obligatorios");
		return false;
	}
	else if(nombre.length>20){
		alert("El nombre que ingresaste es muy largo");
		return false;
	}
	else if(apellido.length>20){
		alert("El apellido que ingresaste es muy largo");
		return false;
	}
	else if(email.length>100){
		alert("El email que ingresaste es muy largo");
		return false;
	}
	else if(!expresion_email.test(email)){
		alert("El email que ingresaste no es valido");
		return false;
	}
	else if(telefono.length<8 || telefono.length>12 || isNaN(telefono)){
		alert("El numero de telefono que ingresaste es invalido");
		return false;
	}
	
}
