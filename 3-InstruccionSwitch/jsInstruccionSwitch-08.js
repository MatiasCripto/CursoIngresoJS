function mostrar()
{
	var destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("Hace Frio.");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Hace Calor.");
			break;			

	}








}//FIN DE LA FUNCIÓN