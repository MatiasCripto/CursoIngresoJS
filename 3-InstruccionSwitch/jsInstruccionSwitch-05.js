function mostrar()
{
	//tomo la hora
	var hora;
	var mensaje;

	hora = document.getElementById("txtIdHora").value;

	hora = parseInt(hora);

	switch(hora){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = ("Es de mañana");
		break;				
		default:
		{
			mensaje = ("No se ingreso una hora de mañana");
		}
	}
	
	alert(mensaje);
	



}//FIN DE LA FUNCIÓN