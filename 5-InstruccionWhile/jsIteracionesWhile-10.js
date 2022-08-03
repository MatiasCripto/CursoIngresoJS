/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivo;
	var contadorNegativo;
	var contadorDeCeros;
	var contadorPares;
	var promedioPos;
	var promedioNeg;
	var diferencia;

	// asigno valor a las variables
	sumaPositivos = 0;
	sumaNegativos = 0;
	contadorNegativo = 0;
	contadorPositivo = 0;
	contadorDeCeros = 0;
	contadorPares = 0;
	

	respuesta = true;

	while(respuesta)
	{
		//tomo valor por prompt y parseo
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		//valido que sea numero
		while(isNaN(numeroIngresado) == true)
		{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		}
			// discrimino numeros pares
			if((numeroIngresado % 2) == 0)
			{
				contadorPares = contadorPares + 1;
			}
		
				if(numeroIngresado > -1)
				{
					sumaPositivos = sumaPositivos + numeroIngresado;
					contadorPositivo = contadorPositivo + 1;
				}
				else 
				{
					sumaNegativos = sumaNegativos + numeroIngresado;
					contadorNegativo = contadorNegativo + 1;
				}
			if(numeroIngresado == 0)
			{
				contadorDeCeros = contadorDeCeros + 1;
			}	
		
		respuesta = confirm("desea continuar?");
	}//fin del while
	promedioNeg = sumaNegativos / contadorNegativo;
	promedioPos = sumaPositivos / contadorPositivo;

	diferencia = sumaPositivos - sumaNegativos;

	document.write("la suma de negativos es : " + sumaNegativos);
	document.write("<br>");
	document.write(" la suma de positivos es : " + sumaPositivos);
	document.write("<br>");
	document.write(" la cantidad de positivos es : " + contadorPositivo);
	document.write("<br>");
	document.write(" la cantidad de negativos es : " + contadorNegativo);
	document.write("<br>");
	document.write(" la cantidad de pares es : " + contadorPares);
	document.write("<br>");
	document.write(" el promedio de los positivos es : " + promedioPos);
	document.write("<br>");
	document.write(" el promedio de los negativos es : " + promedioNeg);
	document.write("<br>");
	document.write(" la diferencia entre positivos y negativos es : " + diferencia);
	document.write("<br>");
	document.write(" la cantidad de ceros es : " + contadorDeCeros);
}//FIN DE LA FUNCIÓN