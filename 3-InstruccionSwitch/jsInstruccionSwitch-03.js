function mostrar()
{
	//tomo el mes
	var mes;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias.");
			break;
		default:	
			alert("Este mes tiene 30 dias o mas.")
	}
	
	


}//FIN DE LA FUNCIÓN