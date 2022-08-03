/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoIngresado;
	var legajoIngresado;
	var nacionalidadIngresada;
	var contador;

	contador = 0;

	
	while(contador < 1)
	{
		edadIngresada = prompt("Ingrese una edad");
		edadIngresada = parseInt(edadIngresada);

		while(edadIngresada <0 || edadIngresada >90)
		{
			edadIngresada = prompt("Ingrese una edad valida");
			edadIngresada = parseInt(edadIngresada);
		}
		document.getElementById("txtIdEdad").value = edadIngresada;
		
		sexoIngresado = prompt("Ingrese un sexo: M o F");
		while(sexoIngresado != "M" && sexoIngresado != "F")
		{
			sexoIngresado = prompt("Ingrese un sexo valido: M o F");
		}
		document.getElementById("txtIdSexo").value = sexoIngresado;
		
		estadoCivilIngresado = prompt("Ingrese un estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
		while(estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado != 4)
		{
			estadoCivilIngresado = prompt("Ingrese un estado civil valido");
		}
		document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
		
		sueldoIngresado = prompt("Ingrese un sueldo NO menor a 8000");
		sueldoIngresado = parseInt(sueldoIngresado);
		while(sueldoIngresado < 8000)
		{
			sueldoIngresado = prompt("Ingrese un sueldo superior a 8000");
			sueldoIngresado = parseInt(sueldoIngresado);
		}
		document.getElementById("txtIdSueldo").value = sueldoIngresado;
		
		legajoIngresado = prompt("Ingrese un legajo")
		legajoIngresado = parseInt(legajoIngresado);
		while(legajoIngresado <1000 || legajoIngresado >9999)
		{
			legajoIngresado = prompt("Ingrese un valor entre 1000 y 9999");
			legajoIngresado = parseInt(legajoIngresado);
		}
		document.getElementById("txtIdLegajo").value = legajoIngresado;
		
		nacionalidadIngresada = prompt("Ingrese una nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
		while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N" )
		{
			nacionalidadIngresada = prompt("Ingrese una nacionalidad valida: A,E o N");
		}
		document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;
		
		contador = contador + 1;
	}



}
