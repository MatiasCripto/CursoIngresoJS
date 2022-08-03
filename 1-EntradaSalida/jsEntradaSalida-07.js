/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
/*{	
		let numero1;
		let numero2;
		let suma;
		
		numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
		numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

		suma = numero1 + numero2;

		alert("La suma es " + suma);




	}		

function restar()
{
	let numero1;
	let numero2;
	let resta;
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resta = numero1 - numero2;

	alert("La resta es " + resta);

}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let producto;
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	producto = numero1 * numero2;

	alert("El producto es " + producto);


}

function dividir()
{
	let numero1;
	let numero2;
	let resto;
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resto = numero1 / numero2;

	alert("El cociente es " + resto);
	

}*/

{
	var numeroUno;
    var numeroDos;
    var suma;
    var mensaje;

    numeroUno = document.getElementById("txtIdNumeroUno").value;
    numeroDos = document.getElementById("txtIdNumeroDos").value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    suma = numeroUno + numeroDos;

    mensaje = "La suma es " + suma;
	alert(mensaje);
	
}
function restar()
{
	var numeroUno;
    var numeroDos;
    var resta;
    var mensaje;

    numeroUno = document.getElementById("txtIdNumeroUno").value;
    numeroDos = document.getElementById("txtIdNumeroDos").value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    resta = numeroUno - numeroDos;

    mensaje = "La resta es " + resta;
	alert(mensaje);
}
function multiplicar()	
{
	var numeroUno;
    var numeroDos;
    var producto;
    var mensaje;

    numeroUno = document.getElementById("txtIdNumeroUno").value;
    numeroDos = document.getElementById("txtIdNumeroDos").value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

	producto = numeroUno * numeroDos;
	
	mensaje = "La multiplicacion da como resultado " + producto;
	alert(mensaje);
}
function dividir()
{
	var numeroUno;
    var numeroDos;
    var division;
    var mensaje;

    numeroUno = document.getElementById("txtIdNumeroUno").value;
    numeroDos = document.getElementById("txtIdNumeroDos").value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

	division = numeroUno / numeroDos;

	mensaje = "La division da como resultado " + division;
	alert(mensaje);
}


