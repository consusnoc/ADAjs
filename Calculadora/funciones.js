function suma (numero1,numero2){
	var adicion= parseInt(numero1)+ parseInt(numero2);
	document.write('La suma de los numeros es: '+ adicion);
	return adicion;
}

function resta (numero3, numero4){
	var sustraccion= parseInt(numero3)- parseInt(numero4);
	document.write('La resta de los numeros es: '+ sustraccion);
	return sustraccion;
}

function multiplicacion(numero5, numero6) {
	var mult= parseInt(numero5)* parseInt(numero6);
	document.write('La multiplicacion es de: '+ mult);
	return mult;
}

function division(numero7, numero8){

	if(numero8==0){
		document.write("Escriba un numero distinto de cero");
	}else{
		var div= parseInt(numero7)/ parseInt(numero8);
		document.write("La division es: "+ div);
	}
	return div;

}