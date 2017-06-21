$(document).ready(function(){
	$('#msj').hide(); //Con esta funcion oculto el div, le da un "display:none" al modulo

	//Hago la funcion para el ingreso
	$('#ingresar').on('click', function(){ 

		user = $('#username').val(); //.val es lo mismo que conocemos como .value
		password = $('#password').val();

		if(user == 'pepe' && password == '123456'){
			$('#msj').show();
			$('#msj').append('<p>Welcome</p>');
		}
		else{
			$('#msj').show();
			$('#msj').append('<p>Failed login</p>');
		}
	});

	var boton = $('#boton');
	boton.on('mouseenter', function(){
		document.body.style.background='#000';
	});

	boton.on('mouseleave', function(){
		document.body.style.background="#546F30";
	});
});