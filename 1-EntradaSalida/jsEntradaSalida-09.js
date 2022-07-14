/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	/*
	let sueldo;
	let aumento;
	let resultado;

	
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	
	
	aumento = sueldo * 10 / 100;

	resultado = sueldo + aumento;

	document.getElementById("txtIdResultado").value = resultado;
	*/
	    let sueldo;
		let aumento;
		let resultado;
	
		
		sueldo = document.getElementById("txtIdSueldo").value;
		sueldo = parseFloat(sueldo);
	
		aumento = prompt("Ingrese el monto del aumento");
		aumento = parseFloat(aumento);
			
		aumento = sueldo * aumento / 100;
	
		resultado = sueldo + aumento;
	
		document.getElementById("txtIdResultado").value = resultado;
		
	
	

    


	



}
