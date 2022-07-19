function mostrar()
{
	
	var mes;
	var mensaje;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = ("Tiene 31 dias");
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = ("Tiene 30 dias");
		break;										
		case "Febrero":
			mensaje = ("Tiene 28 dias");
		break;
		

	}
	alert(mensaje);
}