/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var numero; 
	var mensaje;

	numero = 0;
	mensaje = "";

	while(numero < 10)
	{
		numero = numero + 1;
		mensaje = mensaje + numero + " ";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN