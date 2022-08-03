/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	//iniciar variables

	banderaDelPrimero = "es el primero";
	respuesta = true;
	while(respuesta)
	{		
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)== true)
		{
			numeroIngresado = prompt("ERROR!! Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
			
		}
		if(banderaDelPrimero == "es el primero")
		{
			numeroMinimo = numeroIngresado; 
			numeroMaximo = numeroIngresado;
			banderaDelPrimero = "Ya no";
		}
		else
		{
			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
			else
			{
				if(numeroIngresado > numeroMaximo)
				{
					numeroMaximo = numeroIngresado; 
				}
			}
		}
		respuesta = confirm("Desea ingresar otro dato?")
	}
	
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN