function mostrar()
{
	//tomo el mes
	var mes;
	var mensaje;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
			mensaje = ("Este mes no tiene mas de 29 dias.");
			break;
		default:	
			mensaje = ("Este mes tiene 30 dias o mas.")
	}
	
	alert(mensaje);


}//FIN DE LA FUNCIÓN