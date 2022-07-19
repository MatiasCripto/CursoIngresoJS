function mostrar()
{
	var destino;
	var mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			mensaje = ("Se encuentra al oeste");
		break;	
		case "Ushuaia":	
			mensaje = ("Se encuentra en el sur del pais.");
		break;
		case "Cataratas":
			mensaje = ("Se encuentra en el norte del pais.");
		break;
		case "Mar del plata":
			mensaje = ("Se encuentra en el este del pais.");
			break;
		

	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN