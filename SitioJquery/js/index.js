//primero declaro las variables para el array del slide
	var ArraySlider=['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg', 'img/slide4.jpg', 'img/slide5.jpg'];
	var imagenSlider= $('#imagenSlider');
	var pos= $(imagenSlider).attr('data-pos');


//variables del formulario 
var formulario = document.getElementById('formulario');
var nombre = formulario.nombre;
var email = formulario.email;
var error = document.getElementById('error');
var errores = [];

//INICIO DEL DOCUMENT READY 
$(document).ready(function(){
	//esto es para el modal
	$('.img_peque').on('click', function(){ 

	imagen=$(this).data('img');
	url='img/'+imagen;
	console.log(url);
	$('#img_grande').attr('src', url);
	});	

	//para animar el menu 
	$('.menu') .on('click',function(e){
	e.preventDefault();

	link= $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(link).offset().top
	},1000);
    
    });//cierre .menu .onclick

	//para hacer cambio de las imagenes NO FUNCA HAY QUE REVISAR

	/*var cambio = $('.carrete');
	cambio.on('mouseenter', function(){
		imagen=$(this).data('img');
		url='img/'+imagen;
		$('.carrete').attr('src', url);
	});*/

	//slider

	/*//primero declaro las variables 
	var ArraySlider=['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg', 'img/slide4.jpg', 'img/slide5.jpg'];
	var imagenSlider= $('#slider');
	var pos= $(imagenSlider).attr('data-pos');*/

	setInterval(slider,3000);

	//FUNCION QUE VALIDA FORMULARIO
	$('#enviar').on('click', function(){
		validarFormulario();
	});

}); 
//fin document.ready

//FUNCION PARA EL SLIDE EN LA SECCION "SOBRE"
function slider(){
		$(imagenSlider).fadeOut('slow', function(){

			$(this).attr('src', ArraySlider[pos]);

			$(this).fadeIn('slow', function(){
				if(pos < ArraySlider.length-1){
					pos++;
					//console.log(pos);
				}else{
					pos=0;
					//console.log(pos);
				}// cierre else

			});//cierre fadeIn

		});//cierre fadeOut


}//cierre function slide



//VALIDAR EL FORMULARIO
	function soloLetras(x) { //Valido nombre con expresion regular//

	expr = /^([a-zA-Z]{3,50})*$/ ; //expresion regular de intervalos de letras min 4 caracteres max 50//
	if(expr.test(x)) {
		return true;
	}
	return false;
	} //Fin soloLetras //

	function validarNombre(e){ //Funcion para validar el nombre//
		
		if(nombre.value == '' || nombre.value == null){
			console.log('nombre vacio');
			/*error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el nombre</li>';*/
			errores.push('<li>Completa el nombre, por favor</li>');
			//e.preventDefault();
		} 
		else {
			if (!soloLetras(nombre.value)) {
				console.log('Nombre invalido');
				/*error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá un nombre valido</li>';*/
				errores.push('<li>Ingresá un nombre valido, por favor</li>');
				//e.preventDefault();
			} else {
				return true;
			}
		}
		return false;	
	} //Fin validarNombre//

	function validarEmail(e) { //Funcion para validar formato de mail//
		expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //Expresion regular para chequear formato mail//
		if (email.value == '' || email.value == null) {
			console.log('mail vacio');
			/*error.style.display = 'block';
			error.innerHTML += '<li>Por favor completá el e-mail.</li>';*/
			errores.push('<li>Por favor completá el e-mail.</li>');
			//e.preventDefault();
		}else{
			if (!expr.test(email.value)) {
				console.log('mail invalido');
				/*error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá un e-mail válido.</li>';*/
				errores.push('<li>Por favor ingresá un e-mail válido.</li>');
				//e.preventDefault();
			}else{
				return true;
			}
		}
		return false;
	} //Fin validarEmail//

	function validarFormulario(e){
		error.innerHTML = '';
		errores = [];

		validarNombre(e);
		validarEmail(e); 

		if(errores.length == 0) {
			var datos = $('#formulario').serialize();
			console.log(datos);
			//formulario.submit();
		} else {
			error.style.display = 'block';
			for (i=0; i<errores.length; i++) {
				error.innerHTML += errores[i];
			}
		}		
	} //Fin validar formulario//
