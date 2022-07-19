function mostrar()
{
	//tomo el mes
	var mes;
	var mensaje;

	mes = document.getElementById("txtIdMes").value;

	if (mes == "Enero")
	{
		mensaje = ("Que comiences bien el año");
	}
	else
	{
		if ( mes == "Marzo")
		{
			mensaje = ("A clases");
		}
		else 
		{
			if (mes == "Julio")
			{
				mensaje = ("Se vienen las vacaciones");
			}
			else
			{
				if (mes == "Diciembre")
				{
					mensaje = "Felices fiestas"
				}
				else
				{
					mensaje = ("No hay mensaje para mostrar");
				}
			}
		}
	}
			alert(mensaje);
}

	



//FIN DE LA FUNCIÓN