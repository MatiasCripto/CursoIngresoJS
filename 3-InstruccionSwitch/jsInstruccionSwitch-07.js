function mostrar()
{
	var destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":	
			alert("Se encuentra en el sur del pais.");
			break;
		case "Cataratas":
			alert("Se encuentra en el norte del pais.");
			break;
		case "Mar del plata":
			alert("Se encuentra en el este del pais.");
			break;
		

	}

}//FIN DE LA FUNCIÓN