function mostrar() 
/*{
	var edad;
	var estado;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	mensaje = "Es muy pequeño para no ser soltero";

	if (edad < 18 && estado != "Soltero") {
		alert(mensaje);
	}


}*/
{
	var edad;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;
	
	edad = parseInt(edad);

	
		if(edad <13)
		{
			mensaje = ("Feliz dia");
		}
		else
		{
			if(edad <17)
			{
				mensaje = ("Usted es adolecente");
			}
			else
			{
				if(edad == 17)
				{
					mensaje = ("Ultimo año");
				}
			}
			if(edad >17)
			{
				mensaje = ("Tenes edad de laburar");
			}
				if(edad == 33)
				{
					mensaje = (mensaje + " como Cristo ");
				}
				else
				{
					if(edad >60)
					{
						mensaje = (mensaje + " a jubilarse");
					}
					else
					{
						if(edad == 88)
						{
							mensaje = (mensaje + " lindo numero");
						}
					}
				}
				
		}
	if(edad %2==0)
	{
		mensaje = (mensaje + " y " + edad + "  es un numero es par");
	}
 		alert(mensaje);
}				//FIN DE LA FUNCIÓN