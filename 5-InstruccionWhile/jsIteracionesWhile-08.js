/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var numero;
	var suma;
	var producto;
	var respuesta;

	respuesta = true;

	contador = 0;
	suma = 0;
	producto = -1;

	
	while(respuesta)
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
			while(isNaN(numero) == true)
			{
				numero = prompt("ERROR! Ingrese un numero");
				numero = parseInt(numero);
			}
		contador = contador + 1;
		respuesta = confirm("Decea ingresar otro dato?");

		if(numero > 0)
		{
			suma = suma + numero;
		}
		if(numero < 0)
		{
			producto = numero * numero;
		}
	}
	

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdProducto").value = producto;
}