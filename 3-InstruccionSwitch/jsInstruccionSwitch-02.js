function mostrar()
{
	//tomo el mes
	var mes;
	var mensaje;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = ("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":						
			mensaje = ("Abrigate que hace frio");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":				
			mensaje = ("Ya pasamos el frio, ahora calor!!!.");

	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN