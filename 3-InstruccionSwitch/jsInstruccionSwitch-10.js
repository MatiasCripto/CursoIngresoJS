function mostrar() 
/*{
	var estacion;
	var destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion) {
		case "Verano":
			if (destino == "Mar del plata" || "Cataratas") {
				alert("Se viaja")

			} else {
				mensaje = "No se viaja"
			}
			break;
		case "Invierno":
			if (destino == "Bariloche") {
				alert("Se viaja")

			} else {
				alert("No se viaja")
			}
			break;
		case "Otoño":
			alert("Se viaja")

			break;
		case "Primavera":
			if (destino == "Bariloche") {
				alert("No se viaja")

			} else {
				alert("Se viaja")
			}
			break;

	}


}//FIN DE LA FUNCIÓN*/





{
	var estacion;
	var destino;
	var mensaje;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje = ("Se viaja");
				break;
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
					mensaje = ("No se viaja");
				break;
			}

	}
	switch(estacion)
	{

		case "Verano":
			switch(destino)
			{
				case "mar del plata":
				case "Cataratas":
					mensaje = ("Se viaja");
				break;
				case "Cordoba":
				case "Bariloche":
					mensaje = ("No se viaja");
				break;
			}	
	}
	switch(estacion)
	{

		case "Otoño":
			switch(destino)
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
					mensaje = ("Se viaja");
				break;		
			}	
	}	
	switch(estacion)
	{

		case "Primavera":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
					mensaje = ("Se viaja");
				break;
				case "Bariloche":
					mensaje = ("No se viaja");
				break;		
			}	
				
	}
	alert(mensaje);

}