/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var numero; 
	var mensaje;

	numero = 11;
	mensaje = "";

	while(numero > 1)
	{
		numero = numero - 1;
		mensaje = mensaje + numero + " ";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN