/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()

/*{	var importe;
	var descuento;
	var resultado;

	
	importe = parseInt(document.getElementById("txtIdImporte").value);
	
	
	descuento = importe * 25 / 100;

	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;
}	*/
/*{

	var importe;
	var descuento;
	var resultado;
	
	
	importe = parseInt(importe);
	importe = prompt("Ingrese importe");
	
	
	
	
	descuento = importe * 25 / 100;
	
	resultado = importe - descuento;
	
	document.getElementById("txtIdResultado").value = resultado;
}*/
{
	var importe;
	var porcentaje;
	var resultado;

	importe = document.getElementById("txtIdImporte").value;

	importe = parseInt(importe);

	porcentaje = importe * 25 / 100;

	resultado = importe - porcentaje;

	document.getElementById("txtIdResultado").value = resultado;
}

