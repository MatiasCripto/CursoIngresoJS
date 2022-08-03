/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var numero;
	var suma;
	var promedio;
	var respuesta;

	respuesta = true;

	contador = 0;
	suma = 0;

	
	while(respuesta)
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
			while(isNaN(numero) == true)
			{
				numero = prompt("ERROR! Ingrese un numero");
				numero = parseInt(numero);

			}
		

			
		suma = suma + numero;
		contador = contador + 1;
		respuesta = confirm("Decea ingresar otro dato?");
	}
	promedio = suma / contador;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
}