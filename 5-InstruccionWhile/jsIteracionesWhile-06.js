function mostrar()
/*{
	var acumulador;
	var promedio;
	var numero;
	var entrada;

	entrada = 0;
	acumulador = 0;


	
	while(entrada < 5)
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		acumulador = acumulador + numero;

		entrada = entrada + 1;

	}
	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN*/
{
	var contador;
	var numero;
	var suma;
	var promedio;

	contador = 0;
	suma = 0;

	while(contador < 5)
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		suma = suma + numero;
		contador = contador + 1;
	}
	promedio = suma / 5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
}