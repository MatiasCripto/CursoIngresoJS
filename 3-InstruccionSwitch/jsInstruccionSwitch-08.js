function mostrar()
{
	var destino;
	var mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = ("Hace Frio.");
		break;
		case "Mar del plata":
		case "Cataratas":
			mensaje = ("Hace Calor.");
		break;			

	}
	
	
	
	alert(mensaje);








}//FIN DE LA FUNCIÓN