/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
/*{
	let dividendo;
	let divisor;
	let resto;
	
	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	resto = dividendo % divisor;

	alert("El resto es " + resto);


}*/
{
	var dividendo;
	var divisor;
	var resto;
	var mensaje;
	
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	resto = dividendo % divisor;

	mensaje = "El resto es " + resto;
	
	alert(mensaje);



}

