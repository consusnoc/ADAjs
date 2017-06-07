//PARA CAMBIAR COLOR DE FONDO, ES UNA BOLUDEZ QUE SE ME OCURRIO PONERLE, NO TIENE NADA QUE VER CON EL FORMULARIO

/*var bodyBg= document.getElementById("body_bg");

var colorWeb=prompt("Escribi el color de fondo que quieras: celeste, verde o lila");

if(colorWeb!="celeste" && colorWeb!="verde" && colorWeb!="lila"){
	alert("Ese color no esta contemplado, volve a elegir");
}

else if(colorWeb=="celeste"){
	bodyBg.style.backgroundColor="#B5D8EB";
}

else if(colorWeb=="verde"){
	bodyBg.style.backgroundColor="#93DFB8";
}

else{
	bodyBg.style.backgroundColor="#E3AAD6";
}*/




//FORMULARIO

/*function enviar(){
 	var validarLetras = document.getElementById('nombre', 'apellido').value;
 	var validarTel = document.getElementById('telefono').value;
    var validarMail = document.getElementById('email').value;
    var validarEdad= document.getElementById('edad').value;
}*/

//var form_errores=document.getElementById("datos_formulario");


function validar(nombre,apellido, telefono, edad, email){

	var datos_formulario=[];

	/*if ( validarTel(telefono) && validarEdad(edad) && validarMail(email) && validarLetras(apellido) && validarLetras(nombre) &&){
		return true;
	}
	return false;*/

	if (!campoRequerido(nombre) && !campoRequerido(apellido) && !campoRequerido(telefono) && !campoRequerido(email) && !campoRequerido(edad)){

		if(!validarLetras(nombre)){
			datos_formulario[0]= alert("El nombre solo puede tener letras");
		}
		if(!validarLetras(apellido)){
			datos_formulario[1]= alert("El apellido solo puede tener letras");
		}
		if(!validarTel(telefono)){
			datos_formulario[2]= alert("El telefono es invalido");
		}
		if(!validarEdad(edad)){
			datos_formulario[3]= alert("Tenes que ser mayor de 21");
		}
		if(!validarMail(email)){
			datos_formulario[4]= alert("El email ingresado es invalido");
		}
	}//cierre if campo requerido
}//cierre de la function validar

//Esta funcion sirve para validar que el usuario haya completado todos campos requeridos
//si algun campo esta vacio, va a retornar false
function campoRequerido(x){
	if(x.length==0){
		return true;
	}
	return false;
}

//VALIDAR SOLO PARA CARACTERES DE LETRA:NOMBRE Y APELLIDO
function validarLetras(x){
	//Expresion regular: es una forma logica de escribir una condicion
	//Esta es la expresion para validar solo letras, con un minimo de 4 caracteres y un maximo de 50 
	expr= /^[a-zA-Z]{4-50}*$/;
	if (expr.test(x)){
		return true;
	}
	return false;
}

//VALIDAR TELEFONO: Tengo que limitar la cantidad de caracteres (8 y 12) y que sean solo numeros
function validarTel(telefono){
	if((tel.length >= 8 && tel.length <= 12) && (!isNaN(tel))){
		return true;
	}
	return false;
}

//VALIDAD EDAD: Tiene que ser mayor de 21 y menor a 120
function validarEdad(edad){
	if(!isNaN(edad)){
		var edadUser= parseInt(edad); //si o si tengo que pasarlo a numerico
		if(edadUser > 21 && edadUser < 120){
			return true;
		}
	}
	return false;
}

//VALIDAR MAIL: lo tengo que validar con una expresion regular; es una forma logica (complicada para definir o validar intervalos). 
function validarMail(email){
	//Expresion regular: es una forma logica de escribir una condicion, esta es la expresion para validar el mail: 
	expr= /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;

	if (expr.test(mail)){
		return true;		
	}
	return false;
}
